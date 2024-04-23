document.addEventListener('DOMContentLoaded', function () {
   
 
    // opening/closing mini popups
    const openMiniPopups = document.querySelectorAll('.open-mini-popup');
    const miniPopups = document.querySelectorAll('.mini-popup');

    openMiniPopups.forEach((openBtn) => {
        openBtn.addEventListener('click', () => {
            const popupId = openBtn.getAttribute('data-popup-target');
            const popup = document.getElementById(popupId);

            if (popup) {
                // Close all other popups
                miniPopups.forEach((popup) => {
                    popup.style.display = 'none';
                });

                popup.style.display = 'block';
            }
        });
    });

    // Add event listener for close button
    miniPopups.forEach(popup => {
        const closeButton = popup.querySelector('.popup-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        }
    });
});

    function handleFormSubmissionGym(event, actionUrl) {
        // Handle form submission 
        event.preventDefault();
        let name = document.getElementById("name.gym").value;
        let age = document.getElementById("age.gym").value;
        let gender = document.querySelector('input[name="Gender.gym"]:checked')?.value || "";
        let duration = document.getElementById("Duration.gym").value;
        let fitnessLevel = document.querySelector('input[name="Fitness Level.gym"]:checked')?.value || "";
        var selectElement = document.getElementById('GymWorkout');
        var Body_Part = selectElement.value;
        if(Body_Part == "others"){
            var specifiedWorkoutElement = document.getElementById('specifiedBodypartGym');
            Body_Part = specifiedWorkoutElement.value
        }
    
        Workout_prompt = `Give me 5 ${Body_Part} gym exercises for ${gender} age ${age} with sets and reps and with a description that last for ${duration} minutes for ${fitnessLevel} seperated by ":"`;
        localStorage.setItem("Workout_prompt_key", Workout_prompt);
        Different_prompt = Workout_prompt + " (Not Included: ";
        localStorage.setItem("DifferentWorkout_prompt_key", Different_prompt);
        console.log(Workout_prompt);
        //  form submission logic
        console.log('Form submitted!');
        // Redirect
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("form", actionUrl);
        window.location.href = newUrl;
    }

    var checkboxes = document.querySelectorAll('input[name="TypesofEquipment[]"]:checked');
    var selectedValues = [];
    checkboxes.forEach(function(checkbox) {
        selectedValues.push(checkbox.value);
    });
    function handleFormSubmissionHomeWorkout(event, actionUrl) {
        // Handle form submission 
        event.preventDefault();
        let name = document.getElementById("name.home").value;
        let age = document.getElementById("age.home").value;
        let gender = document.querySelector('input[name="Gender.home"]:checked')?.value || "";
        let duration = document.getElementById("Duration.home").value;
        let fitnessLevel = document.querySelector('input[name="Fitness Level.home"]:checked')?.value || "";

        var checkboxes = document.querySelectorAll('input[name="TypesofEquipment[]"]:checked');
        var selectedValues = [];
        checkboxes.forEach(function(checkbox) {
            selectedValues.push(checkbox.value);
        });

        var limits= "Limit to these equipment: " + selectedValues.join(', ');



        var selectElement = document.getElementById('HomeWorkout');
        var Body_Part = selectElement.value;
        if(Body_Part == "others"){
            var specifiedWorkoutElement = document.getElementById('specifiedBodypart_home');
            Body_Part = specifiedWorkoutElement.value
        }
    
        Workout_prompt = `Give me 5 ${Body_Part} home exercises ${limits}) for ${gender} age ${age} with sets and reps and with a description that last for ${duration} minutes for ${fitnessLevel} seperated by ":"`;
        localStorage.setItem("Workout_prompt_key", Workout_prompt);
        Different_prompt = Workout_prompt + " (Not Included: ";
        localStorage.setItem("DifferentWorkout_prompt_key", Different_prompt);
        console.log(Workout_prompt);
        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("form", actionUrl);
        window.location.href = newUrl;
    }

    function handleFormSubmissionWorkoutBodyBuilding(event, actionUrl) {
        // Handle form submission 
        event.preventDefault();
        let name = document.getElementById("name.BodyBuilding").value;
        let age = document.getElementById("age.BodyBuilding").value;
        let gender = document.querySelector('input[name="Gender.BodyBuilding"]:checked')?.value || "";
        let duration = document.getElementById("Duration.BodyBuilding").value;
        

        var BodyBuilding = document.getElementById('BodyBuilding');
        var TypeofBodyBuilding = BodyBuilding.value;

        var selectElement = document.getElementById('BodyWorkout');
        var Body_Part = selectElement.value;
        if(Body_Part == "others"){
            var specifiedWorkoutElement = document.getElementById('specifiedBodypart_body');
            Body_Part = specifiedWorkoutElement.value
        }

        Workout_prompt = `Give me 5 ${Body_Part} exercise for ${TypeofBodyBuilding} for ${gender} age ${age} with sets and reps and with a description that last for ${duration} minutes seperated by ":"`;
        localStorage.setItem("Workout_prompt_key", Workout_prompt);
        Different_prompt = Workout_prompt + " (Not Included: ";
        localStorage.setItem("DifferentWorkout_prompt_key", Different_prompt);
        console.log(Workout_prompt);
        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("form", actionUrl);
        window.location.href = newUrl;
    }


    function handleFormSubmissionWorkoutCalisthenics(event, actionUrl) {
        // Handle form submission 
        event.preventDefault();
        let name = document.getElementById("name.Calisthenics").value;
        let age = document.getElementById("age.Calisthenics").value;
        let gender = document.querySelector('input[name="Gender.Calisthenics"]:checked')?.value || "";
        let duration = document.getElementById("Duration.Calisthenics").value;
        

        var Calisthenics = document.getElementById('Calistenthic');
        var TypeofCalisthenics = Calisthenics.value;


        var selectElement = document.getElementById('Bodypart');
        var Body_Part = selectElement.value;
        if (Body_Part == "others") {
            var specifiedWorkoutElement = document.getElementById('specifiedBodypart');
            Body_Part = specifiedWorkoutElement.value
        }

        Workout_prompt = `Give me 5 ${Body_Part} ${TypeofCalisthenics} Calisthenics for ${gender} age ${age} with sets and reps and with a description that last for ${duration} minutes seperated by ":"`;
        localStorage.setItem("Workout_prompt_key", Workout_prompt);
        Different_prompt = Workout_prompt + " (Not Included: ";
        localStorage.setItem("DifferentWorkout_prompt_key", Different_prompt);
        console.log(Workout_prompt);
        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("form", actionUrl);
        window.location.href = newUrl;
    }

 


    function handleFormSubmissionWorkoutYoga(event, actionUrl) {
        // Handle form submission 
        event.preventDefault();
        let name = document.getElementById("yoga-name").value;
        let gender = document.querySelector('input[name="Gender.yoga"]:checked')?.value || "";
        let duration = document.getElementById("yoga-duration").value;
        let fitnessLevel = document.getElementById("Fitness Level.yoga").value;
        


        var Yoga = document.getElementById('Yoga');
        var TypeofYoga = Yoga.value;



        Workout_prompt = `Give me 5 ${TypeofYoga} yoga exercise for ${gender} with sets and reps and with a description that last for ${duration} minutes for ${fitnessLevel} seperated by ":"`;
        localStorage.setItem("Workout_prompt_key", Workout_prompt);
        Different_prompt = Workout_prompt + " (Not Included: ";
        localStorage.setItem("DifferentWorkout_prompt_key", Different_prompt);
        console.log(Workout_prompt);
        //  form submission logic
        console.log('Form submitted!');
        
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("form", actionUrl);
        window.location.href = newUrl;
    }

    

    function handleFormSubmissionMeditation(event, actionUrl) {
        // Handle form submission 
        event.preventDefault();
        let name = document.getElementById("name.Meditation").value;
        let gender = document.querySelector('input[name="Gender.Meditation"]:checked')?.value || "";
        let duration = document.getElementById("meditation-duration").value;
        

        var Meditation = document.getElementById('Meditation');
        var TypeofMeditation = Meditation.value;



        Workout_prompt = `Give me 5 ${TypeofMeditation} Meditation Techniques for ${gender} with sets and reps and with a description that last for ${duration} minutes seperated by ":"`;
        localStorage.setItem("Workout_prompt_key", Workout_prompt);
        Different_prompt = Workout_prompt + " (Not Included: ";
        localStorage.setItem("DifferentWorkout_prompt_key", Different_prompt);
        console.log(Workout_prompt);
        //  form submission logic
        console.log('Form submitted!');
        
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("form", actionUrl);
        window.location.href = newUrl;
    }




