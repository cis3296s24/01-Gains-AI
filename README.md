# Gain-AI

This is a web application aimed at streamlining personalized exercise routines through user input and artificial intelligence. Users will select their desired body part and specify workout environment and available equipment, triggering ChatGPT to generate 3-5 tailored exercise recommendations accompanied by detailed instructions. Integrating the YouTube API will provide relevant instructional videos for each exercise, enhancing user comprehension and execution. Unlike existing fitness apps with preset databases, this project stands out by dynamically generating exercise suggestions via AI, offering a broader range of options customized to individual preferences and needs.




# How to run
  
1. Follow Build in Vscode and run in this Vscode and Browser 


## To generate workout to you have to run this locally
To run this locally, After installing and building the project and inserting key 

Right click on Homepage.html and click on option Open in Default Browser


# How to contribute
Follow this project board to know the latest status of the project: https://github.com/orgs/cis3296s24/projects/65

# How to build
### (BEFORE BUILDING)
- Step 0) Get your own Free OpenA1 and Youtube API Key and save them 

Youtube API Key tutorial 
https://www.youtube.com/watch?v=uz7dY8qTFJw&t=18s

OpenA1 API Key tutorial (First time user going have a free trial)
https://www.youtube.com/watch?v=OB99E7Y1cMA



### Build In Vscode 
- Step 1) clone this repository https://github.com/cis3296s24/01-Gains-AI.git
- Step 2) cd 01-Gains-AI
- Step 3) git checkout tags/release5

clone tutorial https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

- Step 4) In the Key.js replace the Chatgpt key with your OPENAPI Key and Youtube Key with ur own Youtube key
- Step 5) Type this in terminal,  pip install Django
- Step 6) Type this in terminal,  cd djangoDB
- Step 7) Type this in terminal,  python manage.py runserver
- step 8) Open Chrome or any browser and type this in url:   http://127.0.0.1:8000/account/index/

# To Acess Admin to the Django Database 
- Step 1) After building in Vscode
- Step 2) Open Chrome or any browser and type this in url http://127.0.0.1:8000/admin/
- Username : admin
- Password : gainsai
