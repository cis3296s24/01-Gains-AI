from django.shortcuts import render
from django.http import HttpResponse
from .models import Member

# Create your views here.

def say_hello(request):
    return render(request, 'hello.html', {})

def view_database(request):
    all_members = Member.objects.all
    return render(request, 'view_database.html', {'all' : all_members})

def register(request):
    return render(request, 'register.html', {})