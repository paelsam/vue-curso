<template>
    <img v-if="sourceImage" :src="sourceImage" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input
          type="text"
          placeholder="Hazme una pregunta"
          v-model="question">
        <p>Recuerda terminar con un signo de interrogación (?) 😉</p>
    </div>

    <div v-if="isValidQuestion" class="answer-container">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            sourceImage: null,
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswerAndSourceImage() {
            this.answer = 'Thinking...'
            try {
                const { answer, image } = await fetch('https://yesno.wtf/api')
                                .then( data => data.json() );
                this.answer = (answer.toUpperCase() === 'YES') ? 'Sí!' : 'No!';
                this.sourceImage = image;
            } catch(err) {
                throw new Error( err );
            }
        }
    },
    watch: {
        question( value, oldValue )  {
            this.isValidQuestion = false

            console.log({ value });

            if ( !value.includes('?') ) return 
            this.isValidQuestion = true
            // !TODO: Realizar petición http (Realizado)
            this.getAnswerAndSourceImage()
        } 
    }

}

</script>

<style scoped>
img, .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 99;
}

.answer-container {
    z-index: 99;
    text-align: center;
    position: relative;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>