const elementList = document.querySelector('#poke_list')
const searchElement = document.querySelector('#search_poke')
const select = document.querySelector('#Tipos')
let datospoke = []

searchElement.addEventListener('keyup',(event)=>{
    const inputText = event?.target?.value.toLocaleLowerCase() || ''
    clean()
    // searchingWithFor(inputText)
    const pokemonFiltered = searchingWithFilter(inputText)
    pokemonFiltered.forEach(renderCard)
})

const clean = () => {
    elementList.innerHTML = ''
}
const searchingWithFilter = (searchingText)=>{
    // console.log(searchingText,datospoke)
    const pokemonFiltered = datospoke.filter(pokemon => {
        const name = pokemon.name;
        return (name.toLocaleLowerCase()).includes(searchingText)
    });
    return pokemonFiltered;
}

const renderCard = (element) => {
    // console.log('aqui',element)
    // Estos son los elementos que vamos a crear de forma dinámica 
    const li = document.createElement('li')
    const divCard = document.createElement('div')
    const divImageName = document.createElement('div')
    const divImage = document.createElement('div')
    const img = document.createElement('img')
    const divName = document.createElement('div')
    const divInfo = document.createElement('div')
    const divNumDex = document.createElement('div')
    const divType = document.createElement('div')
    const divStats = document.createElement('div')

    // Aquí le agregamos los estilos con clases o atributos a nuestros elementos creados
    divCard.classList.add('card','text')
    divImageName.classList.add('img_name_poke')
    divImage.classList.add('img_poke')
    divName.classList.add('name_poke')
    divInfo.classList.add('info_poke')
    divNumDex.classList.add('num_dex')
    divType.classList.add('type')
    divStats.classList.add('stats')



    //Agregamos los datos que obtenemos de la api 
    img.setAttribute('src',element.image)
    divName.innerHTML =  element.name
    divNumDex.innerHTML = 'Pokedex #'+ element.num_dex
    if(element.types[0] && element.types[1]){
        divType.innerHTML = element.types[0].type.name + ' / ' + element.types[1].type.name
    }else{divType.innerHTML = element.types[0].type.name}
    divStats.innerHTML = (element.stats.hp.name + ': ' +element.stats.hp.value
    + ' / ' +element.stats.speed.name + ': ' +element.stats.speed.value
    + ' / ' +element.stats.attack.name + ': ' +element.stats.attack.value 
    + ' / ' +element.stats.defense.name + ': ' +element.stats.defense.value
    + ' / ' +element.stats.s_attack.name + ': ' +element.stats.s_attack.value
    + ' / ' +element.stats.s_defense.name + ': ' +element.stats.s_defense.value)

    //Agregamos color al fondo de la tarjeta
    if(element.types[0].type.name === 'grass'){
        divCard.style.background = '#3ECD34'
    }else if(element.types[0].type.name === 'water'){
        divCard.style.background = '#4088FF'
    }else if(element.types[0].type.name === 'fire'){
        divCard.style.background = '#FF2121'
    }else if(element.types[0].type.name === 'ice'){
        divCard.style.background = '#12EAE0'
    }else if(element.types[0].type.name === 'electric'){
        divCard.style.background = '#F7F326'
    }else if(element.types[0].type.name === 'bug'){
        divCard.style.background = '#AEFF59'
    }else if(element.types[0].type.name === 'fairy'){
        divCard.style.background = '#FA99FF'
    }else if(element.types[0].type.name === 'steel'){
        divCard.style.background = '#C6C6C6'
    }else if(element.types[0].type.name === 'normal'){
        divCard.style.background = '#C07663'
    }else if(element.types[0].type.name === 'dragon'){
        divCard.style.background = '#1700FF'
        divCard.style.color = '#ebf527'
    }else if(element.types[0].type.name === 'fighting'){
        divCard.style.background = '#D34E30'
    }else if(element.types[0].type.name === 'poison'){
        divCard.style.background = '#9B00FF'
    }else if(element.types[0].type.name === 'ground'){
        divCard.style.background = '#B47443'
    }else if(element.types[0].type.name === 'flying'){
        divCard.style.background = '#7FACC9'
    }else if(element.types[0].type.name === 'psychic'){
        divCard.style.background = '#FF00F0'
    }else if(element.types[0].type.name === 'ghost'){
        divCard.style.background = '#455F8F'
    }else if(element.types[0].type.name === 'rock'){
        divCard.style.background = '#8C6C47'
    }else{
        divCard.style.background = '#202020'
        divCard.style.color = '#d1da24'
    }


    //Aquí vamos a definir quién es hijo de quién para la estructura de la card
    elementList.appendChild(li)
    li.appendChild(divCard)
    divCard.appendChild(divImageName)
    divImageName.appendChild(divImage)
    divImage.appendChild(img)
    divImageName.appendChild(divName)
    divCard.appendChild(divInfo)
    divInfo.appendChild(divNumDex)
    divInfo.appendChild(divType)
    divInfo.appendChild(divStats)

}

const normalizeData = (pokemon) => {
    const pokedata = {
        image: pokemon.sprites.other.home.front_default,
        name: pokemon.name,
        num_dex: pokemon.id,
        types: pokemon.types,
        stats:
        {
            hp:{name: pokemon.stats[0].stat.name, value: pokemon.stats[0].base_stat},
            attack:{name: pokemon.stats[1].stat.name, value: pokemon.stats[1].base_stat},
            defense:{name: pokemon.stats[2].stat.name, value: pokemon.stats[2].base_stat},
            s_attack:{name: pokemon.stats[3].stat.name, value: pokemon.stats[3].base_stat},
            s_defense:{name: pokemon.stats[4].stat.name, value: pokemon.stats[4].base_stat},
            speed:{name: pokemon.stats[5].stat.name, value: pokemon.stats[5].base_stat}
        }
    }
    
    datospoke.push(pokedata)
    // console.log(datospoke)
    return pokedata
}


const main = () => {
    //Llamamos a la api
    fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
    //Guardamos la respuesta de la api como un json
        .then(response => response.json())
        // Al json lo guardamos en una variable llamada pokemones 
        // y la usamos como entrada del then
        .then((pokemones)=>{
            // console.log(pokemones)
            // Recorremos el arreglo de pokemones
            pokemones.results.forEach(element => {
                // Aqui llamamos a cada pokemon individualmente
                fetch(`${element.url}`)
                // Aquí convertimos la indormacion de cada pokemon en un json individual
                .then((response)=>response.json())
                // Cada json de cada pokemon lo guardamos en una variable llamada pokemon
                // y se la pasamos a la funcion normalizeData para sintetizar la 
                // información requerida
                .then((pokemon)=> normalizeData(pokemon))
                // la funcion normalizeData nos regresa el objeto pokedata que es la información de 
                // cada pokemon individual y se lo pasa a la función renderCard para
                // pintar cada tarjeta con la informacion de cada pokemon
                .then((pokedata)=>renderCard(pokedata))
            });
        })
        // .then(function(){ datospoke.forEach(renderCard)})
}

select.addEventListener('change',(event) => {
    const types18 = event?.target?.value || ''
    const newData = datospoke.filter( (element) => {
        const type1 = element.types[0].type.name
        // const type2 = element.types[1].type.name
        console.log(element.types)
        return type1.includes(types18) 
        // || type2.includes(types18)
    })
    clean()
    newData.forEach(renderCard)
})

main()  
// renderCard()