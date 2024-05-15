export const state = () => ({
  role: "",
  facility: "",
});

export const getDefaultState = () => ({
  role: "",
  facility: "",
});

export const getters = {
  getRole(state) {
    return state.role;
  },
  getFacility(state) {
    return state.facility;
  },
};

export const mutations = {
  SET_ROLE: (state, data) => (state.role = data),
  SET_FACILITY: (state, data) => (state.facility = data),
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  getRole(state, data) {
    state.role = data;
  },
  getFacility(state, data) {
    state.role = data;
  },
};

export const actions = {
  resetState({ commit }) {
    commit("resetState");
  },
  async fetchMe({ commit }) {
    try {
      // Set the Authorization header with the JWT
      const config = {
        headers: {
          Authorization: `${this.$auth.$storage._state["_token.local"]}`,
        },
      };
      await this.$strapi
        .get(`/users/me?populate=*`, config)
        .then((response) => {
          // Handle success.
          commit("SET_ROLE", response.data.role);
          commit("SET_FACILITY", response.data.facility);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    } catch (e) {
      console.log(e);
    }
  },
}; //dispatch
