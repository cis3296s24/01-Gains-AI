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




function handleFormSubmissionHealthydiet(event, actionUrl) {
    // Handle form submission 
    event.preventDefault();
    let name = document.getElementById("name.Healthydiet").value;
    let age = document.getElementById("age.Healthydiet").value;
    let gender = document.querySelector('input[name="Gender.Healthydiet"]:checked')?.value || "";
    let weight = document.getElementById("Weight.Healthydiet").value;
    let Food_Allergies = document.getElementById('Food Allergies.Healthydiet').value;
    
 

    Diet_prompt = `Give me a week(Separated by 7 days and meals are separated -) healthy diet plan for ${gender} ${age} year old that weights ${weight} pound and is allegric to ${Food_Allergies}`;
    localStorage.setItem("Diet_prompt_key", Diet_prompt);
   

    window.location.href = actionUrl;
    console.log(Diet_prompt);
}


function handleFormSubmissionWeightGain(event, actionUrl) {
    // Handle form submission 
    event.preventDefault();
    let name = document.getElementById("name.Weightgain").value;
    let age = document.getElementById("age.Weightgain").value;
    let gender = document.querySelector('input[name="Gender.Weightgain"]:checked')?.value || "";
    let weight = document.getElementById("Weight.Weightgain").value;
    let goalweight = document.getElementById("GoalWeight.Weightgain").value;
    let weight_difference = Math.abs(goalweight-weight);
    let Food_Allergies = document.getElementById('Food Allergies.Weightgain').value;
    

    Diet_prompt = `Give me a week(Separated by 7 days and meals are separated -) for a Weight Gain diet plan for ${gender} ${age} year old that weights ${weight} pounds and want to gain ${weight_difference} pounds and is allegric to ${Food_Allergies}`;
    localStorage.setItem("Diet_prompt_key", Diet_prompt);
    

    window.location.href = actionUrl;
    console.log(Diet_prompt);
}

function handleFormSubmissionWeightLoss(event, actionUrl) {
    // Handle form submission 

    event.preventDefault();
    let name = document.getElementById("name.WeightLoss").value;
    let age = document.getElementById("age.WeightLoss").value;
    let gender = document.querySelector('input[name="Gender.WeightLoss"]:checked')?.value || "";
    let weight = document.getElementById("Weight.WeightLoss").value;
    let goalweight = document.getElementById("GoalWeight.WeightLoss").value;
    let weight_difference = Math.abs(goalweight-weight);
    let Food_Allergies = document.getElementById('Food Allergies.WeightLoss').value;


    Diet_prompt = `Give me a week(Separated by 7 days and meals are separated -) for a Weight Loss diet plan for ${gender} ${age} year old that weights ${weight} pounds and  want to lose ${weight_difference} pounds and is allegric to ${Food_Allergies}`;
    localStorage.setItem("Diet_prompt_key", Diet_prompt);
    console.log(Diet_prompt);

    window.location.href = actionUrl;
    console.log(Diet_prompt);
}

function handleFormSubmissionVegan(event, actionUrl) {
    // Handle form submission 

    event.preventDefault();
    let name = document.getElementById("name.Vegan").value;
    let age = document.getElementById("age.Vegan").value;
    let gender = document.querySelector('input[name="Gender.Vegan"]:checked')?.value || "";
    let weight = document.getElementById("Weight.Vegan").value;
    let weight_control = document.getElementById("Weight_control.Vegan").value;
    let Food_Allergies = document.getElementById('Food Allergies.Vegan').value;
    

    Diet_prompt = `Give me a week(Separated by 7 days and meals are separated -) for a vegan diet plan for ${weight_control} for a ${gender} ${age} year old that weights ${weight} pounds is allegric to ${Food_Allergies}`;
    localStorage.setItem("Diet_prompt_key", Diet_prompt);
    console.log(Diet_prompt);

    window.location.href = actionUrl;
    console.log(Diet_prompt);
}

function handleFormSubmissionKeto(event, actionUrl) {
    // Handle form submission 

    event.preventDefault();
    let name = document.getElementById("name.Keto").value;
    let age = document.getElementById("age.Keto").value;
    let gender = document.querySelector('input[name="Gender.Keto"]:checked')?.value || "";
    let weight = document.getElementById("Weight.Keto").value;
    let weight_control = document.getElementById("Weight_control.Keto").value;
    let Food_Allergies = document.getElementById('Food Allergies.Keto').value;



    Diet_prompt = `Give me a week(Separated by 7 days and meals are separated -) for a Keto diet plan for ${weight_control} for a ${gender} ${age} year old that weights ${weight} pounds is allegric to ${Food_Allergies}`;
    localStorage.setItem("Diet_prompt_key", Diet_prompt);
    
    window.location.href = actionUrl;
    console.log(Diet_prompt);
}

function handleFormSubmissionPaleo(event, actionUrl) {
    // Handle form submission 
    event.preventDefault();
    let name = document.getElementById("name.Paleo").value;
    let age = document.getElementById("age.Paleo").value;
    let gender = document.querySelector('input[name="Gender.Paleo"]:checked')?.value || "";
    let weight = document.getElementById("Weight.Paleo").value;
    let weight_control = document.getElementById("Weight_control.Paleo").value;
    let Food_Allergies = document.getElementById('Food Allergies.Paleo').value;


    Diet_prompt = `Give me a week(Separated by 7 days and meals are separated -) for a Paleo diet plan for ${weight_control} for a ${gender} ${age} year old that weights ${weight} pounds is allegric to ${Food_Allergies}`;
    localStorage.setItem("Diet_prompt_key", Diet_prompt);
    
    window.location.href = actionUrl;
    console.log(Diet_prompt);
}