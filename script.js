const apiKey = 'AIzaSyBTuCeOs1FsZjh4s8FEt35472yzfuXIpmI';
let name = "";
let age = "";
let gender = "";
let duration = "";
let fitnessLevel = "";

function getUserInputs() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    gender = document.querySelector('input[name="Gender"]:checked')?.value || "";
    duration = document.getElementById("Duration").value;
    fitnessLevel = document.querySelector('input[name="Fitness Level"]:checked')?.value || "";
}

function loadWorkoutVideo(event) {
    event.preventDefault();

    getUserInputs();

    // search query based on user inputs
    const searchQuery = `${fitnessLevel === "Beginner" ? "beginner" : fitnessLevel === "Intermediate" ? "intermediate" : fitnessLevel === "Advance" ? "advance" : ""} ${gender === "Male" ? "male" : gender === "Female" ? "female" : "other"} workout ${duration} minutes`;

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
        playerDiv.appendChild(document.createElement('br')); // Add line break after each video
    });
}

function exitForm(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "Homepage.html"; // Close the current window/tab
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.Workout');
    const exitButton = document.querySelector('.Homepage');

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

// Event listener for dark mode toggle button
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    toggleDarkMode();
});

