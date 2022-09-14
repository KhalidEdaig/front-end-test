import { createStore } from 'vuex'
import biens from './modules/biens.module'

const store = createStore({
    modules: {
        biens,
    },
})

export default store
