import Indecision from '../../../src/components/Indecision.vue'
import { shallowMount } from "@vue/test-utils";
import { test, describe, beforeEach, expect, vitest, vi } from "vitest";


describe('Indecision Component', () => {

    // Preparando el componente para las pruebas
    let wrapper
    // Spy: están pendientes de cualquier caso (clg)
    let clgSpy


    // Metodo que se ejecuta en cada test
    beforeEach(() => {
        wrapper = shallowMount(Indecision )

        clgSpy = vitest.spyOn( console, 'log' )

        vitest.clearAllMocks()
    })

    /* Test space */

    test('Haciendo un snapshop al componente Indecision', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    })

    test('Escribir en el input no debe disparar nada (clg)', async () => {
        
        const getAnswerSpy = vitest.spyOn( wrapper.vm, 'getAnswerAndSourceImage' )
        
        const $input = wrapper.find('input')
        await $input.setValue('Hola Mundo')
        
        expect( clgSpy ).toHaveBeenCalled()
        expect( getAnswerSpy ).not.toHaveBeenCalled(0)
        
        // Accedemos a la instanciación del coponente de vue
        // console.log( wrapper.vm );
    })

    test('Escribir el símbolo de "?" debe disparar el getAnswer', async () => {
        // Mock: Simulación de una petición http
        const getAnswerAndSourceImageSpy = vitest.spyOn( wrapper.vm, 'getAnswerAndSourceImage' )
        
        const $input = wrapper.find('input')
        await $input.setValue('Hola Mundo?')
        
        expect( getAnswerAndSourceImageSpy ).toHaveBeenCalled( )
    })

    test('Pruebas en getAnswer', async () => {


    })

    test('Pruebas en getAnswer - Fallo en el API', () => {

    })

})