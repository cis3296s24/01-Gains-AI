from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Prompt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    sentence = models.TextField()
    different_sentence = models.TextField()
    
    age = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=20)
    duration = models.PositiveIntegerField()
    fitness = models.CharField(max_length=30)
    typeofextra = models.CharField(max_length=50)
    typeofworkout = models.CharField(max_length=50)
    other = models.TextField()
    typeofworkoutform = models.CharField(max_length=50)
    
    def __str__(self):
        if self.user:
            return f'User: {self.user.username} || Description: {self.sentence} ||'
        else:
            return f'User: Guest || Description: {self.sentence} ||'

class DietPrompt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    sentence = models.TextField()
    
    age = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=20)
    weight = models.IntegerField(blank=True, null=True)
    weightgoal = models.IntegerField(blank=True, null=True)
    weightcontrol = models.CharField(max_length=50, blank=True, null=True)
    foodAllergies = models.CharField(max_length=50)
    typeofdiet = models.CharField(max_length=50)
    
    def __str__(self):
        if self.user:
            return f'User: {self.user.username} || Description: {self.sentence} ||'
        else:
            return f'User: Guest || Description: {self.sentence} ||'
        
class DietOutput(models.Model):
    diet_prompt = models.ForeignKey(DietPrompt, on_delete=models.CASCADE, null=True, blank=True)
    diet_output = models.TextField()
    
    def __str__(self):
        user = self.diet_prompt.user
        if user:
            return f'User: {user} || Description: {self.diet_prompt.sentence}'
        else:
            return f'User: Guest || Description: {self.diet_prompt.sentence}'

class WorkoutOutput(models.Model):
    workout_prompt = models.ForeignKey(Prompt, on_delete=models.CASCADE, null=True, blank=True)
    workout_output = models.TextField()
    
    def __str__(self):
        user = self.workout_prompt.user
        if user:
            return f'User: {user} || Description: {self.workout_prompt.sentence}'
        else:
            return f'User: Guest || Description: {self.workout_prompt.sentence}'
    