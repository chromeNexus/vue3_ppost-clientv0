<template>
  <aside class="section">
    <!-- *********** DONT DELETE KEEP
    <h3>Sign in Anonymously</h3>
    <button
      type="button"
      @click="auth.signInAnonymously()"
      class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign In
      <slot></slot>
      -->
    <!--  Login Anonymously
      <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
    </button> -->
    <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>
    <div v-else>
      <h3>Sign In with Email</h3>
      <a href="#" @click="newUser = true">New User?</a>
    </div>

    <label for="email">Email</label>
    <br />
    <input v-model="email" placeholder="email" type="email" class="input" />

    <label for="password">Password</label>
    <br />
    <input v-model="password" type="password" class="input" />
    <br />
    <button
      class="button is-info"
      :class="{ 'is-loading': loading }"
      @click="signInOrCreateUser()"
    >
      {{ newUser ? "Sign Up" : "login" }}
    </button>
    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>

  <!--  <div>
    20.62 - 2.95 = 17.65 - .80 = 16.85
    const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dexterarcher:<password>@cluster0.a4wlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
Replace <password> with the password for the dexterarcher user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
    {{ email }}
    {{ password }}



Add <your mongo shell's download directory>/bin to your $PATH variable

    mongo "mongodb+srv://cluster0.a4wlk.mongodb.net/myFirstDatabase" --username dexterarcher

    Replace myFirstDatabase with the name of the database that connections will use by default. You will be prompted for the password for the Database User, dexterarcher. When entering your password, make sure all special characters are URL encoded.
  </div> -->
</template>

<script>
import { auth } from "../server/firebase";
// import { MailIcon } from "@heroicons/vue/solid";

export default {
  components: {
    //   MailIcon,
  },
  data() {
    return {
      auth,
      newUser: false,
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async signInOrCreateUser() {
      //TODO Validate Form
      this.loading = true;
      this.errorMessage = "";
      
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    },
  },
};
</script>
