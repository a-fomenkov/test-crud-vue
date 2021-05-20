<template>
  <div class="main-wrapper">
    <button class="main-wrapper__add-post-btn">Add post</button>
    <posts></posts>
  </div>
</template>

<script>
import posts from "./posts";
//import addPost from "./add-post";

export default {
  name: "main-wrapper",
  components: {
    posts,
    //addPost,
  },
  props: {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.main-wrapper {
  display: flex; //под вопросом
  justify-content: center; //под вопросом
  flex-direction: column; //под вопросом
  max-width: 950px;
  margin: 0 auto;
  &__add-post-btn {
    width: 100px;
    margin: 0 auto;
  }
}
</style>