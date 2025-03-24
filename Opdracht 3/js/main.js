// Pokémon Card
const randomNumber = Math.floor(Math.random() * 250) + 1;
const pokemonImage = document.getElementById("js--pokemon-image-1");
const catchButton = document.getElementById("js--catch-button-1");
const pokemonText = document.getElementById("js--pokemon-text-1");
let pokemonCaught = false;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
        pokemonImage.src = data.sprites.front_default;
    });

catchButton.onclick = function() {
    if (!pokemonCaught) {
        const catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Pokémon Fled!";
            pokemonImage.style.opacity = "0.5";
        } else {
            pokemonText.innerText = "Pokémon Caught!";
            pokemonImage.style.transform = "scale(1.1)";
        }
        pokemonCaught = true;
        catchButton.disabled = true;
    }
};

const nameInput = document.getElementById("js--name");
const predictButton = document.getElementById("js--predict-button");
const leeftijdResult = document.getElementById("js--leeftijd-result");

predictButton.onclick = function() {
    const name = nameInput.value.trim();
    if (name) {
        fetch(`https://api.agify.io?name=${name}`)
            .then(response => response.json())
            .then(data => {
                leeftijdResult.innerHTML = `${data.name} is ${data.age} jaar`;
            });
    } else {
        leeftijdResult.textContent = "Voer een naam in";
    }
};

const filmInput = document.getElementById("js--film-input");
const zoekButton = document.getElementById("js--zoek-button");
const filmTitle = document.getElementById("js--film-title");
const filmBeschrijving = document.getElementById("js--film-beschrijving");

zoekButton.onclick = function() {
    const query = filmInput.value.trim();
    if (query) {
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
            .then(response => response.json())
            .then(data => {
                filmTitle.textContent = data.name;
                const beschrijving = data.summary.replace(/<[^>]*>/g, '');
                filmBeschrijving.textContent = beschrijving;
            });
    } else {
        filmTitle.textContent = "Voer een filmnaam in";
        filmBeschrijving.textContent = "";
    }
};