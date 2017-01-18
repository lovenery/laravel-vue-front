<template lang="html">
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li" to="/">
                    <a>Home</a>
                </router-link>
                <router-link tag="li" to="/login" v-if="! isAuth">
                    <a>Login</a>
                </router-link>
                <router-link tag="li" to="/register" v-if="! isAuth">
                    <a>Register</a>
                </router-link>

                <router-link tag="li" to="/login" v-if="isAuth">
                    <a>Feed</a>
                </router-link>
                <router-link tag="li" to="/register" v-if="isAuth">
                    <a>Lougut</a>
                </router-link>
            </ul>
        </nav>
        <h3 class="text-muted">Project name</h3>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isAuth: null
        }
    },
    created () {
        this.isAuth = this.$auth.isAuthenticated()
    }
}
</script>

<style lang="css">
</style>
