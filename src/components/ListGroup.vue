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
  <div class="col-12 d-none d-md-block">
    <div class="list-group text-center">
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
    padding: 15px!important;
    width: 200px;
  }

  .list-group a {
    text-align: left;
    padding: 1em;
    margin: 10px;
    color: var(--third-color);
    font: var(--font-lg);
    border-left: 1px solid var(--third-color)!important;
  }

  .list-group a:active, .list-group a:focus {
    border-left: 10px solid var(--primary-color)!important;
    color: var(--primary-color);
  }
</style>
