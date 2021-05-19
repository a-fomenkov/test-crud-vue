<template>
  <div class="posts">
    <h1>Blog</h1>
    <div class="posts__list">
      <posts-item></posts-item>
    </div>
  </div>
</template>

<script>
import postsItem from "./posts-item";

export default {
  name: "posts",
  components: {
    postsItem,
  },
};
</script>

<style lang="scss">
.posts {
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>