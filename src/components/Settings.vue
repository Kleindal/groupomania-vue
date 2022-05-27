<script lang="js">
import { AuthService } from '@/services/auth.service';

export default {
  data() {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    disconnect: function() {
      const authService = new AuthService();
      authService.logout();
      this.$router.push('/login');
    },
    async onSubmit() {
      await this.axios.patch('http://localhost:3006/api/users/me', {password: this.password}, config)
        .then(() => {
          this.password = '';
          this.confirmPassword = '';
          alert('Mot de passe mis à jour');
        })
    },
    async deleteMyAccount() {
      await this.axios.delete('http://localhost:3006/api/users/me', config);
      this.disconnect();
    }
  },
  computed: {
    isFormValid() {
        if (this.password !== this.confirmPassword) {
            return false;
        }
        return !!this.password;
    },
  }
}
</script>

<template>
  <div class="col-12 col-md-9 col-lg-10 text-left">
    <div class="container text-left">
      <div class="row settings">
        <h2>Settings</h2>
          <div class="btn btn-secondary disconnect" @click="disconnect()">
            Se déconnecter
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
          </div>
          <div class="edit-profile">
            <h3>Changer votre mot de passe</h3>
          </div>
          <form @submit.prevent="onSubmit">
            <div>
              <div class="form-group mb-4">
                <label for="password">Nouveau mot de passe</label>
                <input
                  name="password"
                  class="form-control"
                  type="password"
                  placeholder="Entrez votre nouveau mot de passe"
                  v-model="password"
                />
              </div>
              <div class="form-group mb-4">
                <label for="confirmPassword"
                  >Confirmez nouveau mot de passe</label
                >
                <input
                  name="confirmPassword"
                  class="form-control"
                  type="password"
                  placeholder="Entrez votre nouveau mot de passe"
                  v-model="confirmPassword"
                />
              </div>
            </div>

            <input
              :disabled="!isFormValid"
              type="submit"
              class="btn btn-primary m-1"
              value="Submit"
            />
          </form>
          <h3>Gérer mon compte</h3>
          <div class="btn btn-danger" @click="deleteMyAccount">
            Supprimer mon compte
          </div>

      </div>
    </div>
  </div>
</template>

<style>
.edit-profile {
  margin-bottom: 2em;
}
</style>
