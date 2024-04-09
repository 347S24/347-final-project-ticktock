from django.urls import include, path


from .views import user_detail_view
from .views import user_redirect_view
from .views import user_update_view
from .views import event_detail_view
from . import views
from .api import api

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("events/", views.EventListView.as_view(), name="event-list"),
    path("events/<uuid:pk>/", view=event_detail_view, name="event-detail"),
    path("api/", api.urls),
    path("<str:username>/", view=user_detail_view, name="detail"),
]
