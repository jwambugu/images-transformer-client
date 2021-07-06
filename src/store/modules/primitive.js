import axios from "../../config/axios.config";

const state = {
  primitiveModes: [],
};

const getters = {};

const mutations = {
  SET_PRIMITIVE_MODES: (state, modes) => (state.primitiveModes = modes),
};

const actions = {
  getPrimitiveModes: async ({ commit }) => {
    commit("SET_PRIMITIVE_MODES");

    try {
      const { data } = await axios.get("/modes");

      const { modes } = data.data;

      commit("SET_PRIMITIVE_MODES", modes);
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
