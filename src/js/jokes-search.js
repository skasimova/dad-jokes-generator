async function getJokes() {
    let url = 'https://icanhazdadjoke.com/search';
    let response = await fetch(url, {
        headers: {
            Accept: 'application/json'
        }
    });
    return await response.json();
}

getJokes()
    .then(data => createJokes(data));

function createJokes(data) {
    const jokesList = document.getElementById('jokes-list');
    jokesList.innerText = '';

    let allJokes = data.results;

    allJokes.forEach(joke => createJoke(joke));
}


function createJoke(data) {
    const jokesList = document.getElementById('jokes-list');
    const oneJoke = document.createElement('li');
    oneJoke.setAttribute('id', 'one-joke');

    oneJoke.innerText = data.joke;

    jokesList.appendChild(oneJoke);
}