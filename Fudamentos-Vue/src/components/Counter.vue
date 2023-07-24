<template>
    <h2>{{ customTitle }}</h2>
    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
    <!-- data-testid: Id para los test -->
    <p data-testid="counter" >{{ counter }}</p>
    <div>
        <button @click="increase" >+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
export default {
    props: {
        tituloContador: String,
        start: {
            type: Number,
            default: 13,
            required: false,
            validator: function (value) {
                return !(value < 13);
            }
        }
    },
    // name: 'Patito'
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            console.log('getSquareValue');
            return this.counter**2
        },
        increase() {
            this.counter++
        }, 
        decrease() {
            this.counter--
        }
    },
    computed: {
        squareCounter() {
            console.log('Computed squereCounter')
            return this.counter**2
        },
        customTitle() {
            return this.tituloContador || 'Counter'
        }
    }
}
</script>

<style>
    button {
        background-color: rgb(0, 255, 106);
        border-radius: 20%;
        border: 1px solid white;
        color: white;
        margin: 0 5px;
        padding: 5px 15px;
        width: 3rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        text-align: center;
    }

    button:hover {
        background-color: grey;
        transition: 0.3s ease-in-out;
    }

</style>