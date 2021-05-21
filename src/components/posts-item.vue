<template>
  <div class="posts-item">
    <p class="posts-item__title">{{ post_data.title }}</p>
    <p class="posts-item__short-desc">{{ post_data.shortDescription }}</p>
    <p class="posts-item__comment-count">
      {{ post_data.comments.length }}
    </p>
  </div>
</template>

<script>
export default {
  name: "posts-item",
  props: {
    post_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.posts-item {
  flex-basis: 100%;
  box-shadow: 0 0 5px #35495e;
  padding: 15px;
  margin: 15px;
  &__title:hover {
    color: $hoverColor;
    transition: color 0.3s ease;
  }
}
</style>