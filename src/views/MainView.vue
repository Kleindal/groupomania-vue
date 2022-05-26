<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div class="container col-md-8 col-lg-6 col-xl-5">
    <div class="home-connect">
      <div class="presentation">
        <img src="../assets/logo.svg" class="App-logo" alt="logo" />
      </div>
      <div class="title-hype">
          <div>Connectez-vous dès</div>
          <div>à présent pour </div>
          <div>participer à l'espace</div>
          <div>discussions</div>
      </div>
      <nav class="connect-page">
          <div class="login">
            <RouterLink to="/login">Connexion</RouterLink>
          </div>
          <div class="signup">
            <RouterLink to="/signup">S'inscrire</RouterLink>
          </div>
          <div class="chatspace">
            <RouterLink to="/chatspace">- interface -</RouterLink>
          </div>
      </nav>
    </div>
    <div class="fix-footer">
      <footer>
        <p>@Groupomania</p>
      </footer>
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
