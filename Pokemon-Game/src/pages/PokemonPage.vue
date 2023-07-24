<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>Who's that pokemon?</h1>
        <PokemonPicture
          :pokemonId="pokemon.id"
          :showPokemon="showPokemon" />

        <PokemonOptions
        :pokemons="pokemonArr"
        @selection="checkAnswer" />
        
        <template v-if="showAnswer" class="fade-in">
            <h2>{{ message }}</h2>
            <button @click="newGame">Nuevo Juego</button>
        </template>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'



export default {
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemonArr: [], // Array de pokemons
            pokemon: null, // Pokemon seleccionado
            showPokemon: false, // Mostar pokemon si se seleccionó el correcto
            showAnswer: false, // Mostrar respuesta
            message: '', // Mensaje de correcto o incorrecto

        }
    },
    methods: {
        async mixPokemonArray() {
            // Obteniendo el nombre de 4 pokemones aleatorios
            this.pokemonArr = await getPokemonOptions();

            // Seleccionando al pokemon correcto
            const randomIndex = Math.floor(Math.random() * this.pokemonArr.length)
            this.pokemon = this.pokemonArr[randomIndex]
        },
        checkAnswer(pokemonId) {
            this.showPokemon = true
            this.showAnswer = true

            if (!(pokemonId === this.pokemon.id)) {
                this.message = `Oops, era ${ this.pokemon.name }`
            } else {
                this.message = `Correcto, el pokemón era ${ this.pokemon.name }`
            }

            console.log('Bienvenido a la Grasa :v');
        },
        newGame() {
            this.pokemon = null
            this.pokemonArr = []
            this.showPokemon = false
            this.showAnswer = false
            this.mixPokemonArray();
        }
    },
    mounted() {
        this.mixPokemonArray();
    }
}
</script>
