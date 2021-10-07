import { auth } from "../server/firebase";
 import { ref, readonly } from "vue";
 const currentUserStatus = ref({
  user: null,
  email: null
 })
async function register(email, password) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    //const createdUser = ref(auth.currentUser);
    currentUserStatus.user = ref(auth.currentUser)
    console.log(currentUserStatus.user);
    // return createdUser
    
    //
  } catch (error) {
    const registerErrorMessage = ref(error.message)
   // return error.message;
    //  this.errorMessage = error.message;
  }
  async function login(email, password) {
    //TODO Validate Form
    try {
      await auth.signInWithEmailAndPassword(email,password);
      const loggedInUser = ref(auth.currentUser);
      //return loggedInUser
    } catch (error) {
     // this.errorMessage = error.message;
      const loginErrorMessage = ref(error.message)
    }
  }
  export const userState = readonly({
    currentUserStatus, createdUser, registerErrorMessage, loggedInUser, loginMessage
  })

}
//return 
/* const state = {
  user: {},
  isLoggedIn: false,
};
const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
};

const actions = {
  async login({ commit }) {
    // const provider = new fb.auth.GoogleAuthProvider();
    const googleProvider = new fb.auth.GoogleAuthProvider();

    // const { user } = await fb.auth().signInWithPopup(provider);
    const { user } = await fb.auth().signInWithPopup(googleProvider);
    // const result = await fb.auth().signInWithPopup(provider);
    console.log(user);
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: fb.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("users").doc(setUser.id).set(setUser);
    commit("setUser", setUser);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
 */
