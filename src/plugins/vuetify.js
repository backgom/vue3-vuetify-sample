// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases, custom } from "./iconsets/custom";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  icons: {
    defaultSet: "custom",
    aliases,
    sets: {
      custom,
      mdi,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
