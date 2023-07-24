import { describe, expect, test } from "vitest";


describe('Example Component', () => {
    test( 'Debe de ser mayor a 10', () => {

        /// Arreglar
        let value = 9;

        //Estímulo
        value = value + 2


        // Observar al resultado
        // toBeGreaterThan: Debe ser mayor o igual a 10
        expect( value ).toBeGreaterThan( 10 );
    })
})