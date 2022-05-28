<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<RouterView />

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');


* {
  box-sizing: border-box;
}
ul {
  padding: 0px!important;
}

a:link {
  text-decoration: none;
}

:root {
  --primary-color: #FD2D01;
  --secondary-color: #FFD7D7;
  --third-color: #4E5166;
  --contrast: #25252510;

  --primary-bg: #fff;
  --secondary-bg: #333333;

  --status-color: #14c414;
  --invalid-color: #b61010;

  --text-color1: #fff;
  --text-color2: #252525;
  --text-color3: #4bc588;

  /* buttons */
  --button-padding: 10px 20px;
  --button-font-color: #fff;
  --primary-button: #4639f7;
  --secondary-button: #3975f7;

  /* font */
  --font-s: 12px "Lato", "Arial", "Helvetica", sans-serif;
  --font-md: 17px "Lato", "Arial", "Helvetica", sans-serif;
  --font-lg: 22px "Lato", "Arial", "Helvetica", sans-serif;
  --font-xl: bold 26px Lato, "Arial", "Helvetica", sans-serif;
  --font-title: bold 22px Lato, "Arial", "Helvetica", sans-serif;
  /*  */
}

body {
  font-family: Lato, Inter, Verdana, Tahoma, sans-serif!important;
  width: auto;
  min-width: 360px!important;
}
div {
  font-size: 17px!important;
}
/* BUTTONS STYLE */
.btn-primary {
  background-color: var(--primary-color)!important;
  border: none!important;
}
.btn-secondary {
  background-color: var(--third-color)!important;
  border: none!important;
}
.btn-primary, .btn-secondary {
  width: fit-content!important;
}

/* NAVBAR HOME STYLE */
.navbar {
  /* border-bottom: 1px solid #b1b1b1; */
  padding: 20px 0!important;
  box-shadow: 1px 10px 25px #c5c5c5ce;
}
.offcanvas-body li {
  font: var(--font-lg);
  margin: 20px 30px 30px;
}
.groupomania-logo {
  width: 20px;
}
.icons-nav svg {
  margin: 0px 25px;
  height: 35px;
  width: 35px;
  color: var(--third-color);
  padding: 2px;
}
.icons-nav svg:hover {
  margin-bottom: 2px;
  padding: 0px;
}
.adaptative {
    margin-top: 7em;
    max-width: 800px!important;
}

/* LOGIN AND SIGN STYLE */
.App-logo {
  height: auto;
  width: 290px;
  fill: black;
  pointer-events: none;
  margin: 1em 0px;
}
.title-sign {
  text-transform: uppercase;
  line-height: 1.2em!important;
  font: var(--font-xl);
  margin: 1em 0px 2em;
  color: #333333;
}
#login-page, #signup-page, .presentation {
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: auto;
  height: auto;
}
#login-page, #signup-page {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
form .form-group label {
  color: var(--third-color);
  font: var(--font-md);
  font-weight: bold;
}
form .form-group {
  margin-bottom: 1em!important;
  font: var(--font-md);
  line-height: 2em;
}
form .btn-primary {
  width: 100%!important;
}
.redirect-sign {
  margin-top: 1em;
  border-bottom: 1px solid;
}
/* BACKGROUND LOGIN & SIGNUP */
.card-effect {
  background-color: white;
  border-radius: 15px;
  height: auto;
  width: auto;
  margin: 3em;
  padding: 3em;
  box-shadow: 1px 15px 50px rgba(222, 222, 222, 0.805);
}
.card-effect-footer {
  margin: 2em 0 0em 0!important;
  color: var(--third-color);
}
#background-overlay {
    background-image: url('https://img.freepik.com/free-vector/cut-out-paper-design-style-gray-abstract-background-gray-papercut-background-presentation-cover-banner-website-template-vector-illustration_87521-3904.jpg?w=1480&t=st=1653731936~exp=1653732536~hmac=bbe5087cb9f16daecca14323a4b69da1f442b2dc28470e1cfa3f44926229541a')!important;
    width: 100vw;
    height: 100vh;
    background-size: cover;
}
.bg-over {
  background-image:
  linear-gradient(to bottom, #ffffffef, rgba(227, 227, 227, 0.851));
  width: 100vw;
  height: 100vh;
  background-size: cover;
  color: white;
  padding: 20px;
}

/* LIST POST */
.group-title {
  color: var(--primary-color);
  text-align: center;
  margin: 1em 0px 2em 0px!important;
}
/* RESPONSIVES MEDIA QUERIES */
@media only screen and (max-width: 768px) {
.card-post-about {
  margin-left: 0px;
  width: 100%!important;
}
}

@media only screen and (max-width: 600px) {
  .card {
    min-width: 320px!important;
    margin: 0;
  }
  .card-header .author {
    display: none!important;
  }
  .card-title {
    text-align: left!important;
  }
  /* .card-image img {
    min-width: 300px!important;
  } */
  .comment button {
    display: flex;
    align-content: center;
  }
  .card-effect {
    border-radius: 0;
    height: 100vh;
    width: 100vw;
  }
}

@media only screen and (max-width: 360px) {
  .group-title {
    text-align: center;
  }
  :root {
    --font-md: 20px;
  }
}

</style>

