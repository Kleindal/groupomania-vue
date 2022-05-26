<script>
import ListGroup from '../components/ListGroup.vue';
import MenuSideBar from '../components/MenuSideBar.vue';
import AsideContact from '../components/AsideContact.vue';
import MenuBarAside from '../components/MenuBarAside.vue';
import ChatMessage from '../components/ChatMessage.vue';
import MainChat from '../components/MainChat.vue';

const token = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export default {
  data() {
    return {
      selectedGroup: null,
    }
  },
  components: {
    AsideContact,
    ListGroup,
    MenuSideBar,
    MenuBarAside,
    ChatMessage,
    MainChat
  },
  async created() {
    const {data} = await this.axios.get('http://localhost:3006/api/users/profiles/contacts', config);
    this.users = data;
  },
  methods: {
    selectGroup: function(id) {
      this.selectedGroup = id;
    }
  }
}
</script>


<template>
  <div>
    <a href="/" class="btn btn-outline-secondary m-1">Deconnexion</a>
    <!-- <menu-side-bar></menu-side-bar> -->
    <sidebar></sidebar>
    <div class="chat-general" style="display:flex; flex-direction:row;">
      <menu-bar-aside></menu-bar-aside>
      <list-group @selectedGroup="selectGroup($event)"></list-group>
      <chat-message :users="users" :selectedGroup="selectedGroup"></chat-message>
    </div>
  </div>
</template>

<style>
</style>