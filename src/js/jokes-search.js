async function searchJokes(searchTerm) {
    let url = 'https://icanhazdadjoke.com/search?term=' + searchTerm;
    let response = await fetch(url, {
        headers: {
            Accept: 'application/json'
        }
    });
    return await response.json();
}

function createJokes(data) {
    const jokesList = document.getElementById('jokes-list');
    jokesList.innerText = '';

    let allJokes = data.results;

    if(allJokes.length === 0) {
        jokesList.innerText = 'No jokes found. Try another keyword.';
    } else {
        allJokes.forEach(joke => createJoke(joke));
    }
}

function createJoke(data) {
    const jokesList = document.getElementById('jokes-list');
    const oneJoke = document.createElement('div');
    oneJoke.setAttribute('id', 'one-joke');

    oneJoke.innerText = data.joke;

    jokesList.appendChild(oneJoke);
}

const inputForm = document.getElementById('input-form');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', event => {
    event.preventDefault();

    searchJokes(inputForm.value)
        .then(data => createJokes(data));

    inputForm.value = '';
});

