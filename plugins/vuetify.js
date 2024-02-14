import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const primaryTheme = {
  dark: false,
  colors: {
    primary: "#E9E9E9",
    secondary: "#F5F5F5",
    tertiary: "#F11E7F",
    background: "#FFFFFF",
  },
};

const secondaryTheme = {
  dark: true,
  colors: {
    primary: "#323439",
    secondary: "#27292E",
    tertiary: "#F11E7F",
    background: "#212327",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "primary",
      themes: {
        primary: primaryTheme,
        secondary: secondaryTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
