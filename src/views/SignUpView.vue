<script lang="js">
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            cguAccepted: false
        }
    },
    methods: {
        onSubmit() {
            let userForm = {
                email: this.email,
                confirmEmail: this.confirmEmail,
                password: this.password,
                confirmPassword: this.confirmPassword,
                cguAccepted: this.cguAccepted
            }
            console.log(userForm);
        }
    },
    computed: {
        isFormValid() {
            if (!this.isEmailValid) {
                return false;
            }
            if (this.password !== this.confirmPassword) {
                return false;
            }
            return this.email && this.password && this.cguAccepted;
        },
        isEmailValid() {
            return this.confirmEmail === this.email;
        },
        isEmailDirty() {
            return this.email !== '' && this.confirmEmail !== '';
        },
    }
}
</script>

<template>
 <div id="signup-page">
       <form @submit.prevent="onSubmit">
            <div class="title-hype wslide">
            <div>
                <span>S'inscrire</span>
            </div>
            </div>
            <div class="form-group mb-3">
                <label for="email">Adresse Email</label>
                <input name="email" class="form-control" type="text" placeholder="Entrez email" v-model="email" />
            </div>
            <div class="form-group mb-3">
                <label for="confirmEmail">Confirmez votre adresse email</label>
                <input name="confirmEmail" class="form-control" type="text" placeholder="Entrez email" v-model="confirmEmail" />
                <p v-if="isEmailDirty && !isEmailValid" class="text-danger">Les emails ne correspondent pas !</p>
            </div>
            <div class="form-group mb-3">
                <label for="password">Mot de passe</label>
                <input name="password" class="form-control" type="text" placeholder="Entrez votre mot de passe" v-model="password" />
                <small id="passwordHelp" class="form-text text-muted">Ne partagez pas votre mot de passe à qui que ce soit</small>
            </div>
            <div class="form-group mb-3">
                <label for="confirmPassword">Confirmez Mot de passe</label>
                <input name="confirmPassword" class="form-control" type="text" placeholder="Entrez votre mot de passe" v-model="confirmPassword" />
            </div>
            <div class="form-group mb-3">
                <label for="cguAccepted">Je confirme les CGU, lien.</label>
                <input type="checkbox" name="cguAccepted" v-model="cguAccepted"/>
            </div>
            <input :disabled="!isFormValid" type="submit" class="btn btn-primary m-1" value="Submit" />
        </form>
        <RouterLink to="/" class="btn btn-outline-secondary m-1">Retour</RouterLink>
    </div>
</template>