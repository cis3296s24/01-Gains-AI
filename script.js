const apiKey = 'AIzaSyBTuCeOs1FsZjh4s8FEt35472yzfuXIpmI';
let name = "";
let age = "";
let gender = "";
let duration = "";
let fitnessLevel = "";
let Body_Part ="";
let Workout_prompt;


let exerciseName = [];
let exerciseDescription =[];

function getUserInputs() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    gender = document.querySelector('input[name="Gender"]:checked')?.value || "";
    duration = document.getElementById("Duration").value;
    fitnessLevel = document.querySelector('input[name="Fitness Level"]:checked')?.value || "";
    Body_Part = document.getElementById("Body-Part").value;
   
}

function generateWorkoutprompt(){
    getUserInputs();
    Workout_prompt = `Give me 5 exercises ${Body_Part} for ${gender} age ${age} with description seperated by :`;
    console.log(Workout_prompt);
    sendChatgptMessage(Workout_prompt);
}





function loadWorkoutVideo(event) {
    event.preventDefault();


    // search query based on user inputs
    const searchQuery = Workout_prompt
    
    // Call API to fetch video
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(searchQuery)}&type=video&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const videoIds = data.items.map(item => item.id.videoId);
            const workoutUrl = `Workout.html?videoIds=${videoIds.join(',')}`;
            window.location.href = workoutUrl;
        })
        .catch(error => {
            console.error('Error fetching workout video:', error);
        });
}

function loadVideoPlayers(videoIds) {
    const playerDiv = document.getElementById("player");
    playerDiv.innerHTML = ''; // Clear existing content

    videoIds.forEach(videoId => {
        const iframeElement = document.createElement('iframe');
        iframeElement.width = '560';
        iframeElement.height = '315';
        iframeElement.src = `https://www.youtube.com/embed/${videoId}`;
        iframeElement.frameBorder = '0';
        iframeElement.allowFullscreen = true;
        playerDiv.appendChild(iframeElement);
        playerDiv.appendChild(document.createElement('br')); 
    });
}

function exitForm(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "Homepage.html"; // Close the current tab
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.Workout');
    const exitButton = document.querySelector('.Homepage');
    


    startButton.addEventListener('click', generateWorkoutprompt);
    startButton.addEventListener('click', loadWorkoutVideo);
    exitButton.addEventListener('click', exitForm);
    
});


// dark mode function
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}

// Check theme preference
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// Set initial mode function
function setInitialMode() {
    var mode = localStorage.getItem("mode");
    if (mode === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}



//Chatgpt Api section 

const ChatgptapiKey = "";
function sendChatgptMessage(message) {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ChatgptapiKey}` // Replace with your API key
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo', // You can change the model if needed
            messages: [{ role: 'user', content: message }]
        })
    })
    .then(response => response.json())
    .then(data => {
        const responseMessage = data.choices[0].message.content;
        

        // Split the response into separate strings based on the numbers
        const ExcisesArray = responseMessage.split(/\d+\./).filter(Boolean).map(s => s.trim());

       
        //Display each curl on the website
         ExcisesArray.forEach((excrise) => {
             const ExcisesDescription =excrise.split(':').map(part => part.trim());
             
                
                exerciseName.push(ExcisesDescription[0]);

                


                exerciseDescription.push(ExcisesDescription[1]);
                

             
        });

        // Serialize the array to a string using JSON.stringify
        var serializedexerciseName = JSON.stringify(exerciseName);
        var serializedexerciseDescription = JSON.stringify(exerciseDescription);
        // Store the serialized array in local storage
        localStorage.setItem('exerciseName', serializedexerciseName);
        localStorage.setItem('exerciseDescription', serializedexerciseDescription);


    })
    .catch(error => {
        console.error('Error:', error);
    });
}

   
