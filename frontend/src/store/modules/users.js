import axios from "axios";

const users = {
    namespaced: true,
    state: {
     usersData: [],
    },
    getters:{
      getUsers: (state) => state.usersData
    },
    actions:{
        async fetchUsers({ commit }) {
            try {
              const url = 'http://localhost:5000/users';
              const response =  await axios.get(url);
              commit("SET_USERS", response.data);
            } catch (error) {
              alert(error);
              console.log(error);
            }
          },
          async createUsers({ commit }, credentials) {
            try {
              const urlCreate = 'http://localhost:5000/users/add';
              const responseCreate = await axios.post(urlCreate, credentials);

              commit('SET_ADD_USERS', responseCreate.data);
            } catch (error) {
              console.error(error);
              return false;
            }
          },
          async updateUsers({ commit }, credentials) {
            try {
              const urlCreate = `http://localhost:5000/users/${id}`;
              const responseCreate = await axios.patch(urlCreate, credentials);

              commit('SET_UPDATE_USERS', responseCreate.data);
            } catch (error) {
              console.error(error);
              return false;
            }
          },
          async deleteUser({ commit }, usersId) {
            try {
              await axios.delete(`http://localhost:5000/users/${usersId}`);
              
            } catch (error) {
              console.error('Error deleting user:', error);
            }
          },
    },
    mutations: {
        SET_USERS(state, users) {
            state.usersData = users;
          },
          SET_ADD_USERS(state, users) {
            state.usersData = users;
          },
          SET_UPDATE_USERS(state, users) {
            state.usersData = users;
          },
    }
}

export default users;