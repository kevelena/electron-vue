import Vue from 'vue'


Vue.config.productionTip = false

//VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//解决NavigationDuplicated
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
import routes from './pages/route';    // 路由配置文件
const router = new VueRouter({routes});
// router.beforeEach((to, from, next) => {
//     document.title = '佛山市第一人民医院互联网医院-' + to.meta.title;
//     //next(from)
//     next();
// });

//Vuex
import store from './store';

//my components
import myComponents from './components';
Vue.use(myComponents);

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
