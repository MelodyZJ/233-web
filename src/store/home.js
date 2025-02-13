import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    userInfo: {},
  }),
  getters: {
    getUserInfo() {
      return this.userInfo;
    },
  },
  actions: {
    setUserInfo(data) {
      this.userInfo = data;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "userInfo",
        storage: localStorage,
        paths: ["userInfo"],
      },
    ],
  },
});
