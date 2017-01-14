<template lang="html">
<div class="col-md-4">
    <div class="thumbnail">
        <img src="http://findicons.com/files/icons/175/halloween_avatar/256/mike.png">
    </div>
    <div class="caption">
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
    </div>
</div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="css">
</style>
