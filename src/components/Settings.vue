<script lang="js">
const token = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export default {
  data() {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    disconnect: function() {
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
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
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 text-left">
          <div class="btn btn-warning" @click="disconnect()">
            Se déconnecter
          </div>
          <hr />
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
          <hr />
          <h3>Gérer mon compte</h3>
          <div class="btn btn-danger" @click="deleteMyAccount">
            Supprimer mon compte
          </div>
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
