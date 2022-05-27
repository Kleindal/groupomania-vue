<script lang="js">
import { AuthService } from '@/services/auth.service';
import { RouterLink } from 'vue-router';


// axios({
//   method: 'post',
//   url: '/sign/in',
//   data: {
//     name: 'Fred',
//     surname: 'Flintstone'
//   }
// });

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
      async onSubmit() {
        let userForm = {
          email: this.email,
          password: this.password,
        }
        try {
          await (new AuthService()).login(userForm);
          this.$router.push('/')
        } catch (e) {
          this.password = '';
          alert('Mauvais identifiants');
        }
      }
    }
}
</script>

<template>
  <div id="login-page">
    <form @submit.prevent="onSubmit">
      <div class="presentation">
        <img src="../assets/logo.svg" class="App-logo" alt="logo" />
        <p class="text-muted mb-4">Connectez vous pour continuer</p>
      </div>
      <div class="title-hype wslide">
        <div>
          <span>Connexion</span>
        </div>
      </div>
      <div class="form-group mb-3">
        <label for="email">Adresse Email</label>
        <input
          name="email"
          class="form-control"
          type="text"
          placeholder="Entrez email"
          v-model="email"
        />
      </div>
      <div class="form-group mb-3">
        <label for="password">Mot de passe</label>
        <input
          name="password"
          class="form-control"
          type="password"
          placeholder="Entrez votre mot de passe"
          v-model="password"
        />
      </div>
      <input
        :disabled="!email || !password"
        type="submit"
        class="btn btn-primary m-1"
        value="Submit"
      />
    </form>
    <router-link to="/signup" class="m-1">S'inscrire</router-link>
  </div>
</template>
