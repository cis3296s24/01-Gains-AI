from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
# Create your views here.
from .forms import CreateUserForm, LoginForm
from .forms import CheckinForm
from .models import Checkin
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def homepage(request):
    return render(request, 'Homepage.html', {})

def form(request):
    return render(request, 'form.html', {})

def signup(request):
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        print(request.POST)
        if form.is_valid():
            form.save()
        else:
            print(form.errors)
            messages.success(request, (form.errors))
            return render(request, 'signup.html', {})
        messages.success(request, ('Signed Up Successfully'))
        return redirect('homepage')
    else:
        return render(request, 'signup.html', {})
    
def login_user(request):
    if request.method == "POST":
        form = LoginForm(data=request.POST)
        print(form)
        if form.is_valid():
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request = request, username=username, password=password)
            print(user)
            if user is not None:
                login(request, user)
                messages.success(request, ('You have been Logged In'))
                user = request.user
                username = user.username
                email = user.email
                first_name = user.first_name
                last_name = user.last_name
                context = {
                    'username': username,
                    'email': email,
                    'first_name': first_name,
                    'last_name': last_name,
                }
                return render(request, 'homepage.html', context=context)
        else:
            messages.success(request, ('Incorrect Username or Password'))
            return render(request, 'login.html', {})
    return render(request, 'login.html', {})

def logout_user(request):
    logout(request)
    messages.success(request, ('You have been Logged Out'))
    return redirect('homepage')

def about(request):
    return render(request, 'About.html', {})


def workout(request):
    return render(request, 'Workout.html', {})

def music(request):
    return render(request, 'Music.html', {})

def checkin(request):
    if request.method == 'POST':
        form = CheckinForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('homepage')  # Redirect to homepage after successful submission
    else:
        form = CheckinForm()
    return render(request, 'checkin.html', {'form': form})

def homepage(request):
    checkin_dates = Checkin.objects.all()
    return render(request, 'homepage.html', {'checkin_dates': checkin_dates})
    
@csrf_exempt
def update_checkedin_days(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        checkedInDays = data['checkedInDays']
        request.session['checkedInDays'] = checkedInDays
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})