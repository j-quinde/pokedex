const regions = {
    todos: { name: "todos", startId: 1, endId: 898 },
    kanto: { name: "kanto", startId: 1, endId: 151 },
    johto: { name: "johto", startId: 152, endId: 251 },
    hoenn: { name: "hoenn", startId: 252, endId: 386 },
    sinnoh: { name: "sinnoh", startId: 387, endId: 494 },
    unova: { name: "unova", startId: 495, endId: 649 },
    kalos: { name: "kalos", startId: 650, endId: 721 },
    alola: { name: "alola", startId: 722, endId: 809 },
    galar: { name: "galar", startId: 810, endId: 905}
};

/*
const fetchRegion = async () => {
    const urlRegion = "https://pokeapi.co/api/v2/region";
    const jsonRegion = await fetch(urlRegion).then((res)=> res.json());
    const countRegion = jsonRegion.count;
    for (let i = 1; i <= countRegion; i++){
        const urlDataRegion = `https://pokeapi.co/api/v2/pokedex/${i}/`;    
        const jsonDataUrl = await fetch(urlDataRegion).then((res)=> res.json());
        //const pokedexUrl = jsonDataUrl.pokedexes[0].url;
        console.log(jsonDataUrl)

    }
    
    console.log(countRegion)
}

fetchRegion()*/