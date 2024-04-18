from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Prompt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sentence = models.TextField()
    different_sentence = models.TextField()

    def __str__(self):
        return 'User:' + self.user.username + 'Description: ' + self.sentence