<template>
  <div class="posts">
    <add-post
      class="posts__add-post"
      v-if="state === 'addNewPost'"
      v-model="newPost"
      @changeState="changeState('default')"
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
  data() {
    return {
      state: "default",
      posts: [
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
      ],
      newPost: {
        id: Date.now(),
        title: "",
        shortDescription: "",
        fullDescription: "",
        comments: [
          {
            commentAuthor: "",
            commentText: "",
          },
        ],
      },
    };
  },
  mounted() {
    if (localStorage.getItem("posts")) {
      try {
        this.posts = JSON.parse(localStorage.getItem("posts"));
      } catch (e) {
        localStorage.removeItem("posts");
      }
    }
  },
  methods: {
    changeState(newState) {
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
    },
    deletePost(index) {
      this.posts.splice(index, 1);
    },
    savePost() {
      let parsed = JSON.stringify(this.posts);
      localStorage.setItem("posts", parsed);
    },
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