// Get the button and message elements
const button = document.getElementsByClassName('MyButton')[0]; // Access the first element with the class 'MyButton'
const message = document.getElementsByClassName('Message')[0]; // Access the first element with the class 'Message'

// Add click event listener to the button
button.addEventListener('click', function() {
    message.textContent = 'I Love You too'; // Update the text content of the message element
});
