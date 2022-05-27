<script lang="js">
import { useGlobalStore } from '@/stores/global';

const token = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default {
  data() {
    return {
      selectedGroup: null,
      posts: [],
    }
  },
  async created() {
    this.selectedGroup = this.$route.params.id;
    await this.loadGroupPosts(this.$route.params.id);
  },
  watch: {
    $route (to, from){
      this.selectedGroup = to.params.id;
      this.loadGroupPosts(to.params.id);
    }
  },
  methods: {
    loadGroupPosts: async function(id) {
        const {data} = await this.axios.get('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts?order=desc', config);
        const globalStore = useGlobalStore();
        this.posts = [];
        data.forEach(post => {
            // Cherche l'auteur du message par rapport à l'author_id
            const author = globalStore.users.filter(user => user.id === post.created_by)[0];
            // Assigne le nom de l'author à une propriété author_name
            post.author_fullname = author.surname + ' ' + author.name;
            post.author_image_url = author.image_url;
            // Push le message dans le tableau messages
            this.posts.push(post);
        });
    },
    likeOrUnlikePost: async function(post) {
      if (!post.connected_user_has_liked) {
        await this.axios.post('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts/' + post.id + '/like', [], config);
        post.like_count++;
      } else {
        await this.axios.delete('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts/' + post.id + '/unlike', config);
        post.like_count--;
      }
      post.connected_user_has_liked = !post.connected_user_has_liked;
    },
    edit: function(post) {
      this.$router.push('/' + this.selectedGroup + '/edit-post/' + post.id);
    },
    async deletePost(post) {
      await this.axios.delete('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts/' + post.id, config);
      await this.loadGroupPosts(this.selectedGroup);
    }
  }
}
</script>

<template>
  <div v-if="posts.length" class="col-12 text-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-around" v-for="post in posts" :key="post.id">
          <div class="card-post-about">
            <div class="card post">
            <i class="bi bi-person-bounding-box"></i>
            <div class="card-header d-flex align-items-center justify-content-evenly">
              <div class="author">
                <img v-if="post.author_image_url" :src="post.author_image_url" alt="" />
                <svg v-else xmlns="http://www.w3.org/2000/svg"  width="50" height="50" fill="#FD2D01" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
              </div>
              <div class="text-center">
                <h5 class="card-title">{{ post.title }}</h5>
                <div class="text-muted">
                  {{ post.author_fullname }}
                  <div class="">
                    {{ new Date(post.created_at).toLocaleString() }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                {{ post.body }}
              </p>
              <div class="card-image">
                <img :src="post.image_url" alt="" />
              </div>
            </div>
            <div class="card-footer">
              <div class="comment text-center">
                <a class="btn btn-primary" @click="likeOrUnlikePost(post)" >
                  <svg v-if="post.connected_user_has_liked" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z" />
                  </svg>
                  {{ post.like_count }}
                </a>
                <div class="d-flex justify-content-end">
                <button @click="edit(post)" class="btn btn-primary m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
                </button>
                <button @click="deletePost(post)" class="btn btn-secondary m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
                </button>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-12 col-md-9 col-lg-10 text-center">
    <h5>Ce groupe semble vide...</h5>
    <h6>Démarrer un nouveau post ?</h6>
    <h6 class="btn btn-primary">
      <RouterLink style="color: white" :to="{ name: 'create-post', params: { selectedGroup }}">
      Créer
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
      </RouterLink>
    </h6>
  </div>
</template>

<style>

.author img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.card-post-about {
  margin-bottom: 3em;
  max-height: 800px;
  max-width: 90%;
}

.card-title {
  font: var(--font-title)!important;
  padding: 0px 15px 0px 15px;
  text-align: center;
}

.card-title {
  padding: 0px 15px 0px 15px;
  text-align: center;
}
.card-image {
  text-align: center;
  padding: 1em;
}
.card-image img {
  max-height: 600px;
  max-width: 90%;
  width: auto;
}
</style>
