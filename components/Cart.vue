<template>
<!-- eslint-disable -->
<div>
	<a class="dropdown-item d-flex align-items-center" href="#" v-for="item in cart">
	<div class="dropdown-list-image mr-3">
		<img class="rounded-circle" src="img/undraw_profile_1.svg"
		alt="">
		<div class="status-indicator bg-success"></div>
	</div>
	<div class="font-weight-bold col-md-7">
		<div class="text-truncate float-left">{{item.name}}</div>
		<br>
		<div class="small text-gray-500">{{item.price/item.units}} x {{item.units}} = <span class="text-success"> {{item.price}}</span></div>
	</div>
	<div class="col-md-5">
		<span class="text-danger" @click="removeCart(item.pd_slug)">Remove</span>
	</div>
</a>
</div>
</template>
<script>
export default {
props:['products', 'loading'],
data() {
return {
}
},

computed: {
    cart() {
        return JSON.parse(JSON.stringify(this.$store.state.cart.cart_items));
            
    }
},
methods: {
	removeCart(pd_slug) {
	    this.$store.dispatch('cart/remove_cart', pd_slug);
	}
},
}
</script>
<style scoped>

</style>