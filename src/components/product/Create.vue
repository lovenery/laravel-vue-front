<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control"
                            v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="text" class="form-control"
                            v-model="product.price">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="product.description"></textarea>
                    </div>
                    <button class="btn btn-success pull-right" @click="create">
                        Create
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                product: {
                    name: '',
                    price: 0,
                    description: ''
                }
            }
        },
        methods: {
            create() {
                this.$http.post('api/products', this.product)
                    .then(response => {
                        console.log(response.body)
                        this.$router.push('/feed')
                    })
            }
        }
    }
</script>