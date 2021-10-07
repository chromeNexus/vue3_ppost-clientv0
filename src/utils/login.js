import { auth } from "../server/firebase";
import { ref, readonly } from "vue";

export default async function login(email, password) {
  //TODO Validate Form
  try {
    await auth.signInWithEmailAndPassword(email, password);
    const currentUser = ref(auth.currentUser);
    return readonly(currentUser);
  } catch (error) {
    // this.errorMessage = error.message;
    const loginErrorMessage = ref(error.message);
    return readonly(loginErrorMessage);
  }
}