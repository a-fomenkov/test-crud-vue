<template>
  <div class="add-post">
    <button class="add-post__close-btn" @click="$emit('closeAddPost')">
      ✖️
    </button>
    <h2>Создание нового поста</h2>
    <div class="add-post__form form">
      <span>Введите название:</span>
      <input
        type="text"
        class="form__title"
        placeholder="Название"
        ref="title"
        :value="new_post.title"
        @input="updateData()"
      />
      <span>Введите краткое описание:</span>
      <textarea
        class="form__short-desc"
        placeholder="Краткое описание"
        ref="shortDescription"
        :value="new_post.shortDescription"
        @input="updateData()"
      ></textarea>
      <span>Введите полное описание:</span>
      <textarea
        class="form__long-desc"
        placeholder="Полное описание"
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
  box-shadow: 0 0 10px 10px #35495ea2;
  width: 870px;
  height: 700px;
  background-color: rgb(226, 226, 226);
  h2 {
    font-size: 30px;
    margin: 25px 0;
  }
  &__close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 5px;
    background-color: unset;
    border: unset;
    font-size: 16px;
    &:hover {
      background-color: #ff7373;
      box-shadow: 0 0 2px 2px #f8585883;
      border: unset;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #e46565;
      box-shadow: 0 0 2px 2px #c5464683;
      transition: all 0.3s ease;
    }
  }
  &__publish-btn {
    margin: 15px;
    background-color: #42b883;
    border: 1px solid #35495e6b;
    box-shadow: 1px 1px 2px #35495e81;
    color: #fff;
    width: 150px;
    height: 50px;
    font-size: 16px;
    padding: 5px;
    &:hover {
      background-color: #308860;
      box-shadow: 0 0 2px 2px #30886093;
      border: unset;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #266e4e;
      box-shadow: 0 0 2px 2px #276e4e93;
      transition: all 0.3s ease;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px;
  height: 540px;
  span {
    margin: 5px 10px;
    font-weight: 700;
    font-size: 16px;
    text-align: start;
  }
  &__title {
    margin: 7px;
    padding: 5px 10px;
    height: 35px;
    font-size: 20px;
    font-weight: 700;
    /*&:focus {
      background-color: rgba(177, 255, 219, 0.377);
      transition: background-color 0.3s ease;
    }*/
  }
  &__short-desc {
    margin: 7px;
    padding: 10px 10px 0 10px;
    text-align: justify;
    font-size: 18px;
    max-width: 804px;
    min-width: 804px;
    min-height: 135px;
    max-height: 135px;
    font-family: Avenir, sans-serif;
    /*&:focus {
      background-color: rgba(177, 255, 219, 0.377);
      transition: background-color 0.3s ease;
    }*/
  }
  &__long-desc {
    margin: 7px;
    padding: 10px 10px 0 10px;
    text-align: justify;
    font-size: 16px;
    max-width: 804px;
    min-width: 804px;
    min-height: 190px;
    max-height: 190px;
    font-family: Avenir, sans-serif;
    /*&:focus {
      background-color: rgba(177, 255, 219, 0.377);
      transition: background-color 0.3s ease;
    }*/
  }
}
</style>