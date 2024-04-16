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

function handleFormSubmissionBulking(event, actionUrl) {
    // Handle form submission 
    event.preventDefault();
    let name = document.getElementById("name.gym").value;
    let age = document.getElementById("age.gym").value;
    let gender = document.querySelector('input[name="Gender.gym"]:checked')?.value || "";
    let duration = document.getElementById("Duration.gym").value;
    let fitnessLevel = document.querySelector('input[name="Fitness Level.gym"]:checked')?.value || "";
    var selectElement = document.getElementById('GymWorkout');
    var Body_Part = selectElement.value;
    if(Body_Part == "other"){
        Body_Part = document.getElementById('Other.gym').value;
    }


    window.location.href = actionUrl;
}