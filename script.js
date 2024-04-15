
/**
 * Toggles the theme between light and dark modes.
 * 
 * @param {Document} [document=document] - The document object to query for the body element.
 */
function toggleTheme(document = document) {
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
/**
 * Sets the initial mode of the website based on the user's preference.
 * 
 * @param {string} mode - The user's selected mode (light or dark).
 */
function setInitialMode(mode) {
  if (mode === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}


/**
 * Toggles the theme between light and dark modes.
 * 
 * @param {Document} [document=document] - The document object to query for the body element.
 */
function toggleTheme(document = document) {
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

/**
 * Sets the initial mode of the website based on the user's preference.
 * 
 * @param {string} mode - The user's selected mode (light or dark).
 */
function setInitialMode(mode) {
  if (mode === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}

/**
 * Adds an event listener to the DOMContentLoaded event, which is triggered when the document has been loaded and parsed.
 * This function sets the initial mode of the website based on the user's preference, and adds an event listener to the icon element that changes the current icon source when clicked.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Define an array of icon sources
    var iconSources = ["Mute_Icon.png", "Speaker_Icon.png"]; // Update with your icon sources

    // Get reference to the icon element
    var icon = document.getElementById("icon");

    // Initialize index to track current icon
    var currentIndex = 0;

    var audio = document.getElementById('music'); 
    var defaultSong = localStorage.getItem('defaultSong') || 'music/Rocky Balboa-Theme Song.mp3';
    audio.src = defaultSong;

    // Add click event listener to the icon
    icon.addEventListener("click", function() {
        // Increment index
        currentIndex++;

        // Reset index if it exceeds the length of the array
        if (currentIndex >= iconSources.length) {
            currentIndex = 0;
        }

        // If the music is paused, play it
        if (audio.paused) {
            audio.play();
            audio.loop = true;
        } else {
            // If it's already playing, pause it and set loop to true
            audio.pause();
        }

        // Change the src attribute of the icon to the next source
        icon.src = iconSources[currentIndex];
    });

    var lastPlayedTime = parseFloat(localStorage.getItem('lastPlayedTime'));

    if (lastPlayedTime) {
        audio.currentTime = lastPlayedTime;
    }

    window.onunload = function() {
        localStorage.setItem('lastPlayedTime', audio.currentTime.toString());
    };
});