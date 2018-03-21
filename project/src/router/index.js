import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import content from '@/components/content.vue'
import wuliu from '@/pages/wuliu/wuliu'
import pageshow from '@/pages/pageshow/pageshow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: content,
      children: [{
        path: '/',
        component: pageshow
      },{
        path: '/pageshow',
        component: pageshow
      },{
        path: '/wuliu1',
        component: wuliu
      }]
    }
  ]
})
