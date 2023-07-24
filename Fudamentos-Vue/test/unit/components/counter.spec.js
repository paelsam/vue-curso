import { beforeEach, describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Counter from '../../../src/components/Counter.vue'



describe('Counter Component', () => {

    // Preparando sujeto de pruebas
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // test('Debe hacer match con el snapshot', () => {
    //     // Preparando sujeto de pruebas
    //     const wrapper = shallowMount( Counter )
    //     // Tomando una foto al código html del componente
    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('h2 debe tener un valor por defector "Counter"', () => {

        // Preparando sujeto de pruebas
        // const wrapper = shallowMount( Counter )
        
        // Verificamos si la etiqueta h2 existe
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        
        const $h2 = wrapper.find('h2').text()

        // Estimular al sujeto de pruebas

        // Afirmar el resultado
        expect( $h2 ).toBe('Counter')

    })

    test('el valor por defecto debe ser 13 en el p', () => {

        // Wrapper
        // const wrapper = shallowMount( Counter )

        // Etiquetas p
        const $p = wrapper.find('[data-testid="counter"]')

        // Expect
        expect( $p.text() ).toBe( "13" )

    })

    test('debe inscrmentar y decrementar el contador', async () => {

        // Preparando a los objetos del sujeto de pruebas
        const [$increaseBtn, $decreaseBtn] = wrapper.findAll('button')

        // Estímulo al sujeto de pruebas
        // Simulador de eventos: Esto es asincrónico
        // Así que la función debe ser asíncrona
        await $increaseBtn.trigger('click')
        await $decreaseBtn.trigger('click')
        await $decreaseBtn.trigger('click')
        
        const value = wrapper.find('[data-testid="counter"]').text()
        
        expect( value ).toBe('12')
    })

    test('debe de establecer el valor por defecto', () => {

        // Preparando prop del componente
        const { start } = wrapper.props()

        // Etiqueta p
        const value = wrapper.find('[data-testid="counter"]').text()

        // Afirmando el valor ( 13 = 13 )
        expect( Number(value) ).toBe( start )

    })

    test('debe mostrar la prop tituloContador', () => {
        
        const wrapper = shallowMount( Counter, {
            props: {
                tituloContador: 'Hola Mundo',
                start: '5'
            }
        })

        expect( wrapper.find('h2').text() ).toBe( 'Hola Mundo' )

        console.log( wrapper.html() );

    })
})