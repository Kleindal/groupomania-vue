<script>
import ListGroup from '../components/ListGroup.vue';

export default {
  components: {
    ListGroup,
  }
}

</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


  <div class="nav nav-bar flex-column justify-content-evenly align-content-around col-sm-1">
    <a class="navicons" href="#nav-groups">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
      </svg>
    </a> 
    <a class="navicons" href="#nav-contacts">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-half" viewBox="0 0 16 16">
        <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z"/>
      </svg>
    </a>
    <a class="navicons" href="#nav-profile">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>
    </a>
  </div>
  <div class="tab flex-column col-sm-3">
    <div class="navitem" id="nav-groups">
      <h3>Groups</h3>
    </div>
    <div class="navitem" id="nav-contacts">
      <h3>Content to Link 2</h3>
      <h4>Great success!</h4>
    </div>
    <div class="navitem" id="nav-profile">
      <h3>Content to Link 3</h3>
      <p>Yeah!</p>
    </div>
  </div>
</template>

<style>
@import "../assets/template.css";

  .tab .navitem {
    display: none;
  }

  .tab .navitem:target {
    display: block;
  }

  .navicons svg {
    height: 30px;
    width: 30px;
  }
</style>
