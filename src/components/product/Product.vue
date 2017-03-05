<template lang="html">
<div class="col-md-4">
    <div class="thumbnail">
        <img src="http://findicons.com/files/icons/175/halloween_avatar/256/mike.png">
        <div class="caption">
            {{ product.user_id }}
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <hr>
            <p>
                <a href="#" class="btn btn-default">
                    Wish List
                </a>
                <a href="#" class="btn btn-success">
                    Buy
                </a>
            </p>
            <hr>
            <p v-if="product.user_id == authenticatedUser.id">
                <a href="#" class="btn btn-danger" @click="$emit('delete-product')">
                    Delete
                </a>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import swal from 'sweetalert'
export default {
    props: ['product', 'authenticatedUser'],

}
</script>

<style lang="css">
</style>
