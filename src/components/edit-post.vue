<template>
  <div class="edit-post">
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