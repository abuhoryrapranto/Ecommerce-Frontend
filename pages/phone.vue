<template>
    <div>
        <p class="mt-5">Electronics > Phone</p>
        <hr>
        <ProductCardVersionTwo :products="products" :loading="loading"></ProductCardVersionTwo>
    </div>
</template>

<script>
import ProductCardVersionTwo from '../components/ProductCardVersionTwo';
export default {
    components: {
        ProductCardVersionTwo
    },
    data() {
        return {
            products: {},
            loading: true
        }
    },
    methods: {
        async getElectronicsProducts() {
            await this.$axios.$get('/v1/products/phone')
            .then(response => {
                if(response.status_code == 200) {
                    this.loading = false;
                    this.products = response.data;
                }
                else {
                    this.products = {};
                }
            });
        }
    },

    created() {
        this.getElectronicsProducts();
    },

    head() {
        return {
            title: 'Phone'
        }
    }
}
</script>

<style scoped>
    
</style>