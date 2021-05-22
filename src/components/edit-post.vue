<template>
  <div class="edit-post">
    <!--<router-link :to="{ name: 'posts' }">
      <button class="edit-post__back-btn">Cancel</button>
    </router-link>-->

    <button @click="deletePost">Удалить пост</button>
  </div>
</template>

<script>
export default {
  name: "edit-post",

  methods: {
    deletePost() {
      this.$emit("deletePost");
    },
  },
};
</script>

<style lang="scss">
</style>