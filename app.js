const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/' + getRandomInt(1, 151)

console.log(pokeapiUrl)

$.getJSON(pokeapiUrl).done(function (data) {
    console.log(data);
    $('#img').attr('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`);
    $('#name').text(data.species.name);
    $('#num').text('#' + data.id);
    $('#type').text(data.types[0].type.name);
    $('#ability').text(data.abilities[0].ability.name);
    $('#height').text(data.height);
    $('#weight').text(data.weight);
    $('#attack').text(data.stats[1].base_stat);
    $('#experience').text(data.base_experience);
    $('#defense').text(data.stats[3].base_stat);

    type = data.types[0].type.name

    const elem = document.getElementById('cardHeader');

    switch (type) {
        case "normal":
            elem.style.backgroundColor = '#c7ccce'
            break;
        case "poison":
            elem.style.backgroundColor = '#b090c1'
            break;
        case "psychic":
            elem.style.backgroundColor = '#db75ae'
            break;
        case "grass":
            elem.style.backgroundColor = '#8bbe8a'
            break;
        case "ground":
            elem.style.backgroundColor = '#c4943f'
            break;
        case "ice":
            elem.style.backgroundColor = '#62cdc1'
            break;
        case "fire":
            elem.style.backgroundColor = '#ffa756'
            break;
        case "rock":
            elem.style.backgroundColor = '#bca584'
            break;
        case "dragon":
            elem.style.backgroundColor = '#9a9dcb'
            break;
        case "water":
            elem.style.backgroundColor = '#58abf6'
            break;
        case "bug":
            elem.style.backgroundColor = '#8cb331'
            break;
        case "dark":
            elem.style.backgroundColor = '#5a595d'
            break;
        case "fighting":
            elem.style.backgroundColor = '#eb4971'
            break;
        case "fire":
            elem.style.backgroundColor = '#ffa756'
            break;
        case "ghost":
            elem.style.backgroundColor = '#636298'
            break;
        case "steel":
            elem.style.backgroundColor = '#447f9c'
            break;
        case "flying":
            elem.style.backgroundColor = '#b5bbd3'
            break;
        case "electric":
            elem.style.backgroundColor = '#f2cb55'
            break;
        case "fairy":
            elem.style.backgroundColor = '#eab8cf'
            break;
        default:
            elem.style.backgroundColor = '#ebedf5'
            break;
    }
});