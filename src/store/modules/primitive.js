import axios from "../../config/axios.config";
import { errorHandler } from "../../utils/utils";

const state = {
  primitiveModes: [],
  numberOfShapes: [],
  transformedPhotoResponse: null,
};

const getters = {};

const mutations = {
  SET_PRIMITIVE_MODES: (state, modes) => (state.primitiveModes = modes),
  SET_NUMBER_OF_SHAPES: (state, shapes) => (state.numberOfShapes = shapes),
  SET_TRANSFORMED_PHOTO_RESPONSE: (state, response) =>
    (state.transformedPhotoResponse = response),
};

const actions = {
  getPrimitiveModes: async ({ commit, dispatch }) => {
    commit("SET_PRIMITIVE_MODES");

    try {
      const { data } = await axios.get("/modes");

      const { modes } = data.data;

      commit("SET_PRIMITIVE_MODES", modes);
    } catch (e) {
      dispatch("setError", errorHandler(e));
    }
  },
  getNumberOfShapes: async ({ commit, dispatch }) => {
    try {
      const { data } = await axios.get("/modes/no-of-shapes");
      const { numberOfShapes } = data.data;

      commit("SET_NUMBER_OF_SHAPES", numberOfShapes);
    } catch (e) {
      dispatch("setError", errorHandler(e));
    }
  },
  transformPhotos: async ({ commit, dispatch }, payload) => {
    try {
      const { data } = await axios.post("/images", payload);

      commit("SET_TRANSFORMED_PHOTO_RESPONSE", data.data);
    } catch (e) {
      dispatch("setError", errorHandler(e));
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
