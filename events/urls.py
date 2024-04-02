from django.urls import path
from django.views.generic import TemplateView
from .api import api

from . import views

app_name = "events"
urlpatterns = [
    path("", TemplateView.as_view(template_name="events/index.html"), name="index"),
    path("api/", api.urls),
    path('event/<int:pk>/', views.EventDetailView.as_view(), name='event-detail'),]
