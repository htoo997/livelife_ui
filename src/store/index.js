import { createStore } from 'vuex';
import users from './modules/users.js';

//State Management
const store = createStore({
  modules : {
    users,
  },
  state () {
    return {
      count : 0
    }
  },
  getters: {
    getList() {
      return [
        { id: 1, name : 'Htoo'},
        { id: 2, name : 'Min'},
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store;