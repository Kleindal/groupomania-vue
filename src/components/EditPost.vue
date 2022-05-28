<script lang="js">
const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    }
};

export default {
  data() {
    return {
      form: { title: '', body: '', image_url: null },
      selectedGroup: null,
      postId: null,
      editionMode: false
    }
  },
  async created() {
    this.selectedGroup = this.$route.params.id;
    if (this.$route.params.postId) {
      const postId = this.$route.params.postId;
      const {data} = await this.axios.get('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts/' + postId, config);
      const post = data;
      this.postId = post.id;
      this.form.title = post.title;
      this.form.body = post.body;
      this.form.image_url = post.image_url;
      this.editionMode = true;
    }
  },
  mounted() {
    document.querySelector('input[type="file"]').onchange = function(e) {
    var fileName = e.target.files[0].name;
    document.querySelector("#file").value = fileName;

    var reader = new FileReader();
    reader.onload = function(e) {
      // get loaded data and render thumbnail.
      document.getElementById("preview").src = e.target.result;
    };
    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  };
  },
  methods: {
    browse: function() {
      var file = document.querySelector('.file');
      file.click();
    },
    async onSubmit() {
      var file = document.querySelector('.file');
      let formData = new FormData();
      if (file.files.length) {
        formData.append("file", file.files.item(0));
      }
      formData.append("title", this.form.title);
      formData.append("body", this.form.body);
      formData.append("group_id", this.selectedGroup);

      if (this.editionMode) {
        await this.axios.patch('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts/' + this.postId, formData, config);
      } else {
        await this.axios.post('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts', formData, config);
      }
      this.$router.push('/' + this.selectedGroup)

  }
  },
  computed: {
    isFormValid() {
      return this.form.title && this.form.body;
    },
}
}
</script>

<template>
<!-- container-fluid / adaptative
      row.

-->

  <div class="container-fluid col-10 justify-content-start">
    <div class="edit-post">
    <div class="row">
        <div class="edit-post-style">
          <h3 v-if="editionMode">Éditer un post</h3>
          <h3 v-else>Créer un post</h3>
        </div>
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
          <div>
            <label for="title">Titre</label>
            <input name="title" class="form-control" type="text" v-model="form.title" />
            <div id="msg"></div>
            <form method="post" id="image-form">
              <input type="file" name="img[]" class="file" accept="image/*" />
              <div class="input-group my-3"><input type="text" class="form-control" disabled placeholder="Upload File" id="file" />
                <div class="input-group-append"><button type="button" class="browse btn btn-primary" @click="browse()" >Browse... </button></div>
              </div>
            </form>
            <img :src="form.image_url" id="preview" class="img-thumbnail" />
            <div class="mb-4">
              <label for="body">Contenu</label>
              <textarea name="body" class="form-control" rows="3" v-model="form.body"></textarea>
              </div>
            </div>
            <input v-if="editionMode" :disabled="!isFormValid" type="submit" class="btn btn-primary m-1" value="Mettre à jour" />
            <input v-else :disabled="!isFormValid" type="submit" class="btn btn-primary m-1" value="Publier" />
          </form>
      </div>
    </div>
  </div>
</template>

<style>

.edit-post {
  max-width: 600px!important;
}

.edit-post-style {
  margin-bottom: 40px;
}

.file {
  visibility: hidden;
  position: absolute;
}
</style>
