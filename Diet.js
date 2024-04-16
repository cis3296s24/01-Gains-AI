document.addEventListener("DOMContentLoaded", function() {
    // Replace with your key
    const YoutubeApiKey = "ADD Key";
    const ChatgptApiKey = "ADD Key"; 

    //Example 
    //const YoutubeApiKey = "asdasfafaf";
    //const ChatgptApiKey = "asddsa"; 




    const GenerateButton = document.getElementById('Generate Diet');
    const GenerateButton_again = document.getElementById('Generate_Again_Diet');
    const GenerateButton_Different = document.getElementById('Save_Diet');

    GenerateButton.addEventListener('click', function() {
        var Prompt = localStorage.getItem("Diet_prompt_key");
        console.log(Prompt)
        
        
    });

    GenerateButton_again.addEventListener('click', function() {
        window.location.href = 'DietForm.html';
        
    });

    GenerateButton_Different.addEventListener('click', function() {
    });

















});
