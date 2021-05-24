<template>
  <div class="posts">
    <add-post
      class="posts__add-post"
      v-if="state === 'addNewPost'"
      v-model="newPost"
      @publishPost="createNewPost('default')"
    ></add-post>

    <div class="posts__menu">
      <button class="posts__add-post-btn" @click="changeState('addNewPost')">
        Add post
      </button>
    </div>

    <h1>Blog</h1>
    <div class="posts__list">
      <posts-item
        class="posts__item"
        v-for="(post, index) in posts"
        :key="post.id"
        :post_data="post"
        @deletePost="deletePost(index)"
      ></posts-item>
    </div>
  </div>
</template>

<script>
import postsItem from "./posts-item";
import addPost from "./add-post";

export default {
  name: "posts",
  components: {
    postsItem,
    addPost,
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  data() {
    return {
      state: "default",
      /*data: [],
      busy: false,
      count: 0,*/
      newPost: {
        title: "",
        shortDescription: "",
        fullDescription: "",
        comments: null,
      },
    };
  },
  methods: {
    createNewPost(newState) {
      this.state = newState;
      if (
        !this.newPost.title ||
        !this.newPost.shortDescription ||
        !this.newPost.fullDescription
      )
        return;
      const post = {
        id: Date.now(),
        title: this.newPost.title,
        shortDescription: this.newPost.shortDescription,
        fullDescription: this.newPost.fullDescription,
        comments: [],
      };
      this.$store.commit("createPost", post);
    },
    changeState(newState) {
      this.state = newState;
    },
    /*loadMore() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ });
        }
        this.busy = false;
      }, 1000);
    },*/
    /*changeState(newState) {
      this.state = newState;
      if (
        !this.newPost.title ||
        !this.newPost.shortDescription ||
        !this.newPost.fullDescription
      )
        return;
      this.posts.push(this.newPost);
      this.newPost = "";
      this.savePost();
    },*/

    /*deletePost(index) {
      this.posts.splice(index, 1);
      this.savePost();
    },
    savePost() {
      let parsed = JSON.stringify(this.posts);
      localStorage.setItem("posts", parsed);
    },*/
  },
};
</script>

<style lang="scss">
.posts {
  margin: 0 40px;
  &__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__item {
    width: 100%;
  }
  &__add-post-btn {
    width: 100px;
  }
}
</style>