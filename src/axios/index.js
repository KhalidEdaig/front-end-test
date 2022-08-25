import axios from 'axios'

// eslint-disable-next-line no-undef
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const authErrorCode = 401
        const ErrorCodes = [
            {
                code: 500,
                message: 'Internal Server Error',
            },
            {
                code: 400,
                message: 'Bad Request',
            },
            {
                code: 403,
                message: 'Forbidden',
            },
        ]

        return Promise.reject(error)
    }
)

export default axios
//
