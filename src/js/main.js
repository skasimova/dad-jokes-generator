async function getRandomJoke() {
    let url = 'https://icanhazdadjoke.com/';
    let response = await fetch(url, {
    headers: {
        Accept: 'application/json'
    }
});
    let data = await response.json();

    return data;
}


getRandomJoke()
    .then(data => fillInJokes(data));

function fillInJokes(data) {
    const container = document.getElementById('container');

    const joke = document.createElement('div');
    joke.setAttribute('class', 'joke-container');
    joke.innerText = data.joke;

    container.appendChild(joke);

    createButton();
}

function createButton() {
    const container = document.getElementById('container');

    const buttonContainer = document.getElementById('button-container');

    const refreshButton = document.createElement('button');
    refreshButton.setAttribute('class', 'btn btn-light');
    refreshButton.setAttribute('id', 'generate-button');
    refreshButton.innerText = 'Haha! Crack another one!';

    buttonContainer.appendChild(refreshButton);
    container.appendChild(buttonContainer);

    refreshButton.addEventListener('click', event => {
        event.preventDefault();
        
        refreshButton.remove();

        getRandomJoke()
            .then(data => fillInJokes(data));
    })
}

