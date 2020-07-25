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
    .then(data => console.log(data.results));

function createJokes(jokes) {
    const jokesList = document.getElementById('jokes-list');
    jokesList.innerText = '';

    jokes.forEach(joke => createJoke(joke));
}

function createJoke(joke) {
    const jokesList = document.getElementById('jokes-list');

    const oneJoke = document.createElement('li');

    //todo посмотри как в том проекте добавляешь языки, и так же добавь сюда результаты поиска
    oneJoke.innerText = joke.results;

    jokesList.appendChild(oneJoke);
}