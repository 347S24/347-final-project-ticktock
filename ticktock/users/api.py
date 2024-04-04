import datetime
from django.shortcuts import get_object_or_404
from ninja import NinjaAPI, Schema
from .models import Event

api = NinjaAPI()

class EventOut(Schema):
    name: str
    description: str
    start_time: datetime.datetime
    end_time: datetime.datetime

from typing import List

@api.get("/event/{event_id}", response=EventOut)
def get_event(request, event_id: str):
    event_id = str(event_id)
    event = get_object_or_404(Event, id=event_id)
    return event

@api.get("/events", response=List[EventOut])
def list_events(request):
    qs = Event.objects.all()
    return qs

