from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse
from django.views import generic
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView
from django.views.generic import RedirectView
from django.views.generic import UpdateView


from ticktock.users.models import User, Event


class UserDetailView(LoginRequiredMixin, DetailView):
    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()


class UserUpdateView(LoginRequiredMixin, SuccessMessageMixin, UpdateView):
    model = User
    fields = ["name"]
    success_message = _("Information successfully updated")

    def get_success_url(self):
        # for mypy to know that the user is authenticated
        assert self.request.user.is_authenticated
        return self.request.user.get_absolute_url()

    def get_object(self):
        return self.request.user


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()


# Create your views here.
class EventListView(generic.ListView):
    model = Event
    context_object_name = "event_list"
    template_name = "events/event_list.html"
    
event_list_view = EventListView.as_view()

class EventDetailView(generic.DetailView):
    model = Event
    context_object_name = "event-detail"
    template_name = "events/event_detail.html"

event_detail_view = EventDetailView.as_view()

class HomeView(generic.TemplateView):
    template_name = "pages/home.html"

home_view = HomeView.as_view()

class AboutView(generic.TemplateView):
    template_name = "pages/about.html"
    
AboutView = AboutView.as_view()