from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.forms.widgets import PasswordInput, TextInput
from .models import Prompt, DietPrompt

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'first_name', 'last_name']
    
class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=TextInput())
    password = forms.CharField(widget=PasswordInput())

class PromptForm(forms.ModelForm):
    class Meta:
        model = Prompt
        fields = ['sentence', 'different_sentence', 'age', 'gender', 'duration', 'fitness', 'typeofworkout', 'other', 'typeofextra']
        
class DietForm(forms.ModelForm):
    class Meta:
        model = DietPrompt
        exclude = ['user']
