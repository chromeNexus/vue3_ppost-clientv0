<template>
  <div class="home">
    <NavBarMain />
    <button
      class="button is-info inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      :class="{ 'is-loading': loading }"
      @click="login()"
    >
      Login with Google
    </button>
    <h3>Home</h3>
    <img alt="Vue logo" src="../assets/logo.png" />
    <User>
      <template v-slot:user="{ user }">
        <div v-if="user">
          <UserProfile :user="user" />
          <!--   logged in as {{ user.uid }} Now remember, if the user is logged in, then the user object will be defined. Otherwise it will be normal. Knowing that we can do some conditional rendering, we’ll say Vue if user go ahead and print out logged in as user dot user ID. And there’s all kinds of other properties on this user object, like the email address, the photo URL if they sign in with OAuth and a bunch of other stuff. -->
        </div>
        <!--  But if the user object is null, then we’ll just use v-else to show the login form. And now if we go preview the app, you can see it shows that we’re logged in as this user ID and you’ll notice that it no longer displays the login form. But one thing we’re missing at this point is a way for the user to sign out, -->
        <BaseLogin v-else />
      </template>
    </User>
  </div>
</template>
<script>
// replaced Logged-in as {{ user.uid }} with <UserProfile :user="user" />
// @ is an alias to /src
import NavBarMain from "../components/NavBarMain.vue";
import User from "../components/User.vue";
import UserProfile from "../components/UserProfile.vue";
// import { mapActions } from "vuex";
/* 
import the user component. 
declare user component in the template 
put our login component inside of user component. 
use V slot to Reference the actual user data of the current user... 
(binding user dynamically) will point it to that user slot prop. And now we can access the user data as if it were reactive data on this component. 
*/
export default {
  name: "Home",
  components: {
    NavBarMain,
    User,
    UserProfile,
  },
  // methods: { ...mapActions("auth", ["login"]) },
  // replaced with firebase
};
</script>

<style></style>
