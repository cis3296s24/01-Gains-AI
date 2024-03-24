const apiKey = 'AIzaSyBTuCeOs1FsZjh4s8FEt35472yzfuXIpmI';

// Initialize global variables for user selections
let name = "";
let age = "";
let gender = "";
let duration = "";
let fitnessLevel = "";

// Function to get user inputs
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

// Function to load YouTube video
function loadWorkoutVideo() {
    // Get user inputs
    getUserInputs();

    // Construct search query based on user inputs
    const searchQuery = `${fitnessLevel} ${gender} workout`;

    // Make API call to fetch video
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(searchQuery)}&type=video&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const videoId = data.items[0].id.videoId;
            const workoutUrl = `Workout.html?videoId=${videoId}`;
            window.location.href = workoutUrl;
        })
        .catch(error => {
            console.error('Error fetching workout video:', error);
        });
}

// Function to exit form
function exitForm() {
    // Add exit functionality as needed
    console.log("Exiting form...");
}

// Event listener to load workout video on button click
document.getElementById("startButton").addEventListener("click", loadWorkoutVideo);

// Toggle dark mode function
function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
}

// Set initial mode function
function setInitialMode() {
    var mode = localStorage.getItem("mode");
    if (mode === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}

// Event listener for dark mode toggle button
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    toggleDarkMode();
});

// Function to exit the form with confirmation
function exitForm() {
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "Homepage.html"; // Close the current window/tab
    }
}