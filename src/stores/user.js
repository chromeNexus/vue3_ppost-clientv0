// @ts-check
import { defineStore } from "pinia";
import { auth } from "../server/firebase";
// import { computed } from "vue";
// defineStore returns a function that has to be called to get access to the store:
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    email: null,
    name: null,
    isLoggedIn: false,
    isAdmin: false,
    counter: 0,
  }),
  // optional getters
  getters: {
    doubleCount() {
      return this.counter * 2;
    },
    // use getters in other getters
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1;
    },
  },
  // optional actions
  actions: {
    async register(email, password) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        const demo = await auth.currentUser;
        console.log(demo);
        return demo;
      } catch (error) {
        return error.message;
        //  this.errorMessage = error.message;
      }
    },
    async login(){},
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
  },
});
//export default {
// ...useUserStore,
// ...useCartStore,
//computed: mapStores({...useUserStore, useCartStore}),
//},
/* methods: {
    async newUser(email, password) {
      await auth.createUserWithEmailAndPassword(email, password);
    },
    async login(user, password) {
      const userData = await apiLogin(user, password);

    this.patch({
        name: user,
        ...userData,
      });
    },
    async buyStuff() {
      // use them anywhere!
      if (this.userStore.isAuthenticated()) {
        await this.cartStore.buy();
        this.$router.push("/purchased");
      }
    },
  },
}; */
/* alt syntax for defineStore above 
 state() { 
  return {
    counter: 0,
    name: 'Eduardo',
    isAdmin: true,
  } 
} 
});
*/
/* export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: null,
    isLoggedIn: false,
    isAdmin: false,
  }), */
/* state: () => ({
    name: "Eduardo", */

/*   isAdmin: true,
  }), */
/*  actions: {
    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
/*   async login(user, password) {
      const userData = await apiLogin(user, password);

      this.patch({
        name: user,
        ...userData,
      });
    },
    logout() {
      this.patch({
        name: "",
        isAdmin: false,
      }); */

// we could do other stuff like redirecting the user
/*   },
  },
}); */

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
/*
function apiLogin(a, p) {
  if (a === "ed" && p === "ed") return Promise.resolve({ isAdmin: true });
  if (p === "ed") return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error("invalid credentials"));
}
 */
