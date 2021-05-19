<template>
  <div class="main-wrapper">
    <p>{{ title }}</p>
    <posts></posts>
    <add-post></add-post>
  </div>
</template>

<script>
import posts from "./posts";
import addPost from "./add-post";

export default {
  name: "main-wrapper",
  components: {
    posts,
    addPost,
  },
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
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
}
</style>