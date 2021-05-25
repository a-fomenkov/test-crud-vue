<template>
  <div class="posts">
    <transition name="rotate">
      <add-post
        class="posts__add-post"
        v-if="state === 'addNewPost'"
        v-model="newPost"
        @publishPost="createNewPost('default')"
        @closeAddPost="changeState('default')"
      ></add-post>
    </transition>

    <div class="posts__menu">
      <button class="posts__add-post-btn" @click="changeState('addNewPost')">
        Добавить пост
      </button>
    </div>

    <h1>Blog</h1>
    <div
      class="posts__list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
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
      return this.$store.getters.posts.slice(0, this.loadedPosts);
    },
  },
  data() {
    return {
      state: "default",
      loadedPosts: 7,
      busy: false,
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
    loadMore() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 5; i < j; i++) {
          this.posts.push({ post: this.loadedPosts++ });
        }
        this.busy = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss">
.posts {
  h1 {
    font-size: 40px;
  }
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
    background-color: unset;
    border: 1px solid #35495e6b;
    box-shadow: 1px 1px 2px #35495e81;
    width: 150px;
    height: 40px;
    font-size: 16px;
    padding: 5px;
    &:hover {
      background-color: #42b883;
      box-shadow: 1px 1px 3px #42b883c5;
      border: unset;
      color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s ease;
}
.rotate-enter,
.rotate-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>