// API information
const url = 'https://icanhazdadjoke.com';

// needed page elements
const jokeButton = document.querySelector('#jokeButton');
const jokeContainer = document.querySelector('#jokeContainer');

// Asynchronous functions
const fetchJoke = async () => {
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            jokeContainer.innerHTML = jsonResponse.joke;
        }
        throw new Error('Request failed!');
    }
    catch (error) {
        console.log(error);
    }
}

jokeButton.onclick = function() {
    fetchJoke();   
}