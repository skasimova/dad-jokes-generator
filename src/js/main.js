async function getRandomJoke() {
    let url = 'https://icanhazdadjoke.com/';
    let response = await fetch(url, {
    headers: {
        Accept: 'application/json'
    }
});
    return await response.json();
}


getRandomJoke()
    .then(data => fillInJokes(data));

function fillInJokes(data) {
    const container = document.getElementById('container');

    const joke = document.createElement('div');
    joke.setAttribute('class', 'joke-container');
    joke.setAttribute('id', 'joke');
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
    refreshButton.innerText = 'Crack another one!';

    buttonContainer.appendChild(refreshButton);
    container.appendChild(buttonContainer);

    refreshButton.addEventListener('click', event => {
        event.preventDefault();

        document.getElementById('joke').remove();
        refreshButton.remove();

        getRandomJoke()
            .then(data => fillInJokes(data));
    })
}

