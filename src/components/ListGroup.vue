<script lang="js">
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      groups: [],
      selectedGroup: null
    }
  },
  async created() {
    const {data} = await this.axios.get('http://localhost:3006/api/groups');
    this.groups = data;
  },
  methods: {
    selectGroup: function(group) {
        this.selectedGroup = group;
        this.$emit('selectedGroup', this.selectedGroup);
    }
  }
}
</script>

<template>
  <div class="col-12 d-none d-lg-block">
    <div class="list-group text-center d-flex justify-content-start">
      <RouterLink v-for="group in groups" :key="group.id" :to="'/' + group.id">
        #{{group.title}}
      </RouterLink>
    </div>
  </div>
</template>

<style>
  .list-group {
    height: 100%;
    left: 0;
    position: fixed;
    padding: 20px!important;
  }

  .list-group a {
    text-align: left;
    padding: 1em;
    color: var(--third-color);
    font: var(--font-lg);
  }

  .list-group a:active, .list-group a:focus {
    background-color: var(--primary-color);
    color: white;
    border-radius: 10px;
    width: fit-content;
  }
</style>
