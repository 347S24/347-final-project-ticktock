import uuid
from django.db import models
from django.urls import reverse

from ticktock import users


# Create your models here.
class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Unique ID for this particular event across whole site")
    
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)
    user = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        """String for representing the Model object."""
        return self.name
    
    def get_absolute_url(self):
        """Returns the URL to access a detail record for this game."""
        return reverse('event-detail', args=[str(self.id)])
        
