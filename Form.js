document.addEventListener('DOMContentLoaded', function () {
    const openMiniPopupButtons = document.querySelectorAll('.open-mini-popup');
    openMiniPopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPopupId = button.getAttribute('data-popup-target');
            const targetPopup = document.getElementById(targetPopupId);
            const otherPopupId = targetPopupId === 'mini-workout-popup' ? 'mini-yoga-popup' : 'mini-workout-popup';
            const otherPopup = document.getElementById(otherPopupId);
            
            if (targetPopup.style.display === 'none') {
                targetPopup.style.display = 'block';
                otherPopup.style.display = 'none';
            } else {
                targetPopup.style.display = 'none';
            }
        });
    });
                // Close button functionality
                const closeButtons = document.querySelectorAll('.popup-close');
                closeButtons.forEach(closeButton => {
                    closeButton.addEventListener('click', () => {
                        const popup = closeButton.parentElement;
                        popup.style.display = 'none';
            });
        });
const startYogaButton = document.querySelector('#mini-yoga-popup .Workout');
const exitYogaButton = document.querySelector('#mini-yoga-popup .Homepage');

startYogaButton.addEventListener('click', () => {
        // Redirect to existing Workout.html when Start button in Yoga form is clicked
        event.preventDefault();
        window.location.href = 'Workout.html'; 
    });

exitYogaButton.addEventListener('click', () => {
    // Close the Yoga form when Exit button is clicked
    event.preventDefault();
    if (confirm("Are you sure you want to exit?")) {
    window.location.href = 'Homepage.html';
    }
});

const startWorkoutButton = document.querySelector('#mini-workout-popup .Workout');
const exitWorkoutButton = document.querySelector('#mini-workout-popup .Homepage');

startWorkoutButton.addEventListener('click', (event) => {
event.preventDefault(); // Prevent form submission
let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let gender = document.querySelector('input[name="Gender"]:checked')?.value || "";
let duration = document.getElementById("Duration").value;
let fitnessLevel = document.querySelector('input[name="Fitness Level"]:checked')?.value || "";
let Body_Part = document.getElementById("Body-Part").value;
    
Workout_prompt = `Give me 5 ${Body_Part} exercises for ${gender} age ${age} with a description that last for ${duration} for ${fitnessLevel} seperated by :`;
localStorage.setItem("Workout_prompt_key", Workout_prompt);
console.log(Workout_prompt);
        
window.location.href = 'Workout.html'; // Redirect to Workout.html

});

exitWorkoutButton.addEventListener('click', () => {
    // Close the Yoga form when Exit button is clicked
    event.preventDefault();
    if (confirm("Are you sure you want to exit?")) {
    window.location.href = 'Homepage.html';
    }
});

});

