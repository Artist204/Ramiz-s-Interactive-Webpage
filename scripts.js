// 1. Personalized Greeting Input
function greetUser() {
    // Get the value from the input field
    const userName = document.getElementById('nameInput').value;
    
    // Generate and display the greeting message
    const greetingMessage = "Greetings, " + userName + "!";
    document.getElementById('greetingMessage').textContent = greetingMessage;
}

// 2. Text Color Change Timer (optional)
let colorChangeIndex = 0;
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F5A623", "#F8D210"];

function changeTextColor() {
    const textElement = document.getElementById('colorText');
    textElement.style.color = colors[colorChangeIndex];
    colorChangeIndex = (colorChangeIndex + 1) % colors.length;
}

// Change text color every 30 seconds
setInterval(changeTextColor, 30000);

// 3. Bonus Interaction - Hover Effect (optional)
function changeButtonText() {
    const button = document.getElementById("hoverButton");
    button.textContent = "You hovered over me!";
}
