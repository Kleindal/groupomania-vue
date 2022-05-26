<script lang="js">

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
      selectGroup: function(id) {
          this.selectedGroup = id;
          this.$emit('selectedGroup', this.selectedGroup);
      }
  }
}
</script>

<template>
    <div>
        <div class="list-group">
            <li v-bind="{ active: isActive }" v-for="group in groups" :key="group.id">
                <a href="#" @click="selectGroup(group.id)">
                    {{group.title}}
                </a>
            </li>
        </div>
    </div>
</template>

<style>
    .list-group {
        display: flex;
        list-style: none;
        max-height: 80vh;
        min-width: 180px!important;
        overflow-y: scroll;
    }
    .list-group li {

        height: 90px;
  
        padding: 1em;
        justify-content: space-between;
    }
  .list-group p {
    font: var(--font-m);
  }
  .peoples {
    font: var(--font-s);
  }
  .list-unstyled a {

  } 

  .mini-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }

    .mini-group-time {
        font: var(--font-s);
    }
  @media screen and (max-width: 1000px) {
      .mini-group img {
          display: hidden!important;
      }
      .mini-group-time {
          display: none;
      }
  }
</style>