<script lang="js">
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            email: '',
            name: '',
            surname: '',
            password: '',
            confirmPassword: '',
            cguAccepted: false
        }
    },
        methods: {
        async onSubmit() {
            let userForm = {
                email: this.email,
                name: this.name,
                surname: this.surname,
                password: this.password,
                confirmPassword: this.confirmPassword
            }
            try {
                const {data} = await this.axios.post('http://localhost:3006/api/sign/up', userForm);
                this.$router.push("login")
            } catch (e) {
                this.email = '';
                this.name = '';
                this.surname = '';
                this.password = '';
                this.confirmPassword = '';
            }
        }
    },
    computed: {
        isFormValid() {
          if (this.password !== this.confirmPassword) {
              return false;
          }
          return this.email && this.password && this.cguAccepted;
        },
    }
}
</script>

<template>
  <div id="background-overlay">
    <div class="bg-over">
      <div id="signup-page">
        <div class="card-effect">
          <form @submit.prevent="onSubmit">
            <div class="presentation">
              <img src="../assets/logo.svg" class="App-logo" alt="logo" />
              <p class="text-muted mb-4">Inscrivez vous pour continuer</p>
            </div>
            <div class="title-sign">
              <span>S'inscrire</span>
            </div>
            <div class="form-group mb-3">
              <label for="surname">Prénom</label>
              <input name="surname" class="form-control" type="text" placeholder="Entrez votre prénom"  aria-labelledby="Entrez votre prénom" v-model="surname" />
            </div>
            <div class="form-group mb-1">
              <label for="name">Nom</label>
              <input name="name" class="form-control" type="text" placeholder="Entrez votre nom" aria-labelledby="Entrez votre nom" v-model="name" />
            </div>
            <div class="form-group mb-3">
              <label for="email">Adresse Email</label>
              <input name="email" class="form-control" type="text" placeholder="Entrez votre email" aria-labelledby="Entrez votre email" v-model="email" />
            </div>
            <!-- <div class="form-group mb-3">
                <label for="confirmEmail">Confirmez votre adresse email</label>
                <input name="confirmEmail" class="form-control" type="text" placeholder="Entrez email" v-model="confirmEmail" />
                <p v-if="isEmailDirty && !isEmailValid" class="text-danger">Les emails ne correspondent pas !</p>
            </div> -->
            <div class="form-group mb-3">
                <label for="password">Mot de passe</label>
                <input name="password" class="form-control" type="password" placeholder="Entrez votre mot de passe" aria-labelledby="Entrez votre pot de passe" v-model="password" />
                <small id="passwordHelp" class="form-text text-muted">Ne partagez pas votre mot de passe à qui que ce soit</small>
            </div>
            <div class="form-group mb-3">
                <label for="confirmPassword">Confirmez Mot de passe</label>
                <input name="confirmPassword" class="form-control" type="password" placeholder="Entrez votre mot de passe" aria-labelledby="Confirmer votre mot de passe" v-model="confirmPassword" />
            </div>
            <div class="form-group mb-3">
                <label for="cguAccepted">Je confirme les CGU, lien.</label>
                <input type="checkbox" name="cguAccepted" aria-labelledby="Accpetez les CGU" v-model="cguAccepted"/>
            </div>
            <input :disabled="!isFormValid" type="submit" class="btn btn-primary m-1" aria-labelledby="S'inscire" value="S'inscrire" />
          </form>
          <div class="card-effect-footer">
            <router-link to="/login" class="redirect-sign">Se connecter</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
