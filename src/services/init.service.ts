import type { UserModel } from '@/models/user.model';
import { useGlobalStore } from '@/stores/global';
import axios from 'axios';
import { UserService } from './user.service';


export class InitService {
  async initApp(): Promise<void> {
    (new UserService).loadUser()
      .then(() => this.loadGroups())
  }

  async loadGroups() {
    const results = await axios.get('http://localhost:3006/api/groups');
    const store = useGlobalStore();
    store.$patch({groups: results.data});
  }
}
