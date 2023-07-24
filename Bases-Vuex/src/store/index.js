// Vuex: manejador de estados
import { createStore } from 'vuex'
import counterStore from './counter'



export default createStore({
    // Muy parecido a la data()
    // state global


    // Manejamos todos los estados en modulos
    // Para una mejor organización
    modules: {
        counter: counterStore,
    } 
    

})