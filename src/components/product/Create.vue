<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form @submit.prevent="create">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="file" class="form-control"
                                @change="imageChanged">
                        </div>
                        <div class="form-group">
                            <label>Name:</label>
                            <input name="name" type="text" class="form-control"
                                v-validate="'required'"
                                v-model="product.name">
                            <div class="help-block alert alert-danger"
                                v-show="errors.has('name')">
                                {{ errors.first('name') }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Price:</label>
                            <input name="price" type="text" class="form-control"
                                v-validate="'max_value:50|min_value:1'"
                                v-model="product.price">
                            <div class="help-block alert alert-danger"
                                v-show="errors.has('price')">
                                {{ errors.first('price') }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" v-model="product.description"></textarea>
                        </div>
                        <input type="submit" class="btn btn-success pull-right" value="Create">
                    </form>
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
                    description: '',
                    image: ''
                }
            }
        },
        methods: {
            imageChanged (e) {
                // console.log(e.target.files[0])
                let fileReader = new FileReader()
                fileReader.readAsDataURL(e.target.files[0])
                fileReader.onload = (e) => {
                    this.product.image = e.target.result
                }
                console.log(this.product)
            },
            create() {
                this.$validator.updateDictionary({
                    'zh-TW': {
                        attributes: {
                            name: '姓名'
                        }
                    }
                })
                this.$validator.setLocale('zh-TW')

                this.$validator.validateAll().then(() => {
                    this.$http.post('api/products', this.product)
                    .then(response => {
                        console.log(response.body)
                        this.$router.push('/feed')
                    })
                })
            }
        }
    }
</script>