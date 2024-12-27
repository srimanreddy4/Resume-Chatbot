const chatResponsesDiv = document.getElementById('chat-responses');

function displayResponse(response) {
    const p = document.createElement('p');
    p.textContent = response;
    chatResponsesDiv.appendChild(p);
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/chatbot', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayResponse(xhr.responseText);
        }
    };

    const formData = new FormData(form);
    xhr.send(new URLSearchParams(formData));
});