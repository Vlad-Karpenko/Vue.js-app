import './static/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import {router} from './router/router'


new Vue({
    store,
    router,
    el: '.app',
    render: h => h(App)
});
