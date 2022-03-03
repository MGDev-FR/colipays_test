import { createStore } from 'vuex'

export default createStore({
    state: {
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },

        clearToken(state) {
            state.token = ''
        }
    },
    actions: {
        login(context, token) {
            context.commit('setToken', token)

            localStorage.setItem('token', token)
        },

        logout(context) {
            context.commit('clearToken')

            localStorage.removeItem('token')
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        token: state => state.token
    }
})
