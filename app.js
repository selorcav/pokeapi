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

    const cardHeader = document.getElementById('cardHeader');
    const cardBody = document.getElementById('cardBody');
    const cardDataTitle = document.getElementById('cardDataTitle');

    switch (type) {
        case "normal":
            cardHeader.style.backgroundColor = '#c7ccce'
            cardBody.style.backgroundColor = '#c7ccce'
            cardDataTitle.style.color = '#c7ccce'
            break;
        case "poison":
            cardHeader.style.backgroundColor = '#b090c1'
            cardBody.style.backgroundColor = '#b090c1'
            cardDataTitle.style.color = '#b090c1'
            break;
        case "psychic":
            cardHeader.style.backgroundColor = '#db75ae'
            cardBody.style.backgroundColor = '#db75ae'
            cardDataTitle.style.color = '#db75ae'
            break;
        case "grass":
            cardHeader.style.backgroundColor = '#8bbe8a'
            cardBody.style.backgroundColor = '#8bbe8a'
            cardDataTitle.style.color = '#8bbe8a'
            break;
        case "ground":
            cardHeader.style.backgroundColor = '#c4943f'
            cardBody.style.backgroundColor = '#c4943f'
            cardDataTitle.style.color = '#c4943f'
            break;
        case "ice":
            cardHeader.style.backgroundColor = '#62cdc1'
            cardBody.style.backgroundColor = '#62cdc1'
            cardDataTitle.style.color = '#62cdc1'
            break;
        case "fire":
            cardHeader.style.backgroundColor = '#ffa756'
            cardBody.style.backgroundColor = '#ffa756'
            cardDataTitle.style.color = '#ffa756'
            break;
        case "rock":
            cardHeader.style.backgroundColor = '#bca584'
            cardBody.style.backgroundColor = '#bca584'
            cardDataTitle.style.color = '#bca584'
            break;
        case "dragon":
            cardHeader.style.backgroundColor = '#9a9dcb'
            cardBody.style.backgroundColor = '#9a9dcb'
            cardDataTitle.style.color = '#9a9dcb'
            break;
        case "water":
            cardHeader.style.backgroundColor = '#58abf6'
            cardBody.style.backgroundColor = '#58abf6'
            cardDataTitle.style.color = '#58abf6'
            break;
        case "bug":
            cardHeader.style.backgroundColor = '#8cb331'
            cardBody.style.backgroundColor = '#8cb331'
            cardDataTitle.style.color = '#8cb331'
            break;
        case "dark":
            cardHeader.style.backgroundColor = '#5a595d'
            cardBody.style.backgroundColor = '#5a595d'
            cardDataTitle.style.color = '#5a595d'
            break;
        case "fighting":
            cardHeader.style.backgroundColor = '#eb4971'
            cardBody.style.backgroundColor = '#eb4971'
            cardDataTitle.style.color = '#eb4971'
            break;
        case "fire":
            cardHeader.style.backgroundColor = '#ffa756'
            cardBody.style.backgroundColor = '#ffa756'
            cardDataTitle.style.color = '#ffa756'
            break;
        case "ghost":
            cardHeader.style.backgroundColor = '#636298'
            cardBody.style.backgroundColor = '#636298'
            cardDataTitle.style.color = '#636298'
            break;
        case "steel":
            cardHeader.style.backgroundColor = '#447f9c'
            cardBody.style.backgroundColor = '#447f9c'
            cardDataTitle.style.color = '#447f9c'
            break;
        case "flying":
            cardHeader.style.backgroundColor = '#b5bbd3'
            cardBody.style.backgroundColor = '#b5bbd3'
            cardDataTitle.style.color = '#b5bbd3'
            break;
        case "electric":
            cardHeader.style.backgroundColor = '#f2cb55'
            cardBody.style.backgroundColor = '#f2cb55'
            cardDataTitle.style.color = '#f2cb55'
            break;
        case "fairy":
            cardHeader.style.backgroundColor = '#eab8cf'
            cardBody.style.backgroundColor = '#eab8cf'
            cardDataTitle.style.color = '#eab8cf'
            break;
        default:
            cardHeader.style.backgroundColor = '#ebedf5'
            cardBody.style.backgroundColor = '#ebedf5'
            cardBody.style.backgroundColor = '#ebedf5'
            break;
    }
});