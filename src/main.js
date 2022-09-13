import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import iconsets from "@/plugins/iconsets";

loadFonts();

createApp(App).use(router).use(iconsets).use(vuetify).mount("#app");