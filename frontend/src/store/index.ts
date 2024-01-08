import { createStore } from 'vuex'

interface RootState {
  currentUserId: string | null;
}

export default createStore({
  state: () => ({
    currentUserId: null,
  } as RootState),
  getters: {
  },
  mutations: {
    setCurrentUser(state, userId) {
      state.currentUserId = userId;
    },
  },
  actions: {
  },
  modules: {
  }
})
