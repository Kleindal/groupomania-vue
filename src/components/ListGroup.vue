<script lang="js">
import { useGlobalStore } from '@/stores/global';
import { RouterLink } from 'vue-router';

const token = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default {
  data() {
    return {
      groups: [],
      selectedGroup: null
    }
  },
  async created() {
    const {data} = await this.axios.get('http://localhost:3006/api/groups', config);
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
  <div class="col-12 col-md-3 col-lg-2 text-center d-none d-md-block">
    <div class="list-group">
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
    padding-left: 20px;
  }
</style>
