from django.db import models

# Create your models here.
class Member(models.Model):
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    age = models.IntegerField(default=20)
    
    def __str__(self):
        return self.fname + ' ' + self.lname