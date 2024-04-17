document.addEventListener("DOMContentLoaded", function() {
    const ChatgptApiKey = localStorage.getItem("ChatgptApiKey_key");






    const GenerateButton = document.getElementById('Generate Diet');
    const GenerateButton_again = document.getElementById('Generate_Again_Diet');
    const GenerateButton_Different = document.getElementById('Save_Diet');

    GenerateButton.addEventListener('click', function() {
        var Prompt = localStorage.getItem("Diet_prompt_key");
        console.log(Prompt)
        sendMessage(Prompt)
        
    });

    GenerateButton_again.addEventListener('click', function() {
        window.location.href = 'DietForm.html';
        
    });

    GenerateButton_Different.addEventListener('click', function() {
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

            // Find the index of "Day 1:"
            const startIndex = responseMessage.indexOf('Day 1:');
            
            // Extract the text starting from "Day 1:"
            const extractedText = responseMessage.slice(startIndex);
            
            // Define the regular expression pattern to match each day's content
            const dayPattern = /Day\s+\d+:[^]*?(?=Day\s+\d+:|$)/gs;

            // Extract all occurrences of day content using the regular expression
            const days = extractedText.match(dayPattern);

            // Get the reference to the contextDiv
            const contextDiv = document.getElementById("context");

// Iterate over each day and append it to the contextDiv
if (days) {
    days.forEach((day, index) => {
        const Day_count = document.createElement('h1');
        Day_count.innerHTML = `Day ${index + 1}:`;
        contextDiv.appendChild(Day_count);

        const dietPlanDiv = document.createElement('div');
        // Find the index of "Breakfast"
        const breakfastIndex = day.indexOf("Breakfast");
        // Remove everything before "Breakfast"
        const mealPlan = day.substring(breakfastIndex);
        dietPlanDiv.textContent = mealPlan;
        contextDiv.appendChild(dietPlanDiv);
    });
}
            


            
        })

    }














});
