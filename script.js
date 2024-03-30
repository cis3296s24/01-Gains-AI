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
    const searchQuery = `${fitnessLevel==="Beginner"?"beginner":fitnessLevel==="Intermediate"?"intermediate":fitnessLevel==="Advance"?"advance":""} ${gender === "Male" ? "male" : gender === "Female" ? "female" : "other"} workout ${duration} minutes`;

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

// listener to load workout video on button click
document.getElementById("startButton").addEventListener("click", loadWorkoutVideo);

// dark mode function
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

// exit the form 
function exitForm() {
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "Homepage.html"; // Close the current window/tab
    }
}