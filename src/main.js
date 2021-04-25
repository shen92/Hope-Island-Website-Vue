import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Hope Island'
    }
  },
  render: h => h(App)
}).$mount('#app')


