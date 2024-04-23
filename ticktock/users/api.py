import datetime
from django.shortcuts import get_object_or_404
from ninja import NinjaAPI, Schema
from .models import Event, User
from pydantic import BaseModel
from typing import List

api = NinjaAPI()

class EventIn(Schema):
    name: str
    description: str
    start_time: datetime.datetime
    end_time: datetime.datetime
    subevents: List["EventOut"] = None
    username: str = None

class UserOut(Schema):
    username: str
    id: int
    
class EventOut(Schema):
    name: str
    description: str
    start_time: datetime.datetime
    end_time: datetime.datetime
    subevents: List["EventOut"] = None
    user: UserOut

@api.get("/event/{event_id}", response=EventOut)
def get_event(request, event_id: str):
    event_id = str(event_id)
    event = get_object_or_404(Event, id=event_id)
    return event

@api.get("/events", response=List[EventOut])
def list_events(request):
    qs = Event.objects.all().filter(is_subevent=False)
    return qs

@api.delete("/event/{event_id}")
def delete_event(request, event_id: str):
    event_id = str(event_id)
    event = get_object_or_404(Event, id=event_id)
    event.delete()
    return {"success": True}

@api.put("/event/{event_id}")
def update_event(request, event_id: str, name: str, description: str, start_time: datetime.datetime, end_time: datetime.datetime):
    event_id = str(event_id)
    event = get_object_or_404(Event, id=event_id)
    event.name = name
    event.description = description
    event.start_time = start_time
    event.end_time = end_time
    event.save()
    return {"success": True}

@api.post("/event")
def create_event(request, event: EventIn):
    user = User.objects.get(username=event.username)
    event = Event(name=event.name, description=event.description, start_time=event.start_time, end_time=event.end_time, user=user)
    event.save()
    return {"success": True}