from django.shortcuts import get_object_or_404, render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import DietOutput, Prompt, DietPrompt, WorkoutOutput
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

def signup2(request):
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
    
def signup(request):
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Signed Up Successfully')
            return redirect('index')
        else:
            # If form is not valid, retrieve and display the first error message
            error_message = next(iter(form.errors.values()))[0]  # Get the first error message
            messages.error(request, error_message)
            return render(request, 'signup.html', {'form': form})
    else:
        form = CreateUserForm()
    return render(request, 'signup.html', {'form': form})

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

def save_sentence(request):
    if request.method == 'POST':
        age = request.POST.get('age', None)
        gender = request.POST.get('gender', '')
        duration = request.POST.get('duration', '')
        fitness = request.POST.get('fitness', 'Any')
        typeofextra = request.POST.get('typeofextra', '')
        typeofworkout = request.POST.get('typeofworkout', '')
        other = request.POST.get('other', None)
        typeofworkoutform = request.POST.get('typeofworkoutform', '')
        # Construct the sentence
        if typeofworkoutform == 'Gym':
            if typeofworkout == "others":
                sentence = f"Give me 5 {other} gym exercises for {gender} age {age} with sets and reps and with a description that last for {duration} minutes for {fitness} seperated by \":\""
            else:
                sentence = f"Give me 5 {typeofworkout} gym exercises for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes for {fitness} separated by \":\"" 
        elif typeofworkoutform == 'Home':
            if typeofworkout == "others":
                sentence = f"Give me 5 {other} home exercises Limit to these equipment: {typeofextra} for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes for {fitness} seperated by \":\"" 
            else:
                sentence = f"Give me 5 {typeofworkout} home exercises Limit to these equipment: {typeofextra} for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes for {fitness} seperated by \":\"" 
        elif typeofworkoutform == 'BodyBuilding':
            if typeofworkout == "others":
                sentence = f"Give me 5 {other} exercise for {typeofextra} for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes seperated by \":\"" 
            else:
                sentence = f"Give me 5 {typeofworkout} exercise for {typeofextra} for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes seperated by \":\"" 
        elif typeofworkoutform == 'Calisthenics':
            if typeofworkout == "others":
                sentence = f"Give me 5 {other} {typeofextra} Calisthenics for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes seperated by \":\"" 
            else:
                sentence = f"Give me 5 {typeofworkout} {typeofextra} Calisthenics for {gender} age {age} with sets and reps and with a description that lasts for {duration} minutes seperated by \":\"" 
        elif typeofworkoutform == 'Yoga':
            sentence = f"Give me 5 {typeofworkout} yoga exercise for {gender} with sets and reps and with a description that lasts for {duration} minutes for {fitness} seperated by \":\"" 
        elif typeofworkoutform == 'Meditation':
            sentence = f"Give me 5 {typeofworkout} Meditation Techniques for {gender} with a description that last for {duration} minutes seperated by \":\""
                
        different_sentence = sentence + " Not Included "
        
        # Validate form data
        if sentence.strip() == "":
            messages.error(request, "Sentence cannot be empty")
            return redirect('workout')
        
        # Create Prompt instance
        if request.user.is_authenticated:
            if(typeofworkoutform == 'Meditation' or typeofworkoutform == 'Yoga' ):
                Prompt.objects.create(user=request.user, sentence=sentence, different_sentence=different_sentence, gender=gender, duration=duration, fitness=fitness, typeofworkout=typeofworkout, typeofworkoutform=typeofworkoutform)
            else: 
                Prompt.objects.create(user=request.user, sentence=sentence, different_sentence=different_sentence, age=age, gender=gender, duration=duration, fitness=fitness, typeofworkout=typeofworkout, other=other, typeofworkoutform=typeofworkoutform)
        else:
            if(typeofworkoutform == 'Meditation' or typeofworkoutform == 'Yoga' ):
                Prompt.objects.create(sentence=sentence, different_sentence=different_sentence, gender=gender, duration=duration, fitness=fitness, typeofworkout=typeofworkout, typeofworkoutform=typeofworkoutform)
            else: 
                Prompt.objects.create(sentence=sentence, different_sentence=different_sentence, age=age, gender=gender, duration=duration, fitness=fitness, typeofworkout=typeofworkout, other=other, typeofworkoutform=typeofworkoutform)
        
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

def save_output_diet(request):
    if request.method == 'POST':
        message = request.body.decode('utf-8')
        if message:
            # Get the latest DietPrompt based on the latest ID
            latest_prompt = DietPrompt.objects.latest('id')

            # Create a new DietOutput object based on the latest prompt
            new_output = DietOutput(diet_prompt=latest_prompt, diet_output=message)
            new_output.save()
            return JsonResponse({'status': 'success', 'message': message})
    return JsonResponse({'status': 'error', 'message': 'No message provided'})

def diet_detail(request, pk):
    diet_prompt = get_object_or_404(DietPrompt, pk=pk)
    diet_output = DietOutput.objects.filter(diet_prompt=diet_prompt).first()

    if diet_output:
        diet_output_string = diet_output.diet_output
        return render(request, 'diet_detail.html', {'diet_prompt': diet_prompt, 'diet_output': diet_output_string})
    else:
        return render(request, 'diet_detail.html', {'diet_prompt': diet_prompt, 'diet_output': None})

def save_output_workout(request):
    if request.method == 'POST':
        message = request.body.decode('utf-8')
        if message:
            # Get the latest Prompt based on the latest ID
            latest_prompt = Prompt.objects.latest('id')

            # Create a new DietOutput object based on the latest prompt
            new_output = WorkoutOutput(workout_prompt=latest_prompt, workout_output=message)
            new_output.save()
            return JsonResponse({'status': 'success', 'message': message})
    return JsonResponse({'status': 'error', 'message': 'No message provided'})

def workout_detail(request, pk):
    prompt = get_object_or_404(Prompt, pk=pk)
    workout_output = WorkoutOutput.objects.filter(workout_prompt=prompt).first()

    if workout_output:
        workout_output_string = workout_output.workout_output
        return render(request, 'workout_detail.html', {'prompt': prompt, 'workout_output': workout_output_string})
    else:
        return render(request, 'workout_detail.html', {'prompt': prompt, 'workout_output': None})
