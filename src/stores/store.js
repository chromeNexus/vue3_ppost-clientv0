/*
import { createStore } from "vuex";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
*/
// import Vue  from 'vue'
//import Vuex from "vuex";
//import { createStore } from "vuex";
import { defineStore } from "pinia";
import { generateFakeData } from "../utils/item.js";
// import { reactive, readonly } from "vue";
import axios from "axios";
// added to combine stores
// import auth from "./auth.js";
// Vue.use(Vuex);
//export default new Vuex.Store({
export const useStore = defineStore({
  id: "useStore",
  state: () => ({
    user: null, // init val is null... will be set by commit
    items: [],
    count: 0,
    name: "",
  }),
  getters: {
    count: (state) => state.items.length,
    // doubleCount: (state) => state.createNewItem(generateFakeData())

    doubleCount() {
      return this.items.length * 2;
    },
    // test getters below
    loggedIn(state) {
      return !!state.user; // will return truthiness or falsiness of the value. if userstate is null it will be false..  if user data is in state then true
    },
  },
  // added to combine stores
  /*  modules: {
    auth,
  }, */
  actions: {
    // test actions added
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`; //Bearer ${userData.token};`; removed semicolon
    },
    // force a reload / refresh of page... header credentials will be destroyed... more scalable solution
    CLEAR_USER_DATA() {
      //localStorage.removeItem("user");
      localStorage.user = "";
      location.reload();
    },
    register(state, credentials) {
      return axios
        .post("//localhost:3000/register", credentials)
        .then(({ data }) => {
          // console.log('user data is:', data)
          //commit("SET_USER_DATA", data);
          this.SET_USER_DATA(state, data);
        });
    },
    login(state, credentials) {
      return axios
        .post("//localhost:3000/login", credentials)
        .then(({ data }) => {
          // console.log('user data is:', data)
          //commit("SET_USER_DATA", data);
          this.SET_USER_DATA(state, data);
        });
    },
    logout(state) {
      if (state.user) {
        this.CLEAR_USER_DATA();
      }
    },
    // end of test actions
    createNewItem(item) {
      if (!item) return;
      this.items.push(item);
    },

    updateItem(id, payload) {
      if (!id || !payload) return;
      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items[index] = generateFakeData();
      }
    },

    deleteItem(id) {
      const index = this.findIndexById(id);
      if (index === -1) return;
      this.items.splice(index, 1);
    },

    clear() {
      return (this.items.length = 0);
    },
    erase() {
      return (this.items.length = 0);
    },
    findIndexById(id) {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});
