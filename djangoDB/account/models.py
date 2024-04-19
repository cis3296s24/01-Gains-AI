from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Prompt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    sentence = models.TextField()
    different_sentence = models.TextField()
    
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=20)
    duration = models.PositiveIntegerField()
    fitness = models.CharField(max_length=30)
    typeofworkout = models.CharField(max_length=50)
    other = models.TextField()
    
    def __str__(self):
        if self.user:
            return f'User: {self.user.username} || Description: {self.sentence} ||'
        else:
            return f'User: Guest || Description: {self.sentence} ||'