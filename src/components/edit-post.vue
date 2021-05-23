<template>
  <div class="edit-post">
    <div class="edit-post__container" v-if="post">
      <router-link :to="{ name: 'posts' }">
        <button class="edit-post__back-btn">Cancel</button>
      </router-link>
      <button @click="deletePost">Удалить пост</button>
      <div class="edit-post__view-content" v-if="state === 'view'">
        <button @click="change('edit')">Редактировать</button>
        <h2>{{ post.title }}</h2>
        <p>{{ post.fullDescription }}</p>
      </div>
      <div class="edit-post__edit-form" v-if="state === 'edit'">
        <input type="text" v-model="post.title" />
        <textarea
          cols="30"
          rows="10"
          v-model="post.shortDescription"
        ></textarea>
        <textarea cols="30" rows="10" v-model="post.fullDescription"></textarea>
        <button @click="confirmChanges('view')">Подтвердить изменения</button>
      </div>
      <div class="edit-post__comment-form">
        <p>Commentsss</p>
      </div>
    </div>
    <h1 class="edit-post__not-found" v-else>Пост не найден</h1>
  </div>
</template>

<script>
export default {
  name: "edit-post",
  computed: {
    post() {
      return this.$store.getters.postById(+this.$route.params.id);
    },
  },
  /*mounted() {
    this.title = this.post.title;
  },*/
  data() {
    return {
      state: "view",
      editPost: null,
    };
  },
  methods: {
    confirmChanges(newState) {
      this.$store.dispatch("changePost", {
        id: this.post.id,
        title: this.post.title,
        shortDescription: this.post.shortDescription,
        fullDescription: this.post.fullDescription,
      });
      this.state = newState;
    },
    change(newState) {
      this.state = newState;
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.post.id);
      this.$router.push("/");
      //this.$emit("deletePost");
    },
  },
};
</script>

<style lang="scss">
</style>