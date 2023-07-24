import { beforeEach, describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import PokemonPicture from '@/components/PokemonPicture.vue'


describe('PokenmonPicture components', () => {
    
    
    test('debe hacer match con el snapshot', () => {
        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        expect( wrapper.html() ).toMatchSnapshot();
    })

    test('debe de mostrar la imagen oculta y el pokemón 100', () => {

        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })


        const [ img1, img2 ] = wrapper.findAll('img')
        expect( img1.exists() ).toBeTruthy()
        expect( img2 ).toBe(undefined)

        expect( img1.classes('hidden-pokemon') ).toBeTruthy()
        expect( img1.attributes().src )
            .toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${wrapper.props().pokemonId}.svg`)

    })

    test('debe de mostrar el pokemon si showPokemon:true', () => {
        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const [ img1, img2 ] = wrapper.findAll('img')

        // Si showPokemon es verdadero la img2 pasa a ser la img1
        // Por lo tanto, img2 seguirá siendo undefined
        expect( img1.exists() ).toBeTruthy()
        expect( img2 ).toBe(undefined)

        expect( img1.classes('fade-in') ).toBeTruthy()
        expect( img1.classes('hidde-pokemon') ).toBeFalsy()
    })

})