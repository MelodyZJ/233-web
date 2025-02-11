import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light",
  }),
  getters: {
    getTheme: (state) => {
      return state.theme;
    },
  },
  actions: {
    setTheme(value) {
      this.theme = value;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "use_theme_store",
        storage: localStorage,
        paths: ["themeStore"],
      },
    ],
  },
});
