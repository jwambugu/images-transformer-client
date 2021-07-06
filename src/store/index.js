import Vue from "vue";
import Vuex from "vuex";
import primitive from "./modules/primitive";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    primitive,
  },
});
