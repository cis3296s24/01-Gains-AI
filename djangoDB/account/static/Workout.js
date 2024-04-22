document.addEventListener("DOMContentLoaded", function() {
    // Replace with your key
    const YoutubeApiKey = localStorage.getItem("YoutubeApiKey_key");
    const ChatgptApiKey = localStorage.getItem("ChatgptApiKey_key");




    const GenerateButton = document.getElementById('Generate');
    const GenerateButton_again = document.getElementById('Generate_Again');
    const GenerateButton_Different = document.getElementById('Generate_Different');
    
    GenerateButton.addEventListener('click', function() {
        var Prompt = localStorage.getItem("Workout_prompt_key");
        sendMessage(Prompt);
        
    });

    GenerateButton_again.addEventListener('click', function() {
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("workout", "form");
        window.location.href = newUrl;
    });

    GenerateButton_Different.addEventListener('click', function() {
        var Different_Prompt = localStorage.getItem("DifferentWorkout_prompt_key");
        sendMessage(Different_Prompt);
    });

    function sendMessage(message) {
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ChatgptApiKey}`
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
            const ExcisesArray = responseMessage.split(/\d+\.|(?<=\d)\)/).filter(Boolean).map(s => s.trim());

            const contextDiv = document.getElementById("context");

            // Create container for video and exercise name
            const videoExerciseContainer = document.createElement('div');
            videoExerciseContainer.classList.add('video-exercise-container');

            //Display each curl on the website
             ExcisesArray.forEach((excrise) => {
                 const ExcisesDescription =excrise.split(':').map(part => part.trim());
                 
                    const ExciseName = document.createElement('h1');
                    ExciseName.textContent = ` ${ExcisesDescription[0]}`;
                    console.log(ExciseName)
                    


                    const ExciseDescription = document.createElement('div');
                    ExciseDescription.textContent = ` ${ExcisesDescription[1]}`;
                    videoExerciseContainer.appendChild(ExciseDescription);
                    console.log(ExciseDescription)

                    
                    const searchQuery = `How to do ${ExciseName.textContent}`;
                    // Call API to fetch video
                    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(searchQuery)}&type=video&videoEmbeddable=true&key=${YoutubeApiKey}`)
                        .then(response => response.json())
                        .then(data => {
                            // Create an iframe element to embed the video
                            const iframe = document.createElement('iframe');
                            iframe.setAttribute('src', videoUrl);
                            iframe.setAttribute('width', '560'); // You can adjust these dimensions as needed
                            iframe.setAttribute('height', '315');
                            iframe.setAttribute('frameborder', '0');
                            iframe.setAttribute('allow', 'autoplay; encrypted-media');
                            iframe.setAttribute('allowfullscreen', '');
                            
                            // Append the iframe to a container element in your HTML
                            videoExerciseContainer.appendChild(ExciseName);
                            videoExerciseContainer.appendChild(ExciseDescription);
                            videoExerciseContainer.appendChild(iframe);
                            contextDiv.appendChild(videoExerciseContainer);
                            var Different_Prompt =localStorage.getItem("DifferentWorkout_prompt_key") 
                            Different_Prompt = Different_Prompt + ExciseName.textContent + ", ";
                            localStorage.setItem("DifferentWorkout_prompt_key", Different_Prompt);
                        })
                        .catch(error => {
                            console.error('Error fetching workout video:', error);
                        });
                    
                
               
            });

            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
