import { auth } from "../server/firebase";
// import { readonly } from "vue"; // readonly

export function signUp(email, password) {
  /* const newUser = {
    createdUser: null,
    //errorMessage: {},
  }; */
  try {
    auth.createUserWithEmailAndPassword(email, password);
    //const createdUser = ref(auth.currentUser);
    const createdUser = auth.currentUser;
    // console.log(createdUser);
    return { createdUser };
  } catch (error) {
    // const user.errorMessage = ref(error.message);
    return error.message;
    // this.errorMessage = error.message;
  }
  //return readonly({ signUp, newUser });
}
