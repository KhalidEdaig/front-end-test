import axios from 'axios'

export default {
    getBiens() {
        return axios.get('biens').then((response) => response.data || [])
    },
}
