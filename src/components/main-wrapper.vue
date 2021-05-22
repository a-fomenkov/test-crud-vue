<template>
  <div class="main-wrapper">
    <router-view></router-view>
    <!--<posts></posts>-->
  </div>
</template>

<script>
//import posts from "./posts";
//import addPost from "./add-post";

export default {
  name: "main-wrapper",
  /*components: {
    posts,
    //addPost,
  },*/
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
  width: 950px;
  margin: 0 auto;
}
</style>