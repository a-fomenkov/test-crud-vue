import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const startedPosts = JSON.stringify([{
	id: Date.now(),
	title: "Title1",
	shortDescription: "Abc",
	fullDescription: "Abcdef",
	comments: [
		{
			id: Date.now(),
			author: "Ivan",
			text: "Nice story",
		},
		{
			id: Date.now() + 1,
			author: "Oleg",
			text: "norm",
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
			id: Date.now() + 2,
			author: "Ivan",
			text: "Nice story",
		},
	],
}])
let store = new Vuex.Store({
	state: {
		posts: JSON.parse(localStorage.getItem('posts') || startedPosts)
	},
	mutations: {
		createPost(state, post) {
			state.posts.push(post)

			localStorage.setItem('posts', JSON.stringify(state.posts))
		},
		changePost(state, { id, shortDescription, fullDescription }) {
			const posts = state.posts.concat()

			const idx = posts.findIndex(post => post.id === id)
			const post = posts[idx]

			posts[idx] = { ...post, shortDescription, fullDescription }

			state.posts = posts
			localStorage.setItem('posts', JSON.stringify(state.posts))
		},
		deletePost(state, id) {
			const idx = state.posts.findIndex(post => post.id === id)
			state.posts.splice(idx, 1)
			localStorage.setItem('posts', JSON.stringify(state.posts))
		},
		addComment(state, { id, comments }) {
			const posts = state.posts.concat()

			const idx = posts.findIndex(post => post.id === id)
			const post = posts[idx]

			posts[idx] = { ...post, comments }

			state.posts = posts
			localStorage.setItem('posts', JSON.stringify(state.posts))
		},
		deleteComment(state, { id, comment }) {
			const postIdx = state.posts.findIndex(post => post.id === id);
			const commentIdx = state.posts[postIdx].comments.findIndex(c => c.id === comment.id);
			state.posts[postIdx].comments.splice(commentIdx, 1);

			localStorage.setItem('posts', JSON.stringify(state.posts))
		},
	},
	getters: {
		posts: s => s.posts,
		//postById: s => id => s.posts.find(p => p.id === id),
		postById: function (s) {
			return function (id) {
				return s.posts.find(function (post) {
					return post.id === id
				})
			}
		},
	}
});

export default store;