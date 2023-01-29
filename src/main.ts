import { createPinia } from "pinia";
import App from "./App.vue";
// import { createApp } from "vue";
import { createSSRApp } from "vue";

// createApp(App).use(createPinia()).mount("#app");

export function createApp() {
  return createSSRApp(App).use(createPinia()).mount("#app");
}
