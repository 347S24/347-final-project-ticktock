from django.urls import path
from . import views
from django.views.generic import TemplateView
from .api import api

urlpatterns = [
    path("all", views.EventListView.as_view(), name="all"),   
    path('api/', api.urls),
]
