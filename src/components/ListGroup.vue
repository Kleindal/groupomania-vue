<script lang="js">
import { useGlobalStore } from '@/stores/global';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      groups: [],
      selectedGroup: null
    }
  },
  async created() {
    this.groups = (useGlobalStore()).groups;
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
  <div class="list-group text-center">
    <RouterLink
      v-for="group in groups"
      :key="group.id" :to="'/' + group.id"
    >
      #{{group.title}}
    </RouterLink>
  </div>
</template>

<style>
  .list-group {
    height: 100%;
    left: 0;
    position: fixed;
    padding: 15px!important;
    width: 200px;
    z-index: 1!important;
  }

  .list-group a {
    text-align: left;
    padding: 1em;
    margin: 10px;
    color: var(--third-color);
    font: var(--font-lg);
    border-left: 1px solid var(--third-color)!important;
  }

  .list-group > .router-link-active, .list-group a:hover {
    border-left: 10px solid var(--primary-color)!important;
    color: var(--primary-color);
  }
</style>
