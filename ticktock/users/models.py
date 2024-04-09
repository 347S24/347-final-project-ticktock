import uuid
from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.db import models

class User(AbstractUser):
    """
    Default custom user model for Ultimate ticktock.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    # First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    first_name = None  # type: ignore[assignment]
    last_name = None  # type: ignore[assignment]
    
    def get_absolute_url(self) -> str:
        """Get URL for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})

    # Create your models here.
class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subevents = models.ManyToManyField('Event', blank=True, default=None)
    is_subevent = models.BooleanField(default=False)

    def __str__(self):
        """String for representing the Model object."""
        return self.name
    
    def get_absolute_url(self):
        """Returns the url to access a particular instance of the model."""
        return reverse('event-detail', args=[(self.id)])

class EventSequence(models.Model):
    events = models.ManyToManyField(Event)

    def __str__(self):
        """String for representing the Model object."""
        return ', '.join([event.name for event in self.events.all()])
    
    def add_event(self, event):
        self.events.add(event)
        self.events = self.events.all().order_by('start_time')


    def remove_event(self, event):
        self.events.remove(event)