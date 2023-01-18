let UrlOfPokemon = [];
let DataOfPokemon = [];
let nameOfPokemon = [];
let heighOfPokemon = [];
let idOfPokemon = [];
let spritesOfPokemon = [];
let typesOfPokemon = [];
let weightOfPokemon = [];


function loadPokemon() {
    loadUrlOfAllPokemon();
}


async function loadUrlOfAllPokemon() {
    let allUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';
    let response = await fetch(allUrl);
    let responseAsJson = await response.json();
    UrlOfPokemon = responseAsJson;

    loadPokemonData(UrlOfPokemon);
}


async function loadPokemonData(UrlOfPokemon) {
    for (let i = 0; i < UrlOfPokemon['results'].length; i++) {
        let DatasOfPokemon = UrlOfPokemon['results'][i]['url'];

        let responsePokemonData = await fetch(DatasOfPokemon);
        let responsePokemonDataAsJson = await responsePokemonData.json();
        DataOfPokemon.push(responsePokemonDataAsJson);

        pushDataToJson(i);
    }
}


function pushDataToJson(i) {
    let pokemonName = DataOfPokemon[i]['name'];
    let pokemonHeigh = DataOfPokemon[i]['height'];
    let pokemonId = DataOfPokemon[i]['id'];
    let pokemonSprites = DataOfPokemon[i]['sprites']['other']['dream_world']['front_default'];
    let pokemonTypes = DataOfPokemon[i]['types']['0']['type']['name'];
    let pokemonWeight = DataOfPokemon[i]['weight'];
    nameOfPokemon.push(pokemonName);
    heighOfPokemon.push(pokemonHeigh);
    idOfPokemon.push(pokemonId);
    spritesOfPokemon.push(pokemonSprites);
    typesOfPokemon.push(pokemonTypes);
    weightOfPokemon.push(pokemonWeight);
    renderPokemonInfo();
}



function renderPokemonInfo() {
    let CardContainer = document.getElementById('pokemon-container');
    CardContainer.innerHTML = '';

    for (let n = 0; n < nameOfPokemon.length; n++) {
        const namesOfPokemon = nameOfPokemon[n];
        CardContainer.innerHTML += showPokemonCard(n);
        typeColor(n)
    }

   
}


function showPokemonOnDex(n) {
    document.getElementById('pokedex').innerHTML = ``;
    document.getElementById('pokedex').innerHTML = showPokemonImg(n);

    document.getElementById('info-container').innerHTML = ``;
    document.getElementById('info-container').innerHTML = showDatasOfPokemon(n);
}


function typeColor(n) {
    let typeColor = document.getElementById('PokemonCard' + n);
    if (typesOfPokemon[n] === 'grass') {
        typeColor.style.backgroundColor = "#91D473";
    }

    if (typesOfPokemon[n] === 'fire') {
        typeColor.style.backgroundColor = "#F39959";
    }

    if (typesOfPokemon[n] === 'water') {
        typeColor.style.backgroundColor = "#86A5F9";
    }

    if (typesOfPokemon[n] === 'bug') {
        typeColor.style.backgroundColor = "#B9C64D";
    }

    if (typesOfPokemon[n] === 'normal') {
        typeColor.style.backgroundColor = "#B9B992";
    }

    if (typesOfPokemon[n] === 'poison') {
        typeColor.style.backgroundColor = "#B069AF";
    }

    if (typesOfPokemon[n] === 'electric') {
        typeColor.style.backgroundColor = "#FDDA57";
    }

    if (typesOfPokemon[n] === 'ground') {
        typeColor.style.backgroundColor = "#E2CD88";
    }

    if (typesOfPokemon[n] === 'fairy') {
        typeColor.style.backgroundColor = "#F9D4E9";
    }

    if (typesOfPokemon[n] === 'fighting') {
        typeColor.style.backgroundColor = "#CC5953";
    }

    if (typesOfPokemon[n] === 'psychic') {
        typeColor.style.backgroundColor = "#FD799F";
    }

    if (typesOfPokemon[n] === 'rock') {
        typeColor.style.backgroundColor = "#C5B360";
    }

    if (typesOfPokemon[n] === 'ghost') {
        typeColor.style.backgroundColor = "#8D79AD";
    }

    if (typesOfPokemon[n] === 'ice') {
        typeColor.style.backgroundColor = "#ADE0DF";
    }

    if (typesOfPokemon[n] === 'dragon') {
        typeColor.style.backgroundColor = "#8B61F9";
    }
    
}

////////////////////////////////////////////////////////////////////////////HTML///////////////////////////////////////////////////////////////////////////////////////////

function showPokemonCard(n) {
    return /*html*/`<div id="PokemonCard${n}" onclick="showPokemonOnDex(${n})"  class="pokemon-card">
    <h2 class="PokemonNameOnField">${nameOfPokemon[n]}</h2>
    <img class="pokemon-img-card" src="${spritesOfPokemon[n]}">
</div>`;
}


function showPokemonImg(n) {
    return /*html*/`
    <h2>${nameOfPokemon[n]}</h2>
    <img class="Pokemon-img" src="${spritesOfPokemon[n]}">
    `;
}

function showDatasOfPokemon(n) {
    return /*html*/`
    <div class="info-box">
    <div>Type: ${typesOfPokemon[n]}</div>
    <div>height: ${heighOfPokemon[n]}</div>
    <div>ID#: ${idOfPokemon[n]}</div>
    <div>weight: ${weightOfPokemon[n]} kg</div>
    </div>`;
}