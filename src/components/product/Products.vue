<template lang="html">
    <div class="row">
        <my-product v-for="product in products" 
            :authenticatedUser="authenticatedUser"
            :product="product"></my-product>
    </div>
</template>

<script>
import Product from './Product.vue'

export default {
    data () {
        return {
            products: []
        }
    },

    // if you get this value from somewhere, should use computed property.
    // make sure you use computed property when you want to pass data between components and
    // that data will come from a source
    computed: {
        authenticatedUser () {
            return this.$auth.getAuthenticatedUser()
        }
    },

    components: {
        'my-product': Product
    },

    created () {
        this.$http.get('api/products')
            .then(response => {
                this.products = response.body
            })
    }
}
</script>
