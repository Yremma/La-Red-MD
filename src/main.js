import Vue              from 'vue'
import Router           from 'vue-router'
import ElementUI        from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import locale           from 'element-ui/lib/locale/lang/es'


import 'element-theme-default';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'swiper/dist/css/swiper.css'


import App              from './App.vue'
import Home             from '@/components/Home'
import Asesoramiento    from '@/components/Asesoramiento'
import Galeria          from '@/components/Galeria'
import Prueba           from '@/components/Prueba'



Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Router)



const router = new Router({
    mode: 'history',
    routes: [
      {   path: '/',                name: 'home',           component: Home,
      },
      {   path: '/asesoramiento',   name: 'asesoramiento',  component: Asesoramiento,
      },
      {   path: '/galeria',         name: 'galeria',        component: Galeria,
      },
      {   path: '/prueba',          name: 'prueba',         component: Prueba,
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
