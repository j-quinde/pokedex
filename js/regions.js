/*const regions = {
    todos: { name: "todos", startId: 1, endId: 898 },
    kanto: { name: "kanto", startId: 1, endId: 151 },
    johto: { name: "johto", startId: 152, endId: 251 },
    hoenn: { name: "hoenn", startId: 252, endId: 386 },
    sinnoh: { name: "sinnoh", startId: 387, endId: 493 },
    unova: { name: "unova", startId: 494, endId: 649 },
    kalos: { name: "kalos", startId: 650, endId: 721 },
    alola: { name: "alola", startId: 722, endId: 809 },
    galar: { name: "galar", startId: 810, endId: 898 },
    hisui: { name: "hisui", startId: 810, endId: 905},
    paldea: { name: "paldea", startId: 810, endId: 905}
};*/

const getRegions = async () => {
    const urlRegions = "https://pokeapi.co/api/v2/region";
    try{
        const response = await fetch(urlRegions);
        const data = await response.json();
        const arrayRegions = [{id: 0, name: "todos", generation: null }];
        const mappedRegionsPromises  = data.results.map(async (region, index) => {

            let generationUrl = "";
            const regionResponse = await fetch(`https://pokeapi.co/api/v2/region/${index + 1}/`);
            const regionData = await regionResponse.json();

            if(regionData.main_generation){
                generationUrl = regionData.main_generation.url;
            }else if(regionData.pokedexes.length > 0){
                generationUrl = regionData.pokedexes[0].url;
            }else{
                generationUrl = null;
            }

            return {
                id: index + 1,
                name: region.name,
                generation: generationUrl
            }
        });
        const mappedRegions = await Promise.all(mappedRegionsPromises);
        const finalRegions = [...arrayRegions, ...mappedRegions];
        return finalRegions;
    } catch (error) {
        console.log("Error al obtener las regiones:", error);
    }
}

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