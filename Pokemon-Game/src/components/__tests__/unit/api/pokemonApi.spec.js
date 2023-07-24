import { describe, expect, test } from "vitest";
import pokemonApi from '@/api/pokemonApi'



describe('pokemonApi', () => {
    test('axios debe estar configurado con el baseURL de PokeAPI', () => {
        expect( pokemonApi.defaults.baseURL )
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})