import { createStore } from "vuex";
import users from "./modules/users.js"
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    users
  },
});

export default store;