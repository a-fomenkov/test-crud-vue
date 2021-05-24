<template>
  <div class="posts-item">
    <router-link :to="'/edit/' + post_data.id">
      <p class="posts-item__title">{{ post_data.title }}</p>
    </router-link>

    <p class="posts-item__short-desc">{{ post_data.shortDescription }}</p>
    <p class="posts-item__comment-count">
      Комментарии:
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
  methods: {},
};
</script>

<style lang="scss">
.posts-item {
  flex-basis: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 7px 2px #35495e81;
  margin: 15px 0;
  &__title {
    margin: 25px;
    &:hover {
      color: $hoverColor;
      transition: color 0.3s ease;
      cursor: pointer;
    }
  }
  &__short-desc {
    margin: 25px;
  }
  &__comment-count {
    margin: 15px;
  }
}
</style>