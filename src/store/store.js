import Vue from "vue";
import Vuex from "vuex";
import { fetchCorona, fetchIndiaTimeline,fetchFlag } from "./serve";

Vue.use(Vuex);

const state = {
  coronaData: null,
  indiaTimelineData: null,
  flagData: null,
};

const mutations = {
  setCoronaData(state, data) {
    state.coronaData = data;
  },
  setIndiaTimelineData(state, data) {
    state.indiaTimelineData = data;
  },
  setFlagData(state, data) {
    state.flagData = data;
  },
};

const actions = {
  async fetchCoronaData({ commit }) {
    try {
      const response = await fetchCorona();
      commit("setCoronaData", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchFlagData({ commit }) {
    try {
      const response = await fetchFlag();
      commit("setFlagData",response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchIndiaTimelineData({ commit }) {
    try {
      const response = await fetchIndiaTimeline();
      commit("setIndiaTimelineData", response.data);
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {
  coronaData: (state) => state.coronaData,
  flagData: (state) => state.flagData,
  indiaTimelineData: (state) => state.indiaTimelineData,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
