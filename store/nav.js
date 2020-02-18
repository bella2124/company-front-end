// States
export const state = () =>({
    
    toggleSidebar: false
    
})

// mutations
export const mutations = {

    toggleSidebar(state,payload) {
        state.toggleSidebar = payload
    }

}
export const getters = {

    toggleSidebar: state => state.toggleSidebar

}


// actions
export const actions = {

    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    }

}

// Getters
