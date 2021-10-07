<!--provides access to current user login status -->
<template>
  <div>
    <!-- And now that we’re listening to state changes on the user, we need a way to access the user in a template. To maximize the reasonability of this component. use slot & make the actual user data available by binding it to the user property on this slot. This is what we call a slot crop, and it makes the user data available to any other component that consumes the user component. -->
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
// import { auth } from "../server/firebase.js";
import { ref } from "vue";
export default {
  setup() {
    // initialize user to null (no user | not signed in)
    const user = ref(null);
    /*listen to changes on the user state by setting up a realtime stream using auth on state changed. And this actually returns as a function that we can call to unsubscribe from that stream when needed,(generally a good idea). So you don’t create memory leaks in the app. Now on all state changed takes a callback as an argument that will fire every time the state changes, like when the user logs in or logs out. And we can make our user state on this component reactive by simply defining the user value as the Firebase user.  */
    // const unsubscribe = auth.onAuthStateChanged(
      /*acts as event listener for when user logins in and out */
    //  (firebaseUser) => (user.value = firebaseUser)
    //);
    // return these values on an object from the setup function.
    return {
      user,
     // unsubscribe,
    };
  },
  /* 
set up the destroyed lifecycle hook, so we unsubscribed from the user state whenever this component is destroyed, that’s technically an optional step, but it’s a good idea to dispose of any realtime stream when it’s no longer needed and a component.
NOTE: use unmounted instead of destroyed() [deprecated]
user is exported as an object { user }  reference as { user } when needed i.e. home.vue
*/
  /* unmounted() {
    this.unsubscribe();
  }, */
};
</script>
