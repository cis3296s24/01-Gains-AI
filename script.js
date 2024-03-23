
function toggleDarkMode(){
    document.body.classList.toggle("light-mode");
    
}
function setInitialMode() {
    var mode = localStorage.getItem("mode");
    if (mode === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}
document.getElementById("toggleDarkMode").addEventListener("click",function(){
    toggleDarkMode();
});
function exitForm() {
    if (confirm("Are you sure you want to exit?")) {
        window.location.href = "Homepage.html"; // Close the current window/tab
    }
}