<template>
  <div class="edit-post">
    <div class="edit-post__container" v-if="post">
      <router-link :to="{ name: 'posts' }">
        <button class="edit-post__back-btn">Cancel</button>
      </router-link>
      <button @click="deletePost">Удалить пост</button>
      <div class="edit-post__view-content" v-if="state === 'view'">
        <button @click="change('edit')">Редактировать</button>
        <h2>{{ post.title }}</h2>
        <p>{{ post.fullDescription }}</p>
      </div>
      <div class="edit-post__edit-form" v-if="state === 'edit'">
        <input type="text" v-model="post.title" />
        <textarea
          cols="30"
          rows="10"
          v-model="post.shortDescription"
        ></textarea>
        <textarea cols="30" rows="10" v-model="post.fullDescription"></textarea>
        <button @click="confirmChanges('view')">Подтвердить изменения</button>
      </div>
      <div class="edit-post__comments comments">
        <div class="comments__add-form">
          <input
            type="text"
            class="comments__author"
            placeholder="Введите ваше имя"
            v-model="newComment.author"
          />
          <textarea
            cols="30"
            rows="10"
            class="comments__text"
            placeholder="Введите текст комментария"
            v-model="newComment.text"
          ></textarea>
          <button class="comments__add-btn" @click="addComment()">
            Оставить комментарий
          </button>
        </div>
        <div class="comments__container">
          <p class="comments__title">Комментарии:</p>
          <div
            class="comments__list"
            v-for="comment in post.comments"
            :key="comment.id"
          >
            <p>
              <b>{{ comment.author }}</b>
              <br />
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
      //this.$emit("deletePost");
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
  &__container {
    margin: 0 40px;
  }
  &__view-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: justify;
    }
  }
  &__edit-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
.comments {
  display: flex;
  flex-direction: column;
  &__container {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    p {
      text-align: start;
    }
  }
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }
  &__add-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
  }
}
</style>