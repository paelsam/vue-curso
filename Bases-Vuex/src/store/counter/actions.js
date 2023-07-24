import getRandomInt from '../../helpers/getRandomInt'


// Las acciones nunca hacen cambios en el state
// Todo debe ser en las mutaciones
export const incrementRandomInt = async ({ commit }) => {
    // Setter del isLoading que está en el state
    commit('setLoading', true)
    const randomInt = await getRandomInt()

    commit('incrementBy', randomInt)
    commit('setLoading', false)
}