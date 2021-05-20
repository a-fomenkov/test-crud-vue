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
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Title1",
          shortDescription: "Abc",
          fullDescription: "Abcdef",
        },
        {
          id: 2,
          title: "Title2",
          shortDescription: "Abc",
          fullDescription: "Abcdef",
        },
      ],
      newPost: {
        title: "",
        shortDescription: "",
        fullDescription: "",
      },
    };
  },
  methods: {},
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