from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns


# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        """String for representing the Model object."""
        return self.name
    
    def get_absolute_url(self):
        """Returns the URL to access a detail record for this game."""
        return reverse('event-detail', args=[str(self.id)])
        