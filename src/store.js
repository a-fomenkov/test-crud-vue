import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		startedPosts: [{
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
		}],
		posts: JSON.parse(localStorage.getItem('posts') || '[]')
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
		}
	},
	actions: {
		createPost({ commit }, post) {
			commit('createPost', post)
		},
		changePost({ commit }, post) {
			commit('changePost', post)
		},
		deletePost({ commit }, id) {
			commit('deletePost', id)
		}
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
		}
	}
});

export default store;