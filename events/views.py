from django.shortcuts import render
from django.views import generic
from .models import Event

# Create your views here.
class EventListView(generic.ListView):
    model = Event
    context_object_name = "event_list"
    
class EventDetailView(generic.DetailView):
    model = Event
    context_object_name = "event-detail"
    template_name = "events/event_detail.html"
    
class HomeView(generic.TemplateView):
    template_name = "pages/home.html"

class AboutView(generic.TemplateView):
    template_name = "pages/about.html"

