<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="randomInt" :disabled="isLoading" >Random</button>

    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>

    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>

// mapState: propiedades de los objetos del state
// mapActions: Llamamos a los actions
import { mapActions, mapState } from 'vuex'


export default {
    name: 'counter-vue',
    // computed: mapState(['count'])
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        // Destructuracción del state
        ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
        // ...mapState({
        //     count: ({ count }) => count,
        //     lastMutation: ({ lastMutation }) => lastMutation
        // }
    },
    methods: {
        increment() {
            // Haciendo un commit de la mutación
            this.$store.commit('counter/increment')
        },
        incrementBy( value ) {
            // Mutación con argumentos
            this.$store.commit('counter/incrementBy', value)
        },
        // ...mapActions('counter', ['incrementRandomInt'])
        ...mapActions( 'counter', {
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>
