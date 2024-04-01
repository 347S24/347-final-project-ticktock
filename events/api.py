import datetime
from ninja import NinjaAPI, Schema
from events.models import Event


api = NinjaAPI()

class EventOut(Schema):
    name: str
    description: str
    start_time: datetime.date
    end_time: datetime.date

from typing import List

@api.get("/events", response=List[EventOut])
def list_events(request):
    qs = Event.objects.all()
    return qs

