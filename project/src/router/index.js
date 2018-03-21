import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import content from '@/components/content.vue'
import wuliu from '@/pages/wuliu/wuliu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: content,
      children: [{
        path: '/',
        component: wuliu
      }]
    }
  ]
})
