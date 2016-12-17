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
                client_secret: 'X7IapYLmvDHKxV96a2ddh6PduEZ4zHPJ3j735SuS',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }
            this.$http.post("http://back.dev/oauth/token", data)
                .then(response => {
                    console.log(response);
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
