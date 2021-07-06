import axios from "../../config/axios.config";

const state = {
  primitiveModes: [],
  numberOfShapes: [],
};

const getters = {};

const mutations = {
  SET_PRIMITIVE_MODES: (state, modes) => (state.primitiveModes = modes),
  SET_NUMBER_OF_SHAPES: (state, shapes) => (state.numberOfShapes = shapes),
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
  getNumberOfShapes: async ({ commit }) => {
    try {
      const { data } = await axios.get("/modes/no-of-shapes");
      const { numberOfShapes } = data.data;

      commit("SET_NUMBER_OF_SHAPES", numberOfShapes);
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
