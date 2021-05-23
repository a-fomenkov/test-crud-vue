<template>
  <div class="posts">
    <add-post
      class="posts__add-post"
      v-if="state === 'addNewPost'"
      v-model="newPost"
      @changeState="createNewPost('default')"
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
      newPost: {
        title: "",
        shortDescription: "",
        fullDescription: "",
        comments: null,
      },
      /*startedPosts: [
        {
          id: Date.now(),
          title: "Title1",
          shortDescription: "Abc",
          fullDescription: "Abcdef",
          comments: [
            {
              commentAuthor: "Ivan",
              commentText: "Nice story",
            },
            {
              commentAuthor: "Oleg",
              commentText: "norm",
            },
          ],
        },
        {
          id: Date.now() + 1,
          title: "Title2",
          shortDescription: "Abc",
          fullDescription: "Abcdef",
          comments: [
            {
              commentAuthor: "Ivan",
              commentText: "Nice story",
            },
          ],
        },
      ],*/
    };
  },
  /*mounted() {
    if (localStorage.getItem("posts")) {
      try {
        this.startedposts = JSON.parse(localStorage.getItem("posts"));
      } catch (e) {
        localStorage.removeItem("posts");
      }
    }

    let parsed = JSON.stringify(this.startedPosts);
    localStorage.setItem("posts", parsed);
  },*/
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
        comments: [
          {
            commentAuthor: "",
            commentText: "",
          },
        ],
      };
      this.$store.dispatch("createPost", post);
    },
    changeState(newState) {
      this.state = newState;
    },
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