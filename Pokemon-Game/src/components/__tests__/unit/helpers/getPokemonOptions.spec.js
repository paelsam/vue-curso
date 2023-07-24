import { describe, expect, test } from "vitest";
import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"


describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de números', () => {

        const pokemons = getPokemons()

        expect( pokemons.length ).toBe( 650 )
        expect( pokemons[0] ).toBe( 1 )

    })

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => {

        const pokemons = await getPokemonNames([1,2,3,4])

        // Deben ser estrictamente iguales        
        expect( pokemons ).toStrictEqual([
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' }
          ])

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async () => {
        
        const pokemons = await getPokemonOptions()
        
        expect( pokemons.length ).toBe( 4 )
        expect( pokemons ).toEqual([
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            },
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            },
            { 
                id: expect.any(Number), 
                name: expect.any(String) 
            },
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            }
          ])

    })
})