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
      <div class="settings">
        <div class="settings-title">
          <h2>Paramètres</h2>
        </div>
          <div class="btn btn-warning  disconnect" @click="disconnect()">
            Se déconnecter
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
          </div>
        <div class="settings-title">
          <h3>Changer votre mot de passe</h3>
          <br>
          <p>Pour renforcer la sécurité de votre mot de passe ajoutez :</p>
          <ul class="ps-3">
              <li>Au moins 7 caractères</li>
              <li>Avec des caractères spéciaux</li>
              <li>En ajoutant des chiffres</li>
          </ul>
        </div>
          <form class="form-password" @submit.prevent="onSubmit">
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
          <p>Cette action est irréversible !</p>
          <p>Après la suppression de votre compte, il vous sera impossible de récupérer vos données</p>

          <div class="btn btn-danger" @click="deleteMyAccount">
            Supprimer mon compte
          </div>
      </div>
    </div>
  </div>
</template>

<style>
.settings-title {
  margin: 2em 0px!important;
}

.disconnect {
  margin-bottom: 2em!important;
}

.form-password {
  height: 30vh;
}
.form-password .form-group {
  margin-bottom: 2em!important;
}
</style>
