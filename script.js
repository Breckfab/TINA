function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    const tinaDisplay = document.getElementById('tina-message');
    
    // Lógica temporal de inicio
    tinaDisplay.innerText = "Hello! I am Tina, your English teacher. To start our first lesson, what is your name?";
    input.value = "";
}
