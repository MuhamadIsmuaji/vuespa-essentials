import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

let routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/contact',
		component: Contact
	}
];

export default new VueRouter({
	routes,
	linkActiveClass: 'is-active',
})