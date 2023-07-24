import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    
    // Muy parecido a la data()
    // state local
    state,
    // Parecido a métodos
    // Hacen cambios en el state
    mutations,
    // Actions: Metodos que pueden ser asíncronos
    actions,
    // Son parecidas a las propiedades computadas
    getters,
}

export default counterStore