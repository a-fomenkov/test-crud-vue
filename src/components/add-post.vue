<template>
  <div class="add-post">
    <h4>Создание новой записи</h4>
    <div class="add-post__form">
      <input
        type="text"
        class="add-post__title"
        placeholder="Введите название"
        ref="title"
        :value="new_post.title"
        @input="updateData()"
      />
      <textarea
        class="add-post__short-description"
        cols="30"
        rows="10"
        placeholder="Введите краткое описание"
        ref="shortDescription"
        :value="new_post.shortDescription"
        @input="updateData()"
      ></textarea>
      <textarea
        class="add-post__long-description"
        cols="30"
        rows="10"
        placeholder="Введите полное описание"
        ref="fullDescription"
        :value="new_post.fullDescription"
        @input="updateData()"
      ></textarea>
    </div>
    <button class="add-post__publish-btn" @click="$emit('changeState')">
      Опубликовать
    </button>
  </div>
</template>

<script>
export default {
  name: "add-post",
  props: {
    new_post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    updateData() {
      this.$emit("input", {
        title: this.$refs.title.value,
        shortDescription: this.$refs.shortDescription.value,
        fullDescription: this.$refs.fullDescription.value,
        comments: [
          {
            commentAuthor: "",
            commentText: "",
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss">
</style>