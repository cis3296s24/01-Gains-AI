from django import forms
from .models import Member, SignUpMember

class Memberform(forms.ModelForm):
    class Meta:
        model = Member
        fields = ['fname', 'lname', 'email', 'password', 'age']

class SignUpform(forms.ModelForm):
    class Meta:
        model = SignUpMember
        fields = ['fname', 'lname', 'email', 'password']
        
        
    
        