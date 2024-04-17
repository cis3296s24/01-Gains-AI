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
            
            const contextDiv = document.getElementById("context");
            const Diet = document.createElement('div');
            Diet.innerHTML = responseMessage.replace(/\n/g, "<br>");
            contextDiv.appendChild(Diet);

  


            
        })

    }














});
