function showMessage() {
    document.getElementById('message').style.display = 'block';
}

function response(answer) {
    const responseSection = document.getElementById('response');
    const responseMessage = document.getElementById('response-message');

    if (answer === 'yes') {
        responseMessage.innerHTML = 'Thank You !!! <br> You are the best <br> 😊😊😊😊😊 <br>🌸🌺🌼🌷💐';
    } else {
        responseMessage.innerHTML = 'Option invalid 😭😭😭 <BR> Please try again with YES 🥺🥺🥺';
    }

    responseSection.style.display = 'block';
}