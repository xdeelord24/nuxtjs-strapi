export const state = () => ({
  data: [],
});

export const getDefaultState = () => ({
  data: [],
});

export const getters = {
  getdata(state) {
    return state.data;
  },
};

export const mutations = {
  SET_DATA: (state, data) => (state.data = data),
  resetState(state) {
    // Merge rather than replace so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
};

export const actions = {
  resetState({ commit }) {
    commit("resetState");
  },
  async fetchData({ commit }) {
    try {
      const config = {
        headers: {
          Authorization: `${this.$auth.$storage._state["_token.local"]}`,
        },
      };
      return await this.$strapi
        .get(`/time-series-air-pollutions`, config)
        .then((response) => {
          commit('SET_DATA', response.data); // Assuming the response data is what you want to store
          return response;
        })
        .catch((error) => {
          return error.response;
        });
    } catch (e) {
      return e.response;
    }
  },
  async addData({ commit }, data) {
    try {
      // Set the Authorization header with the JWT
      const config = {
        headers: {
          Authorization: `${this.$auth.$storage._state["_token.local"]}`,
        },
      };
      return await this.$strapi
        .post(`/time-series-air-pollutions`, data, config)
        .then((response) => {
          // Handle success.
          return response;
        })
        .catch((error) => {
          // Handle error.
          return error.response;
        });
    } catch (e) {
      return e.response;
    }
  },
  async editData({ commit }, data) {
    try {
      // Set the Authorization header with the JWT
      const config = {
        headers: {
          Authorization: `${this.$auth.$storage._state["_token.local"]}`,
        },
      };
      return await this.$strapi
        .put(`/time-series-air-pollutions/${data.id}`, data, config)
        .then((response) => {
          // Handle success.
          return response;
        })
        .catch((error) => {
          // Handle error.
          return error.response;
        });
    } catch (e) {
      return e.response;
    }
  },
  async deleteData({ commit }, data) {
    try {
      // Set the Authorization header with the JWT
      const config = {
        headers: {
          Authorization: `${this.$auth.$storage._state["_token.local"]}`,
        },
      };
      return await this.$strapi
        .delete(`/time-series-air-pollutions/${data.id}`, config)
        .then((response) => {
          // Handle success.
          return response;
        })
        .catch((error) => {
          // Handle error.
          return error.response;
        });
    } catch (e) {
      return e.response;
    }
  },
};
