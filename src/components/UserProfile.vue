<!--signout user -->
<template>
  <div>
   <!--  Logged in as {{ user.uid }}  -->
  <!--  <button @click="auth.signOut()">Sign Out</button> -->
  </div>
</template>

<script>
//import { auth } from "../server/firebase";
// import { computed } from "vue";
//import { useUserStore } from "../stores/user.js";
// import { useStore } from "../store/testIndex.js";
export default {
  // props: ["user"],
  setup() {
    const user = ""//useUserStore();
    /* const { name, doubleCount } = store;
    name;
    doubleCount;
    props;
    const doubleValue = computed(() => { */
    return { user }; //store.doubleCount; auth
  },
  // store.$state = { user: user.uid, name: 'Paimon' },
  // return { auth }//{ name, doubleCount, doubleValue, auth };
  // doubleValue: computed(() => store.doubleCount),
};
// testing
/* export default {
  data() {
    return {
      auth,
    };
  },
  props: ["user"],
}; */
</script>
