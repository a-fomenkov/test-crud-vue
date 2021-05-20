<template>
  <div class="add-post">
    <h4>Создание новой записи</h4>
    <div class="add-post__form">
      <input
        type="text"
        class="add-post__title"
        placeholder="Введите название"
        required
        v-model="newPost.title"
      />
      <textarea
        class="add-post__short-description"
        cols="30"
        rows="10"
        placeholder="Введите краткое описание"
        required
        v-model="newPost.shortDescription"
      ></textarea>
      <textarea
        class="add-post__long-description"
        cols="30"
        rows="10"
        placeholder="Введите полное описание"
        required
        v-model="newPost.fullDescription"
      ></textarea>
    </div>
    <button class="add-post__publish-btn">Опубликовать</button>
  </div>
</template>

<script>
export default {
  name: "add-post",
  data: {
    posts: [],
    newPost: {
      title: "",
      shortDescription: "",
      fullDescription: "",
    },
  },
  methods: {},
};
</script>

<style lang="scss">
</style>