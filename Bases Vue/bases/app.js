// Options Api
const app = Vue.createApp({
    template: ``,
    data() {
        return {
            // Objetos reactivos
            quote: 'I\'m Batman',
            author: 'Bruce Wayne'
        }  
    },
    methods: {
        // Podemos usar parámetros
        // Por defecto el primer parametro es el evento que 
        changeQuote( ) {
            this.author = 'Elkin Angulo'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase();
        }
    },

})

app.mount('#app');

