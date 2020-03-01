import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Article = () => import('../views/article.vue')
const BackManage = () => import('../views/backManage.vue')
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/article'
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/manage',
      component: BackManage
    }
  ],
  mode: 'history'
})