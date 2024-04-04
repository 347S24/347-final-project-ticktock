import datetime
from ninja import NinjaAPI, Schema
from .models import Event

api = NinjaAPI()

class EventOut(Schema):
    name: str
    description: str
    start_time: datetime.datetime
    end_time: datetime.datetime

from typing import List

#dont need
#@api.get("/games/{game_id}", response=GameOut)
#def get_book(request, game_id: int):
#    game = get_object_or_404(Game, id=game_id)
#    return game

@api.get("/events", response=List[EventOut])
def list_events(request):
    qs = Event.objects.all()
    return qs

