import { defineStore } from 'pinia'
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};


export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    users: [],
    groups: []
  })
})
