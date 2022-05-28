import { useGlobalStore } from '@/stores/global';
import axios from 'axios';
import { InitService } from './init.service';


export class AuthService {
  async login(userForm: any) {
    const {data} = await axios.post('http://localhost:3006/api/sign/in', userForm);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('token', data.token);
    (new InitService()).initApp();
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    (useGlobalStore()).$patch({connectedUser: null});
  }

  getToken(): string|null {
    return localStorage.getItem('token');
  }

  logoutIfJwtTokenIsExpired() {
    const token = localStorage.getItem('token');
    if (token === null) {
      return;
    }
    const parsedToken = this.parseJwt(token);
    const expirationDate = new Date(parsedToken.exp * 1000)
    if (expirationDate >= (new Date())) {
      this.logout();
    }
  }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
}
