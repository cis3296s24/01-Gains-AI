    document.addEventListener('DOMContentLoaded', 
    /**
    * Adds event listeners to open and close mini popups
    */
    function addPopupListeners() {
    const openMiniPopups = document.querySelectorAll('.open-mini-popup');
    const miniPopups = document.querySelectorAll('.mini-popup');

    openMiniPopups.forEach((openBtn) => {
        openBtn.addEventListener('click', (event) => {
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
    miniPopups.forEach((popup) => {
        const closeButton = popup.querySelector('.popup-close');
        if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            popup.style.display = 'none';
        });
        }
    });
    });


    /**
     * 
     * @param {Event} event 
     * @param {string} actionUrl 
     */
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
        if(Body_Part == "other"){
            Body_Part = document.getElementById('Other.gym').value;
        }

        /**
         * 
         * @param {string} Body_Part 
         * @param {string} gender 
         * @param {string} age 
         * @param {string} duration 
         * @param {string} fitnessLevel 
         */
        function generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel) {
            Workout_prompt = `Give me 5 ${Body_Part} gym exercises for ${gender} age ${age} with a description that last for ${duration} for ${fitnessLevel} seperated by :`;
            return Workout_prompt;
        }

        // Generate workout prompt
        Workout_prompt = generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel);

        // Set different workout prompt
        Different_prompt = Workout_prompt + " Not Included ";

        // Log workout prompt
        console.log(Workout_prompt);

        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        window.location.href = actionUrl;
    }

        var checkboxes = document.querySelectorAll('input[name="TypesofEquipment[]"]:checked');
        var selectedValues = [];
        checkboxes.forEach(
    /**
    * Adds event listeners to open and close mini popups
    */
    function addPopupListeners() {
    const openMiniPopups = document.querySelectorAll('.open-mini-popup');
    const miniPopups = document.querySelectorAll('.mini-popup');

    openMiniPopups.forEach((openBtn) => {
        /**
         * Adds an event listener to the open button that displays the corresponding popup
         * @param {Event} event - The event object
         */
        openBtn.addEventListener('click', (event) => {
        const popupId = openBtn.getAttribute('data-popup-target');
        const popup = document.getElementById(popupId);

        if (popup) {
            /**
             * Closes all other popups and displays the clicked popup
             */
            miniPopups.forEach((popup) => {
            popup.style.display = 'none';
            });

            popup.style.display = 'block';
        }
        });
    });

    // Add event listener for close button
    miniPopups.forEach((popup) => {
        const closeButton = popup.querySelector('.popup-close');
        if (closeButton) {
        /**
         * Adds an event listener to the close button that hides the popup
         * @param {Event} event - The event object
         */
        closeButton.addEventListener('click', (event) => {
            popup.style.display = 'none';
        });
        }
    });
    });
    
    /**
     * 
     * @param {Event} event 
     * @param {string} actionUrl 
     */
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
        if(Body_Part == "other"){
            Body_Part = document.getElementById('Other.gym').value;
        }

        /**
         * 
         * @param {string} Body_Part 
         * @param {string} gender 
         * @param {string} age 
         * @param {string} duration 
         * @param {string} fitnessLevel 
         */
        function generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel) {
            Workout_prompt = `Give me 5 ${Body_Part} gym exercises for ${gender} age ${age} with a description that last for ${duration} for ${fitnessLevel} seperated by :`;
            return Workout_prompt;
        }

        // Generate workout prompt
        Workout_prompt = generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel);

        // Set different workout prompt
        Different_prompt = Workout_prompt + " Not Included ";

        // Log workout prompt
        console.log(Workout_prompt);

        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        window.location.href = actionUrl;
    }

    /**
     * 
     * @param {Event} event 
     * @param {string} actionUrl 
     */
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
            if(Body_Part == "other"){
                Body_Part = document.getElementById('Other.gym').value;
            }

    /**
     * 
     * @param {string} Body_Part 
     * @param {string} gender 
     * @param {string} age 
     * @param {string} duration 
     * @param {string} fitnessLevel 
     */
    function generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel) {
        Workout_prompt = `Give me 5 ${Body_Part} gym exercises for ${gender} age ${age} with a description that last for ${duration} for ${fitnessLevel} seperated by :`;
        return Workout_prompt;
    }

        // Generate workout prompt
        Workout_prompt = generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel);

        // Set different workout prompt
        Different_prompt = Workout_prompt + " Not Included ";

        // Log workout prompt
        console.log(Workout_prompt);

        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        window.location.href = actionUrl;
    }


    /**
     * 
     * @param {Event} event 
     * @param {string} actionUrl 
     */
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
        if(Body_Part == "other"){
            Body_Part = document.getElementById('Other.gym').value;
        }

        /**
         * 
         * @param {string} Body_Part 
         * @param {string} gender 
         * @param {string} age 
         * @param {string} duration 
         * @param {string} fitnessLevel 
         */
        function generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel) {
            Workout_prompt = `Give me 5 ${Body_Part} gym exercises for ${gender} age ${age} with a description that last for ${duration} for ${fitnessLevel} seperated by :`;
            return Workout_prompt;
        }

        // Generate workout prompt
        Workout_prompt = generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel);

        // Set different workout prompt
        Different_prompt = Workout_prompt + " Not Included ";

        // Log workout prompt
        console.log(Workout_prompt);

        //  form submission logic
        console.log('Form submitted!');
        // Redirect 
        window.location.href = actionUrl;
    }
        /**
         * 
         * @param {Event} event 
         * @param {string} actionUrl 
         */
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
            if(Body_Part == "other"){
                Body_Part = document.getElementById('Other.gym').value;
            }

            /**
             * 
             * @param {string} Body_Part 
             * @param {string} gender 
             * @param {string} age 
             * @param {string} duration 
             * @param {string} fitnessLevel 
             */
            function generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel) {
                Workout_prompt = `Give me 5 ${Body_Part} gym exercises for ${gender} age ${age} with a description that last for ${duration} for ${fitnessLevel} seperated by :`;
                return Workout_prompt;
            }

            // Generate workout prompt
            Workout_prompt = generateWorkoutPrompt(Body_Part, gender, age, duration, fitnessLevel);

            // Set different workout prompt
            Different_prompt = Workout_prompt + " Not Included ";

            // Log workout prompt
            console.log(Workout_prompt);

            //  form submission logic
            console.log('Form submitted!');
            // Redirect 
            window.location.href = actionUrl;
        }

        

        /**
         * 
         * @param {Event} event 
         * @param {string} actionUrl 
            */
        function handleFormSubmissionMeditation(event, actionUrl) {
            // Handle form submission 
            event.preventDefault();
            let name = document.getElementById("name.Meditation").value;
            let gender = document.querySelector('input[name="Gender.Meditation"]:checked')?.value || "";
            let duration = document.getElementById("meditation-duration").value;
            

            /**
             * 
             * @param {string} TypeofMeditation 
             * @param {string} gender 
             * @param {string} duration 
             */
            function generateWorkoutPrompt(TypeofMeditation, gender, duration) {
                Workout_prompt = `Give me 5 ${TypeofMeditation} Meditation Techniques for ${gender} with a description that last for ${duration} minutes seperated by :`;
                return Workout_prompt;
            }

            var Meditation = document.getElementById('Meditation');
            var TypeofMeditation = Meditation.value;
            // Check if the selected value is "other"
            if (TypeofMeditation === "other") {
            // Get the value from the "Other" textarea
            TypeofMeditation = document.getElementById('Other.meditation').value;
            }

            // Generate workout prompt
            Workout_prompt = generateWorkoutPrompt(TypeofMeditation, gender, duration);

            // Set different workout prompt
            Different_prompt = Workout_prompt + " Not Included ";

            // Log workout prompt
            console.log(Workout_prompt);

            //  form submission logic
            console.log('Form submitted!');
            
            // Redirect 
            window.location.href = actionUrl;
        }




