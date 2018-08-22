import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        nav_name: ''
    },
    mutations: {
        SET_NAVNAME(state, payload) {
            state.nav_name = payload.nav_name
        }
    },
    actions: {
        setNavName({commit}, {name}) {
            commit('SET_NAVNAME',{nav_name: name})
        }
    },
    getters: {
        navname: state => {
            return state.nav_name
        }
    }
})