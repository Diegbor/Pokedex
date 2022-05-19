const elementList = document.querySelector('#poke_list')

const renderCard = () => {

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
    divCard.classList.add('card')
    divImageName.classList.add('img_name_poke')
    divImage.classList.add('img_poke')
    img.setAttribute('src','/assets/img/interrogación.png')
    divName.classList.add('name_poke')
    divInfo.classList.add('info_poke')
    divNumDex.classList.add('num_dex')
    divType.classList.add('type')
    divStats.classList.add('stats')

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
        image: pokemon.sprites.other.dream_world.front_default,
        name: pokemon.name,
        num_dex: pokemon.id,
        types: pokemon.types,
        stats: pokemon.stats
        // {
        //     hp:{name: pokemon.stats[0].stat.name, value: pokemon.stats[0].base_stat},
        //     attack:{name: pokemon.stats[1].stat.name, value: pokemon.stats[1].base_stat},
        //     defense:{name: pokemon.stats[2].stat.name, value: pokemon.stats[2].base_stat},
        //     s_attack:{name: pokemon.stats[3].stat.name, value: pokemon.stats[3].base_stat},
        //     s_defense:{name: pokemon.stats[4].stat.name, value: pokemon.stats[4].base_stat},
        //     speed:{name: pokemon.stats[5].stat.name, value: pokemon.stats[5].base_stat}
        // }
    }
    console.log(pokedata)
}


const main = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=386')
        .then(response => response.json())
        .then((pokemones)=>{
            console.log(pokemones)
            pokemones.results.forEach(element => {
                fetch(`${element.url}`)
                .then((response)=>response.json())
                .then((pokemon)=> normalizeData(pokemon))
            });
        })
}

main()  
renderCard()