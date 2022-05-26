<script lang="js">
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
            keepConnected: false
        }
    },
    methods: {
        async onSubmit() {
            let userForm = {
                email: this.email,
                password: this.password,
                keepConnected: this.keepConnected
            }
            try {
                const {data} = await this.axios.post('http://localhost:3006/api/sign/in', userForm);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('token', data.token);
                this.$router.push("chatspace")
            } catch (e) {
                this.email = '';
                this.password = '';
                this.keepConnected = false;
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
                <input name="email" class="form-control" type="text" placeholder="Entrez email" v-model="email" />
            </div>
            <div class="form-group mb-3">
                <label for="password">Mot de passe</label>
                <input name="password" class="form-control" type="text" placeholder="Entrez votre mot de passe" v-model="password" />
            </div>
            <div class="form-group mb-3">
                <label for="keepConnected">Rester connecté</label>
                <input type="checkbox" name="keepConnected" v-model="keepConnected"/>
            </div>
            <input type="submit" class="btn btn-primary m-1" value="Submit" />
        </form>
        <RouterLink to="/" class="btn btn-outline-secondary m-1">Retour</RouterLink>
    </div>
</template>