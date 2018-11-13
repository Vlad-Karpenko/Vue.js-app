import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const defaultTemplate = {template: `<p>Default</p>`};

const routes = [
    {path: '/', component: defaultTemplate}
];

export const router = new VueRouter({
    mode: 'history',
    routes
});

