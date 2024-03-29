// 不用 arror function
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
export default function (Vue) {
    let authenticatedUser = {}

    Vue.auth = {
        setToken (token, expiration) {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },
        getToken () {
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')

            if (!token || !expiration) {
                return null
            }

            if (Date.now() > parseInt(expiration)) { // 過期
                this.destroyToken()
                return null
            } else {
                return token
            }
        },
        destroyToken () {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },
        isAuthenticated () {
            if (this.getToken()) {
                return true
            } else {
                return false
            }
        },
        setAuthenticatedUser (data) {
            authenticatedUser = data
        },
        getAuthenticatedUser () {
            return authenticatedUser
        }
    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get () {
                return Vue.auth
            }
        }
    })
}
