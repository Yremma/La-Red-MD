import Vue              from 'vue'
import Router           from 'vue-router'
import ElementUI        from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollReveal  from 'vue-scroll-reveal'
import locale           from 'element-ui/lib/locale/lang/es'


import 'element-theme-default';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'swiper/dist/css/swiper.css'


import App              from './App.vue'
import Home             from '@/components/Home'
import Asesoramiento    from '@/components/Asesoramiento'
import Galeria          from '@/components/GaleriaTrabajos'



Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Router)
Vue.use(VueScrollReveal);



const router = new Router({
    mode: 'history',
    routes: [
      {   path: '/',                name: 'home',           component: Home,
      },
      {   path: '/asesoramiento',   name: 'asesoramiento',  component: Asesoramiento,
      },
      {   path: '/galeria',         name: 'galeria',        component: Galeria,
      },
      {   path: '',                 redirect: '/',
      },
      {   path: '*',                redirect: '/',
      }
  ]
})



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
