const apiKey = 'AIzaSyBTuCeOs1FsZjh4s8FEt35472yzfuXIpmI';

let name = "";
let age = "";
let gender = "";
let duration = "";
let fitnessLevel = "";

function getUserInputs() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    const genderOptions = document.getElementsByName("Gender");
    for (const option of genderOptions) {
        if (option.checked) {
            gender = option.value;
            break;
        }
    }
    duration = document.getElementById("Duration").value;
    const fitnessLevelOptions = document.getElementsByName("Fitness Level");
    for (const option of fitnessLevelOptions) {
        if (option.checked) {
            fitnessLevel = option.value;
            break;
        }
    }
}

// load YouTube video
function loadWorkoutVideo() {

    getUserInputs();

    // search query based on user inputs
    const searchQuery = `${fitnessLevel} ${gender} workout`;

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

function exitForm() {
    console.log("Exiting form...");
}


// exit the form 
function exitForm() {
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "index.html"; // Close the current window/tab
    }
}

// listener to load workout video on button click
document.getElementById("startButton").addEventListener("click", loadWorkoutVideo);

// Function to toggle dark mode
function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("light-mode");
    
    // Save user's preference in local storage
    localStorage.setItem('lightMode', element.classList.contains('light-mode'));
}

// Function to apply dark mode if it was set previously
function applyLightMode() {
    const lightModeEnabled = localStorage.getItem('lightMode') === 'true';
    const element = document.body;
    
    if (lightModeEnabled) {
        element.classList.add('light-mode');
    }
}

// Apply dark mode when the page loads
window.onload = applyLightMode;
  
