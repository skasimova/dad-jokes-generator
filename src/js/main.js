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
    const joke = document.createElement('div');
    joke.setAttribute('class', 'joke-container');
    joke.innerText = data.joke;

    const container = document.getElementById('container');
    container.appendChild(joke);
}

function refreshPage(){
    window.location.reload();
}