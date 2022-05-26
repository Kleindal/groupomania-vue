import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: []
  }),
  getters: {
    getUsers() {
      return this.users;
    },
  }
})
