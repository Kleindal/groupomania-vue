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
  /* border: 2px solid red; */
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
  --font-md: 14px "Lato", "Arial", "Helvetica", sans-serif;
  --font-lg: 20px "Lato", "Arial", "Helvetica", sans-serif;
  --font-xl: bold 26px Lato, "Arial", "Helvetica", sans-serif;
  --font-title: bold 20px Lato, "Arial", "Helvetica", sans-serif;
  /*  */
}


body {
  font-family: Inter, Verdana, Geneva, Tahoma, sans-serif!important;
  width: auto;
}

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
div {
  position: relative;
}
.fix-footer {
  overflow-y: hidden;
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  text-align: center;
  background-position: bottom;
  background-repeat: repeat;
  color: var(--text-color2);
}

.App-logo {
  height: auto;
  width: 290px;
  fill: black;
  pointer-events: none;
  margin: 1em 0px;
}
.title-hype {
  text-transform: uppercase;
  line-height: 1.2em!important;
  font: var(--font-xl);
  margin: 30px 0;
  color: #333333;
}
.home-connect, #login-page, #signup-page, .presentation {
  display: flex;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  height: auto;
}
.home-connect, #login-page, #signup-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.connect-page {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}
.connect-page > div {
  padding: 10px;
  margin-bottom: 10px;
}

.signup a, .login a {
  font-weight: 700;
  color: white;
  background-color: var(--primary-button);
  font: var(--font-lg);
  border-radius: 25px;
  padding: var(--button-padding);
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
}

.signup a:hover, .login a:hover {
  transition-duration: 200ms;
  transition-property: background-color, border;
  transition-timing-function: ease-in-out;
  background-color: var(--secondary-button);
  color: white;
}

.nav-header {
  margin: 20px;
}

.file-name {
  cursor: pointer;
  padding: 0px 12px;
  width: max-content;
  background-color: var(--primary-button);
  color: white;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}


@media only screen and (max-width: 960px) {

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
}

@media only screen and (max-width: 768px) {
.card-post-about {
  margin-left: 0px;
  width: 100%!important;

}
}


</style>

