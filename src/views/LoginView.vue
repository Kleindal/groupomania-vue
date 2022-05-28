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
      },

    validateEmail(email) {
      if (!email) return 'L\'email est requis';
      const isValidEmail = /^\S+@\S+\.\S+$/g;
      if (!isValidEmail.test(email)) {
        return 'Email incorrect';
      }
      return '';
    },

    validateName(name) {
      if (!name) return 'Le nom est requis';
      const isValidName = /^[a-zA-Z\-]{2,}$/g;
      if (!isValidName.test(name)) {
        return 'Saisie incorrecte';
      }
      return '';
    }
    }
}
</script>

<template>
  <div id="background-overlay">
    <div class="bg-over">
      <div id="login-page">
        <div class="card-effect">
        <form @submit.prevent="onSubmit">
          <div class="presentation">
            <img src="../assets/logo.svg" class="App-logo" alt="logo" />
            <p class="text-muted mb-4">Connectez vous pour continuer</p>
          </div>
          <div class="title-sign">
            <span>Connexion</span>
          </div>
          <div class="form-group mb-3" v-if="validateEmail">
            <label for="email">Adresse Email</label>
            <input name="email" class="form-control" type="text" placeholder="Entrez email" aria-labelledby="Entrez votre email" v-model="email" />
          </div>
          <div class="form-group mb-3">
            <label for="password">Mot de passe</label>
              <input name="password" class="form-control" type="password" placeholder="Entrez votre mot de passe" aria-labelledby="Entrez votre mot de passe" v-model="password" />
          </div>
          <input :disabled="!email || !password" type="submit" class="btn btn-primary" aria-labelledby="Se connecter" value="Se connecter" />
        </form>
        <div class="card-effect-footer">
          Pas encore de compte ?
          <router-link class="redirect-sign" to="/signup">S'inscrire</router-link>
        </div>
        </div>
      </div>

    </div>
  </div>
</template>
