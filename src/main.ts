import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import RestClient from "./services/axiosClient";

import PageLayout from "@/layouts/PageLayout.vue";
import SimpleLayout from "@/layouts/SimpleLayout.vue";
import "@/assets/css/style.css";

// Starting Service Base
new RestClient(process.env.VUE_APP_BASE_URL).createClient();

createApp(App)
  .use(router)
  .component("page-layout", PageLayout)
  .component("simple-layout", SimpleLayout)
  .mount("#app");
