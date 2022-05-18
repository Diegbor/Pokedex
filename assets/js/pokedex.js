const elementList = document.querySelector('#poke_list')

const renderCard = () => {



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

}


const main = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=386')
        .then(response => response.json())
        .then((pokemones)=>{
            console.log(pokemones)
            pokemones.results.forEach(element => {
                fetch(`${element.url}`)
                .then((response)=>response.json())
                .then((pokemon)=>console.log(pokemon))
            });
        })
}

main()  