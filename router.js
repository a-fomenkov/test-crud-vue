import Vue from 'vue'
import Router from 'vue-router'

import posts from './src/components/posts'
import editPost from './src/components/edit-post'

Vue.use(Router);

let router = new Router({
	routes: [
		{
			path: '/',
			name: 'posts',
			component: posts
		},
		{
			path: '/edit/:id',
			name: 'editPost',
			component: editPost,
			props: true
		}
	]
})

export default router;