import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const startedPosts = JSON.stringify([{
	id: Date.now(),
	title: "Lorem ipsum dolor",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque.LeoLeo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
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
	title: "Lorem ipsum dolor sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 2,
			author: "Ivan",
			text: "Nice story",
		},
	],
},
{
	id: Date.now() + 2,
	title: "Lorem ipsum dolor sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 3,
			author: "Ivan",
			text: "Nice story",
		},
	],
},
{
	id: Date.now() + 3,
	title: "Lorem ipsum dolor sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 4,
			author: "Oleg",
			text: "Privet vsem",
		},
	],
},
{
	id: Date.now() + 4,
	title: "Lorem sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 5,
			author: "Ivan",
			text: "Nice story",
		},
	],
},
{
	id: Date.now() + 5,
	title: "Lorem ipsum dolor",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 6,
			author: "Ivan",
			text: "Nice story",
		},
		{
			id: Date.now() + 7,
			author: "Oleg",
			text: "norm",
		},
	],
},
{
	id: Date.now() + 6,
	title: "Lorem ipsum dolor sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 8,
			author: "Oleg",
			text: "Privet vsem",
		},
	],
},
{
	id: Date.now() + 7,
	title: "Lorem sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 9,
			author: "Ivan",
			text: "Nice story",
		},
	],
},
{
	id: Date.now() + 8,
	title: "Lorem ipsum dolor",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 10,
			author: "Ivan",
			text: "Nice story",
		},
		{
			id: Date.now() + 11,
			author: "Oleg",
			text: "norm",
		},
	],
},
{
	id: Date.now() + 9,
	title: "Lorem ipsum dolor sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 12,
			author: "Oleg",
			text: "Privet vsem",
		},
	],
},
{
	id: Date.now() + 10,
	title: "Lorem sit amet",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 13,
			author: "Ivan",
			text: "Nice story",
		},
	],
},
{
	id: Date.now() + 11,
	title: "Lorem ipsum dolor",
	shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non.",
	fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna neque viverra justo nec ultrices. Lorem ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet risus nullam eget felis. Interdum varius sit amet mattis vulputate enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem. Dictumst quisque sagittis purus sit. Fringilla urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum suspendisse ultrices. Blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur a erat nam at lectus urna. Dignissim sodales ut eu sem integer. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Leo vel fringilla est ullamcorper eget. Arcu risus quis varius quam. Tempor nec feugiat nisl pretium fusce id velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue neque gravida in fermentum et. At in tellus integer feugiat scelerisque varius morbi. Quisque id diam vel quam elementum pulvinar etiam non quam. Et netus et malesuada fames ac turpis. Nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Venenatis tellus in metus vulputate. Turpis egestas pretium aenean pharetra. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Cursus sit amet dictum sit. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien eget mi proin sed. Varius vel pharetra vel turpis nunc eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
	comments: [
		{
			id: Date.now() + 14,
			author: "Ivan",
			text: "Nice story",
		},
		{
			id: Date.now() + 15,
			author: "Oleg",
			text: "norm",
		},
	],
},])
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