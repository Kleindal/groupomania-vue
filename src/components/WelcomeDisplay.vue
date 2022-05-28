<script>
import ListGroup from './ListGroup.vue'

export default {
  components: {
    ListGroup
  }
}
</script>

<template>
  <div class="col-12 col-md-9 col-lg-10 text-muted text-center">
    <h5>Bienvenue !</h5>
    <h6>Cliquez sur un groupe pour lire les postes</h6>
    <div class="col-12 d-block d-md-none">
      <list-group></list-group>
    </div>
  </div>
</template>
