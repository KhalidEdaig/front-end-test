import biensService from '@/services/api/biens.service'
const biens = {
    namespaced: true,
    state: {
        biens: [],
    },
    actions: {
        GET_BIENS({ commit }) {
            return biensService.getBiens().then((response) => {
                commit('SET_BIENS', response)
            })
        },
    },
    mutations: {
        SET_BIENS(state, biens) {
            state.biens = biens
        },
    },
}

export default biens
