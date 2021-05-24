<template>
  <div class="add-post">
    <h3>Создание новой записи</h3>
    <div class="add-post__form form">
      <input
        type="text"
        class="form__title"
        placeholder="Введите название"
        ref="title"
        :value="new_post.title"
        @input="updateData()"
      />
      <textarea
        class="form__short-desc"
        cols="30"
        rows="10"
        placeholder="Введите краткое описание"
        ref="shortDescription"
        :value="new_post.shortDescription"
        @input="updateData()"
      ></textarea>
      <textarea
        class="form__long-desc"
        cols="30"
        rows="10"
        placeholder="Введите полное описание"
        ref="fullDescription"
        :value="new_post.fullDescription"
        @input="updateData()"
      ></textarea>
    </div>
    <button class="add-post__publish-btn" @click="$emit('publishPost')">
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
        id: Date.now(),
        title: this.$refs.title.value,
        shortDescription: this.$refs.shortDescription.value,
        fullDescription: this.$refs.fullDescription.value,
        comments: [
          {
            id: Date.now(),
            author: "",
            text: "",
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss">
.add-post {
  position: fixed;
  padding: 25px 0;
  box-shadow: 0 0 10px 7px $hoverColor;
  width: 870px;
  height: 500px;
  background-color: aquamarine;
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 15px;
  }
  &__publish-btn {
    margin: 30px 0 0 0;
  }
}
.form {
  &__title {
    margin: 7px;
  }
  &__short-desc {
    margin: 7px;
  }
  &__long-desc {
    margin: 7px;
  }
}
</style>