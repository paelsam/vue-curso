import { shallowMount } from '@vue/test-utils'
import { describe, test, beforeEach, expect } from 'vitest'
import PokemonOptions from '@/components/PokemonOptions.vue'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons,
           }
        })
    })

    test('debe de hacer match con el snapshot', () => { 
        console.log( wrapper.html() );
        // toMatchInlineSnapshot
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const $li = wrapper.findAll('li')
        expect( $li.length ).toBe( 4 )
        
        expect( $li[0].text() ).toBe('Bulbasaur')
        expect( $li[1].text() ).toBe('Ivysaur')
        expect( $li[2].text() ).toBe('Venusaur')
        expect( $li[3].text() ).toBe('Charmander')
    })

    test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {

        const [ l1, l2, l3, l4 ] = wrapper.findAll('li')
        
        l1.trigger('click')
        l2.trigger('click')
        l3.trigger('click')
        l4.trigger('click')

        // Valores emitidos
        console.log( wrapper.emitted('selection') )

        expect( wrapper.emitted('selection').length ).toBe(4)
        expect( wrapper.emitted('selection')[0] ).toStrictEqual([1])
        expect( wrapper.emitted('selection')[1] ).toStrictEqual([2])
        expect( wrapper.emitted('selection')[2] ).toStrictEqual([3])
        expect( wrapper.emitted('selection')[3] ).toStrictEqual([4])




    })
})