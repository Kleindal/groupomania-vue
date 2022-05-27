import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'
import router from './router'
import { useGlobalStore } from './stores/global'
import { UserService } from './services/user.service'
import { AuthService } from './services/auth.service'

const app = createApp(App)

// Intercept request and set token
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      //@ts-ignore
      config.headers.common["Authorization"] = 'Bearer ' +  token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)

const authService = new AuthService();
const userService = new UserService();
if (authService.getToken()) {
  userService.loadUser().then(() => app.mount('#app'));
} else {
  app.mount('#app');
}


