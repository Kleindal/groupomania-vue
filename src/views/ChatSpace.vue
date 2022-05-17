<script>
import ListGroup from '../components/ListGroup.vue';
import MenuSideBar from '../components/MenuSideBar.vue';
import AsideContact from '../components/AsideContact.vue';
import MenuBarAside from '../components/MenuBarAside.vue';
import ChatMessage from '../components/ChatMessage.vue';
import MainChat from '../components/MainChat.vue';

export default {
  components: {
    AsideContact,
    ListGroup,
    MenuSideBar,
    MenuBarAside,
    ChatMessage,
    MainChat,
}
}
</script>

<template>
    <div>
      <menu-side-bar></menu-side-bar>
        <div class="chat-general" style="display:flex; flex-direction:row;">
          <!-- <menu-bar-aside></menu-bar-aside> -->
          <list-group></list-group>
          <chat-message></chat-message>
      </div>
    </div>
</template>

<style>

</style>