<template>
  <div class="edit-post">
    <div class="edit-post__container" v-if="post">
      <div class="edit-post__navbar">
        <button class="edit-post__delete-post-btn" @click="deletePost">
          Удалить пост
        </button>
        <router-link :to="{ name: 'posts' }">
          <button class="edit-post__back-btn">✖️</button>
        </router-link>
      </div>

      <div class="edit-post__view-content" v-if="state === 'view'">
        <h2>{{ post.title }}</h2>
        <p>{{ post.fullDescription }}</p>
        <button class="edit-post__edit-btn" @click="change('edit')">
          Редактировать
        </button>
      </div>
      <div class="edit-post__edit-form edit-form" v-if="state === 'edit'">
        <span>Название:</span>
        <input class="edit-form__title" type="text" v-model="post.title" />
        <span>Краткое описание:</span>
        <textarea
          class="edit-form__short-desc"
          v-model="post.shortDescription"
        ></textarea>
        <span>Полное описание:</span>
        <textarea
          class="edit-form__full-desc"
          v-model="post.fullDescription"
        ></textarea>
        <button class="edit-form__confirm-btn" @click="confirmChanges('view')">
          Подтвердить изменения
        </button>
      </div>
      <div class="edit-post__comments comments">
        <p class="comments__title">Комментарии:</p>
        <div class="comments__add-form">
          <input
            type="text"
            class="comments__author"
            placeholder="Введите ваше имя"
            v-model="newComment.author"
          />
          <textarea
            class="comments__text"
            placeholder="Введите текст комментария"
            v-model="newComment.text"
          ></textarea>
          <button class="comments__add-btn" @click="addComment()">
            Оставить комментарий
          </button>
        </div>
        <div class="comments__view-container">
          <div
            class="comments__list"
            v-for="comment in post.comments"
            :key="comment.id"
          >
            <p>
              <span
                ><big
                  ><b>{{ comment.author }}</b></big
                ></span
              >
              <br /><br />
              {{ comment.text }}
            </p>
            <button
              class="comments__delete-btn"
              @click="deleteComment(comment)"
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
    <h1 class="edit-post__not-found" v-else>Пост не найден</h1>
  </div>
</template>

<script>
export default {
  name: "edit-post",
  computed: {
    post() {
      return this.$store.getters.postById(+this.$route.params.id);
    },
  },
  data() {
    return {
      state: "view",
      newComment: {
        id: Date.now(),
        author: "",
        text: "",
      },
    };
  },
  methods: {
    confirmChanges(newState) {
      this.$store.commit("changePost", {
        id: this.post.id,
        title: this.post.title,
        shortDescription: this.post.shortDescription,
        fullDescription: this.post.fullDescription,
      });
      this.state = newState;
    },
    change(newState) {
      this.state = newState;
    },
    deletePost() {
      this.$store.commit("deletePost", this.post.id);
      this.$router.push("/");
    },
    addComment() {
      if (!this.newComment.author || !this.newComment.text) return;
      this.$store.commit("addComment", {
        id: this.post.id,
        comments: [...this.post.comments, this.newComment],
      });
      this.newComment = {
        id: Date.now(),
        author: "",
        text: "",
      };
    },
    deleteComment(comment) {
      this.$store.commit("deleteComment", { id: this.post.id, comment });
    },
  },
};
</script>

<style lang="scss">
.edit-post {
  &__navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__container {
    margin: 0 40px;
    display: flex;
    flex-direction: column;
  }
  &__back-btn {
    font-size: 15px;
    padding: 5px 5px;
    border: 1px solid #18497c;
    background-color: #35495e;
    color: #fff;
    &:hover {
      background-color: #3378c2;
      box-shadow: 0 0 2px 2px #3378c2be;
      border: 1px solid #3378c2;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #1f66b1;
      box-shadow: 0 0 2px 2px #2168b383;
      transition: all 0.3s ease;
    }
  }
  &__delete-post-btn {
    font-size: 16px;
    margin: 0 40px 0 0;
    padding: 6px 10px;
    background-color: #d83c3c;
    border: 1px solid #18497c;
    font-size: 16px;
    color: #fff;
    &:hover {
      background-color: #fa4f4f;
      border: 1px solid #ce4040;
      box-shadow: 1px 1px 2px #ce404081;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #e46565;
      transition: all 0.3s ease;
    }
  }
  &__view-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      color: #000;
      font-size: 28px;
      margin: 0 0 25px 0;
    }
    p {
      text-align: justify;
      white-space: pre-wrap;
      margin: 15px 0;
    }
  }
  &__edit-btn {
    margin: 0 0 15px 0;
    font-size: 14px;
    padding: 5px 10px;
    border: 1px solid #18497c;
    background-color: #35495e;
    color: #fff;
    &:hover {
      background-color: #2568af;
      box-shadow: 1px 1px 2px #2568af81;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #18497c;
      transition: all 0.3s ease;
    }
  }
}
.edit-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__title {
    margin: 5px 0 15px 0;
    padding: 5px 10px;
    height: 35px;
    font-size: 28px;
    font-weight: 700;
  }
  &__short-desc {
    margin: 5px 0 15px 0;
    padding: 10px 10px 0 10px;
    text-align: justify;
    font-size: 18px;
    max-width: 848px;
    min-width: 848px;
    min-height: 135px;
    max-height: 135px;
    font-family: Avenir, sans-serif;
  }
  &__full-desc {
    margin: 5px 0 0 0;
    padding: 10px 10px 0 10px;
    text-align: justify;
    font-size: 16px;
    max-width: 848px;
    min-width: 848px;
    min-height: 400px;
    max-height: 400px;
    font-family: Avenir, sans-serif;
  }
  &__confirm-btn {
    margin: 15px 0 15px 0;
    font-size: 14px;
    padding: 5px 10px;
    border: 1px solid #18497c;
    background-color: #2e855e;
    color: #fff;
    &:hover {
      background-color: #42b883;
      box-shadow: 1px 1px 2px #2568af81;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #1b8052;
      transition: all 0.3s ease;
    }
  }
}
.comments {
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  border-top: 2px solid rgba(0, 0, 0, 0.397);
  &__add-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0px;
    padding: 0 40px;
  }
  &__author {
    margin: 10px 0;
    padding: 5px 5px;
    height: 20px;
    width: 300px;
    font-size: 18px;
  }
  &__text {
    padding: 7px 7px 0 7px;
    font-size: 16px;
    max-width: 774px;
    min-width: 774px;
    min-height: 120px;
    max-height: 120px;
    font-family: Avenir, sans-serif;
  }
  &__add-btn {
    margin: 10px 0 0 0;
    padding: 5px 10px;
    border: unset;
    background-color: #35495e;
    box-shadow: 1px 1px 2px #35495e81;
    color: #fff;
    font-size: 16px;
    &:hover {
      background-color: #2568af;
      box-shadow: 1px 1px 2px #2568af81;
      border: unset;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #18497c;
      transition: all 0.3s ease;
    }
  }
  &__view-container {
    display: flex;
    flex-direction: column;
    margin: 20px 40px;
  }
  &__title {
    font-size: 20px;
    color: #000;
    margin: 15px 0 0 0;
    font-weight: 700;
    text-align: start;
  }
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0 0 15px 0;
    p {
      text-align: start;
      font-size: 16px;
      margin: 10px 0;
      //text-align: justify;
      white-space: pre-line;
      span {
        border-bottom: 2px solid #000;
      }
    }
  }
  &__delete-btn {
    padding: 3px;
    background-color: unset;
    border: unset;
    &:hover {
      background-color: #ff515167;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:active {
      background-color: #af383877;
      transition: all 0.3s ease;
    }
  }
}
</style>