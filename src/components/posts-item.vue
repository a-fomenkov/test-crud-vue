<template>
  <div class="posts-item">
    <h4>Title post</h4>
    <p>Short description</p>
    <p>Comments</p>
  </div>
</template>

<script>
export default {
  name: "posts-item",
};
</script>

<style lang="scss">
.posts-item {
  flex-basis: 100%;
  box-shadow: 0 0 5px #35495e;
  padding: 15px;
  margin: 15px;
  h4:hover {
    color: $hoverColor;
    transition: color 0.3s ease;
  }
}
</style>