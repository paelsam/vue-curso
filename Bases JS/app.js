console.log('Reforzando Javascript');
console.log('Todo en Javascript se pasa por referencia :(');


/* 
let nombre = 'Elkin';
const apellido = 'Angulo';

console.log(nombre, apellido);

if (true) {
    console.log(nombre);
    nombre = 'Samir';
}

console.log(nombre);
*/

/* 
const nombre = 'Elkin';
const apellido = 'Angulo';

console.log(`Nombre Completo: ${nombre} ${apellido}`);
console.log(`Resultado: ${ 'Hola mundo' || false }`);

function getSaludo( nombre ) { 
    return 'Hola ' + nombre;
}

console.log(`Template string: ${ getSaludo(nombre) }`);
*/

/* 
const persona = {
    nombre: 'Elkin',
    apellido: 'Angulo',
    edad: 18,
    direccion: {
        ciudad: 'Cali',
        barrio: 'Compartir'
    }
}

// Operador spread
const persona2 = { ...persona }
persona2.nombre = 'Samir';

console.log(persona);
console.log(persona2); 
*/

/* 
const arreglo = [1, 2, 3, 4];
arreglo.push( 5 );

const arreglo2 = [...arreglo];
arreglo2.push( 6 );

// Metodo map
const arreglo3 = arreglo2.map(( numero ) => numero * 2);
arreglo3.push( 14 );

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
*/

/* 
const greetings = ( name = 'Usuario' ) => `Hello ${ name }`;
console.log( greetings("Elkin") );

const saludar = function ( nombre ) { return `Hola ${ nombre }`; }

function sumar(a, b) { return a + b; }
console.log( sumar(2, 3) );

const getUser = () => ({ ID: 1, username: 'paelsam' });
let { username } = getUser();
console.log( username );

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
];

const { name } = heroes.find( (hero) => hero.id === 1 );
console.log( name );
*/

/* 
const person = {
    name: 'Elkin',
    age: 18,
    codeName: 'Paelsam' 
};

const { name, age, codeName, power = 'Nothing' } = person;
console.log( name, age, codeName, power );

const createHero = ( { name, age, codeName, power = 'Nothing' } ) => ({
    id: 123, name, age, codeName, power
})

console.log( createHero( person ) );
*/

/* 
const characters = ['Goku', 'Vegeta', 'Trunks'];
const [ , vegeta, trunks, goten = 'Idefinido' ] = characters;
console.log( vegeta, trunks, goten );

const returnArray = () => ['ABC', 123];
const [ letters, numbers ] = returnArray();
console.log( letters, numbers);
 */

/* 
import { personas } from "./people.js";

const resultado = personas.filter( ({ edad }) => edad <= 20);
console.log( resultado );

const encontrar = personas.find(( { edad } ) => edad <= 30 );
console.log( encontrar );
*/


/* 
console.log('Inicio');

new Promise( (resolve, reject) => {
    console.log('Cuerpo de la promesa');
    // resolve('YEY!')
    reject('Promesa completa con error');
})
.then( console.log )
.catch( console.log )


console.log('Fin'); 
*/

/* 
const getPersonByAge = ( age ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            const result = personas.filter( ({ edad }) => edad === age  );
            if ( !result ) {
                console.log("Aja")
                reject('Persona no encontrada');
            } else {
                resolve(...result);
            }
        }, 1000);
    });
}

getPersonByAge( 10 )
    .then( console.log )
    .catch( console.error );
*/

/* 
const apiKey = 'omU8218SyA1w41sQoQohCH1dSecIw7N1';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( res => res.json())
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const $img = document.createElement('img');
        $img.src = url;

        document.body.append( $img );
    })
    .catch( console.error );
*/


/* 
const apiKey = 'omU8218SyA1w41sQoQohCH1dSecIw7N1';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

giphyApi.get('/random')
    .then( ({ data: res }) => {
        const { data } = res;
        const { url } = data.images.original;

        const $img = document.createElement('img')
        $img.src = url;

        document.body.append( $img );
    })
*/

/* 
const miPromesa = () => {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve('Whatever');
        }, 1000)
    })
}
const medirTiempoAsync = async () => {
    try {
        console.log( 'Inicio' );
    
        const response = await miPromesa();
        console.log(response);
    
        console.log( 'Fin' );
    } catch ( error ) {
        // Siempre usar Throw en el catch 
        throw 'Catch en medirTiempoAsync';
    }

    // throw 'Error en medirTiempoAsync';
} 

medirTiempoAsync();
*/

/* 
import giphyApi from "./giphyApi.js";


const getURL = async () => {
    try {
        const response = await giphyApi.get('/random');
        const { data } = response.data;
        const { url } = data.images.original;

        const $img = document.createElement('img');
        $img.src = url;
        document.body.append($img);

    } catch ( error ) {
        console.log('Error en la petición', error);
        throw new Error(error);
    }    
};
getURL();
 */

/* 
let firstName;
let lastName = 'Angulo';

console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName' }`)

const isActive = false;

const message = (isActive)
    ? 'Activo'
    : 'Inactivo';

console.log(message);
 */





