const state = {
  error: null,
};

const getters = {};

const mutations = {
  SET_ERROR: (state, error) => (state.error = error),
};

const actions = {
  setError: ({ commit }, payload) => {
    commit("SET_ERROR", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
