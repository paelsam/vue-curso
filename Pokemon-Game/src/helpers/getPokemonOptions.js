import pokemonApi from "../api/pokemonApi";

export const getPokemons = () => {
    return Array.from(Array(650)).map((_, index) => index + 1);
}


const getPokemonOptions = async () => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))
    
    return pokemons;
}

export const getPokemonNames = async (pokemons = []) => {

    const resp = await Promise.all(pokemons.map(async (pokemon) => {
        return await pokemonApi.get(`${pokemon}`)
    }))

    return resp.map(({ data }) => {
        const { id, name} = data;   
        return {id, name};
    })
}

export default getPokemonOptions;