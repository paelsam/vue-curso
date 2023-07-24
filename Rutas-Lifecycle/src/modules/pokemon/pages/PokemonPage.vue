<template>
    <h1>Pokemon <span>#{{ pokemonId }}</span> </h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <h2>{{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        // Recibir props por URL
        pokemonId: {
            type: Number,
            required: true
        }
    },  
    data() {
        return {
            // pokemonId: this.$route.params.id,
            pokemon: null
        }
    },

    created() {

        console.log( this.$attrs );

        // // Hallar segmentosURL y QueryParameters
        // const { pokemonId } = this.$route.params;
        // console.log( pokemonId )
        // this.pokemonId = pokemonId;

        this.getPokemon(  );

    },
    methods: {
        async getPokemon( ) {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.pokemonId }`)
                    .then( r => r.json() )
                console.log( pokemon );
                this.pokemon = pokemon
            } catch ( err ) {
                // Se entrará a este erro si:
                // No hay conexión a internet
                // El usuario puso un id incorrecto
                this.$router.push('/') // Lo manda a la pagina del home
                console.log( 'No hay nada que hacer aquí' );
            }
        }
    },
    watch: {
        pokemonId( ) {
            // Llamamos la petición HTTP cuando el parámetro cambia
            this.getPokemon();
        }
    }

}


</script>