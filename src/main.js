import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = 'http://back.dev'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) { // if forVisitors(登入者可進入)
            if (Vue.auth.isAuthenticated()) {
                next({
                    path: '/feed'
                })
            } else {
                next()
            }
        }
        else if (to.matched.some(record => record.meta.forAuth)) { // if forAuth(沒登不能進)
            if ( ! Vue.auth.isAuthenticated()) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        }
        else { // 其他
            next()
        }
    }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
