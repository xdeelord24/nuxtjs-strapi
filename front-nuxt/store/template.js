export const state = () => ({
    data: null,
})
export const getDefaultState = () => ({
    data: null,
})

export const mutations = {
    resetState(state) {
        Object.assign(state, getDefaultState());
    },
    setData(state, data) {
        state.data = data
    },
}
export const actions = {
    resetState({ commit }) {
        commit("resetState");
    },
    saveData({ commit }, receivedData) {
        commit('setData', receivedData)
    }
}
export const getters = {
    getData(state) {
        return state.data
    },
}
