<template lang="html">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel-body">
                <div class="form-group">
                    <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        placeholder="Email"
                    >
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" placeholder="Password">
                </div>
                <button @click="login" class="btn btn-success pull-right">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            var data = {
                client_id : 2,
                client_secret: '5KvqR4ZsAmfgMlKNwyiDvn0NKQFX8JC2kEXBK8Xu',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }
            this.$http.post("oauth/token", data)
                .then(response => {
                    // console.log(response);
                    this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                    // console.log(response);
                    this.$router.push("/feed") // redirect
                })
                /*
                .then(function (response) {
                    console.log(response);
                })
                */
        }
    }
}
</script>

<style lang="css">
</style>
