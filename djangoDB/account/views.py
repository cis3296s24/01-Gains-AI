from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Member, SignUpMember
from .forms import Memberform, SignUpform
from django.contrib import messages
# Create your views here.

def view_database(request):
    all_members = Member.objects.all
    return render(request, 'view_database.html', {'all' : all_members})

def register(request):
    if request.method == "POST":
        form = Memberform(request.POST or None)
        if form.is_valid():
            form.save()
        else:
            fname = request.POST['fname']
            lname = request.POST['lname']
            email = request.POST['email']
            age = request.POST['age']
            messages.success(request, ('There was an error in your form! Please Try again'))
            return render(request, 'register.html',
                          {'fname': fname,
                           'lname': lname,
                           'email': email,
                           'age': age})
        messages.success(request, ('Your Form Has Been Submitted Successfully!'))
        return redirect('view_database')
    else:
        return render(request, 'register.html', {})
    
def homepage(request):
    return render(request, 'Homepage.html', {})

def form(request):
    return render(request, 'form.html', {})

def signup(request):
    if request.method == "POST":
        form = SignUpform(request.POST or None)
        if form.is_valid():
            form.save()
        else:
            fname = request.POST['fname']
            lname = request.POST['lname']
            email = request.POST['email']
            messages.success(request, ('There was an error in your form! Please Try again'))
            return render(request, 'signup.html',
                          {'fname': fname,
                           'lname': lname,
                           'email': email})
        messages.success(request, ('Your Form Has Been Submitted Successfully!'))
        return redirect('homepage')
    else:
        return render(request, 'signup.html', {})
def login(request):
    return render(request, 'login.html', {})


    
    
    
