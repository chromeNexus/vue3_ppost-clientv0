import { createApp } from "vue";
import App from "./App.vue";
//import { firestorePlugin } from "vuefire";
import "./index.css";
import router from "./router";
import { useStore } from "./stores/store";
import _ from "lodash";
// import { createPinia } from "pinia";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
const app = createApp(App);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = _.upperFirst(
    _.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app
  // .use(firestorePlugin)
  .use(useStore)
  // .use(createPinia())
  .use(router)
  .mount("#app");
// createApp(App).use(router).mount("#app");
