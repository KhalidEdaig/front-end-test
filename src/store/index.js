// store/index.js
import { createStore } from 'vuex'
import biens from './modules/biens.module'
import stack from './modules/stack.module'
const store = createStore({
    modules: {
        stack,
        biens,
    },
})

export default store
