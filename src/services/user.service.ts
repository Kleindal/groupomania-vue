import type { UserModel } from '@/models/user.model';
import { useGlobalStore } from '@/stores/global';
import axios from 'axios';


export class UserService {
  async loadUser(): Promise<void> {
    const meResponse = await axios.get('http://localhost:3006/api/users/me');
    const store = useGlobalStore();
    store.$patch({connectedUser: meResponse.data});
    const usersResponse = await axios.get('http://localhost:3006/api/users');
    store.$patch({users: usersResponse.data});
  }

  getUser(): UserModel|null {
    return (useGlobalStore()).connectedUser;
  }
}
