import { describe, test, beforeEach, expect, vitest } from "vitest";
import PokemonPage from "@/pages/PokemonPage.vue"
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock.js"


describe('PokemonPage Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('debe de hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot();

    })

    test('debe de llamar el mixPokemonArray al montar', () => {

        const mixPokemonArraySpy = vitest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage);

        expect(mixPokemonArraySpy).toHaveBeenCalled();
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons, // Array de pokemons
                    pokemon: pokemons[0], // Pokemon seleccionado
                    showPokemon: false, // Mostar pokemon si se seleccionó el correcto
                    showAnswer: false, // Mostrar respuesta
                    message: '', // Mensaje de correcto o incorrecto
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de mostar los componentes de pokemon PokemonPicture y PokemonOptions', () => {
       
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons, // Array de pokemons
                    pokemon: pokemons[3], // Pokemon seleccionado
                    showPokemon: false, // Mostar pokemon si se seleccionó el correcto
                    showAnswer: false, // Mostrar respuesta
                    message: '', // Mensaje de correcto o incorrecto
                }
            }
        })

        // PokemonPicture debe de existir
        // PokemonOptions debe de exisitr
        
        const PokemonPicture = wrapper.find('pokemon-picture-stub')
        const PokemonOptions = wrapper.find('pokemon-options-stub')
        
        expect( PokemonPicture.exists() ).toBeTruthy()
        expect( PokemonOptions.exists() ).toBeTruthy()

        // PokemonPicture attribute pokemonId === "4"
        expect(PokemonPicture.attributes().pokemonid).toBe("4")

        // PokemonOptions attribute pokemon toBe true
        expect( PokemonOptions.attributes().pokemons ).toBeTruthy();
    })


    test('pruebas con checkAnswer', async () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons, // Array de pokemons
                    pokemon: pokemons[3], // Pokemon seleccionado
                    showPokemon: false, // Mostar pokemon si se seleccionó el correcto
                    showAnswer: false, // Mostrar respuesta
                    message: '', // Mensaje de correcto o incorrecto
                }
            }
        })

        // Estímulo
        // Hace cambos en el dom 
        await wrapper.vm.checkAnswer(4)
        
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect( wrapper.find('h2').text() ).toBe(`Correcto, el pokemón era ${ pokemons[3].name }`)

        await wrapper.vm.checkAnswer(2)

        console.log( wrapper.vm.message )
        expect( wrapper.vm.message ).toBe(`Oops, era ${ pokemons[3].name }`)
    })
})