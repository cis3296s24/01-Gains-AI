from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class FitnessRecord(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    duration = models.DurationField()
    FITNESS_LEVEL_CHOICES = [
        ('B', 'Beginner'),
        ('I', 'Intermediate'),
        ('A', 'Advanced'),
    ]
    fitness_level = models.CharField(max_length=1, choices=FITNESS_LEVEL_CHOICES)
    workout_prompt = models.TextField()

    def __str__(self):
        return self.name