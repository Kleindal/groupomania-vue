<script lang="js">
const token = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default {
  data() {
    return {
      data: null,
    }
  },
  props: {
    selectedGroup: null,
    post: null
  },
  created() {
    this.data = this.post;
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
      let postForm = {
          title: data.title,
          image_url: data.image_url,
          body: data.body,
          group_id: data.selectedGroup
      }
      console.log(postForm);

      const {data} = await this.axios.post('http://localhost:3006/api/groups/' + this.selectedGroup + '/posts', postForm, config);
      this.$router.push("")

      data.title = '';
      data.image_url = null;
      data.body = '';
  }
  },
  computed: {
    async isFormValid() {
        if (this.password !== this.confirmPassword) {
            return false;
        }
        return this.email && this.password && this.cguAccepted;
    },
}
}
</script>

<template>
    <div class="container margin-for-navbar">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 text-left">

        <div class="edit-profile">
          <h3>Créer / Éditer un post</h3>
        </div>
        <form @submit.prevent="onSubmit">
          <div>
            <div class="form-group mb-4">
              <label for="title">Titre</label>
              <input name="title" class="form-control" type="text" v-model="title" />
            </div>

            <div class="ml-2 col-sm-6">
              <div id="msg"></div>
              <form method="post" id="image-form">
                <input type="file" name="img[]" class="file" accept="image/*">
                <div class="input-group my-3">
                  <input type="text" class="form-control" disabled placeholder="Upload File" id="file">
                  <div class="input-group-append">
                    <button type="button" class="browse btn btn-primary" @click="browse()">Browse...</button>
                  </div>
                </div>
              </form>
            </div>

            <div class="ml-2 col-sm-6">
              <img src="https://placehold.it/80x80" id="preview" class="img-thumbnail">
            </div>
            <div class="form-group mb-4">
              <label for="body">Contenu</label>
              <textarea name="body" class="form-control" rows="3" v-model="body"></textarea>
            </div>
          </div>

          <input :disabled="!isFormValid" type="submit" class="btn btn-primary m-1" value="Publier / Mettre à jour" />
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.file {
  visibility: hidden;
  position: absolute;
}
</style>
