from django.shortcuts import get_object_or_404, render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import Prompt, DietPrompt
from django.contrib.auth.decorators import login_required
# Create your views here.
from .forms import CreateUserForm, LoginForm
from django.http import HttpResponseNotFound, JsonResponse

def favicon_redirect_view(request):
    previous_page = request.META.get('HTTP_REFERER')
    if previous_page:
        return redirect(previous_page)
    else:
        messages.error(request, 'Something went wrong')
        return redirect('indeex')

def index(request):
    return render(request, 'index.html', {})

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
        return redirect('index')
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
                return render(request, 'index.html', context=context)
        else:
            messages.success(request, ('Incorrect Username or Password'))
            return render(request, 'login.html', {})
    return render(request, 'login.html', {})

def logout_user(request):
    logout(request)
    messages.success(request, ('You have been Logged Out'))
    return redirect('index')

def about(request):
    return render(request, 'About.html', {})


def workout(request):
    last_instance = Prompt.objects.latest('id')
    last_user = last_instance.user
    last_string = last_instance.sentence
    last_different_string = last_instance.different_sentence
    context = {
        'last_string': last_string,
        'last_user': last_user,
        'last_different_string': last_different_string
    }
    return render(request, 'Workout.html', context)

def music(request):
    return render(request, 'Music.html', {})

def community(request):
    return render(request, 'Community.html', {})

def checkin(request):
    return render(request, 'Checkin.html', {})

def diet(request):
    last_instance = DietPrompt.objects.latest('id')
    last_user = last_instance.user
    last_string = last_instance.sentence
    context = {
        'last_string': last_string,
        'last_user': last_user,
    }
    return render(request, 'Diet.html', context)

def dietform(request):
    return render(request, 'DietForm.html', {})

def diet_detail(request, pk):
    dietprompt = get_object_or_404(DietPrompt, pk=pk)
    return render(request, 'diet_detail.html', {'dietprompt': dietprompt})

def save_sentence(request):
    if request.method == 'POST':
        age = request.POST.get('age', None)
        gender = request.POST.get('gender', '')
        duration = request.POST.get('duration', '')
        fitness = request.POST.get('fitness', 'Any')
        typeofextra = request.POST.get('typeofextra', '')
        typeofworkout = request.POST.get('typeofworkout', '')
        other = request.POST.get('other', '')
        
        # Construct the sentence
        if typeofworkout == "other":
            sentence = f"Give me 5 {other} exercises at the gym for {typeofextra} for a {gender} age {age} with a description that lasts for {duration} minutes for a {fitness} fitness level separated by :"
        else:
            sentence = f"Give me 5 {typeofworkout} exercises at the gym for {typeofextra} for a {gender} age {age} with a description that lasts for {duration} minutes for a {fitness} fitness level separated by :"
        
        different_sentence = sentence + " Not Included "
        
        # Validate form data
        if sentence.strip() == "":
            messages.error(request, "Sentence cannot be empty")
            return redirect('workout')
        
        # Create Prompt instance
        if request.user.is_authenticated:
            Prompt.objects.create(user=request.user, sentence=sentence, different_sentence=different_sentence, age=age, gender=gender, duration=duration, fitness=fitness, typeofworkout=typeofworkout, other=other)
        else:
            Prompt.objects.create(sentence=sentence, different_sentence=different_sentence, age=age, gender=gender, duration=duration, fitness=fitness, typeofworkout=typeofworkout, other=other)
        
        # Redirect to appropriate page
        return redirect('workout')
    
    else:
        messages.error(request, "Error: Invalid request method")
        return render(request, 'index.html')  # Render the form template
    
def save_sentence_diet(request):
    if request.method == 'POST':
        age = request.POST.get('age', None)
        gender = request.POST.get('gender', 'Not Specified')
        weight = request.POST.get('weight', None)
        weightgoal = request.POST.get('weightgoal', None)
        weightcontrol = request.POST.get('weightcontrol', None)
        foodAllergies = request.POST.get('foodAllergies', '')
        typeofdiet = request.POST.get('typeofdiet', '')
        
        # Construct the sentence
        if weightcontrol is None and weightgoal is None:
            sentence = f"Give me a week(Separated by 7 days and meals are separated -) healthy diet plan for {gender} {age} year old that weights {weight} pound and is allegric to {foodAllergies}"  
        elif weightcontrol is None and weightgoal is not None :
            sentence = f"Give me a week(Separated by 7 days and meals are separated -) for a Weight adjustment diet plan for {gender} {age} year old that weights {weight} pounds and wants to be {weightgoal} pounds and is allegric to {foodAllergies}"
        elif weightcontrol is not None and weightgoal is None:
            sentence = f"Give me a week(Separated by 7 days and meals are separated -) for a vegan diet plan for {weightcontrol} for a {gender} {age} year old that weights {weight} pounds is allegric to {foodAllergies}"
        
        # Validate form data
        if sentence.strip() == "":
            messages.error(request, "Sentence cannot be empty")
            return redirect('dietform')
        
        # Create Prompt instance
        if request.user.is_authenticated:
            DietPrompt.objects.create(user=request.user, age=age, gender=gender, weight=weight, weightgoal=weightgoal, weightcontrol=weightcontrol, foodAllergies=foodAllergies, sentence=sentence, typeofdiet=typeofdiet)
        else:
            DietPrompt.objects.create(age=age, gender=gender, weight=weight, weightgoal=weightgoal, weightcontrol=weightcontrol, foodAllergies=foodAllergies, sentence=sentence, typeofdiet=typeofdiet)

         
        # Redirect to appropriate page
        return redirect('diet')
    
    else:
        messages.error(request, "Error: Invalid request method")
        return render(request, 'index.html')  # Render the form template
@login_required
def history(request):
    user = request.user
    last_10_workouts = user.prompt_set.order_by('-id')[:10]
    last_10_diets = user.dietprompt_set.order_by('-id')[:10]
    context = {
        'last_10_workouts': last_10_workouts,
        'last_10_diets': last_10_diets,
    }
    
    # Render the 'history.html' template with the context
    return render(request, 'history.html', context)


def success(request):
    return render(request, 'success.html', {})

def my_view_request(request):
    # Process the request and prepare the data
    data = {'message': 'Hello from Django!'}
    # Return a JSON response
    return JsonResponse(data)

def my_view(request):
    return render(request, 'test.html', {})

    
