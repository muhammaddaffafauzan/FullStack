import axios from "axios";

const users = {
    namespaced: true,
    state: {
     usersData: [],
    },
    getters:{
      getUsers: (state) => state.usersData,
      getUsersById: (state) => (users_id) => {
        console.log("fetching single users by id:", users_id);
        console.log("usersData:", state.usersData);
        const user = state.usersData;
        console.log("user:", user);
        return user;
      }
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
          async fetchSingleUsers({ commit }, users_id) {
            try {
              const url = `http://localhost:5000/users/${users_id}`;
              const response =  await axios.get(url);
              commit("SET_SINGLE_USERS", response.data);
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
          async updateUser({ commit }, { id, name, email, gender }) {
            try {
              const response = await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email,
                gender,
              });
              commit('SET_UPDATE_USERS', response.data);
            } catch (error) {
              console.error('Error updating user data:', error);
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
          SET_SINGLE_USERS(state, users) {
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