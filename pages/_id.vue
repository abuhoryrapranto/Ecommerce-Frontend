<template>
    <b-row class="mt-5">
        <b-col md="7">
            <!-- <h1>{{this.$route.params.id}}</h1> -->
            <div class="card prod-img-card border-0">
               <div class="text-center mt-3">
                   <img class="img-fluid mt-3" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" alt="">
               </div>
            </div>
        </b-col>

        <b-col md=5>
            <div class="card prod-img-card border-0">
                <div class="content mt-5 ml-5">
                    <small><b>{{ productDetails.type }} - {{ productDetails.sub_type }}</b></small>
                    <h3 class="product-name mt-3"><b>{{ productDetails.name }}</b></h3>
                    <h4 class="text-success"><span class="text-info">BDT </span>{{ productDetails.offer_price ?  productDetails.offer_price : productDetails.main_price}} <small class="text-danger" v-if="productDetails.offer_price"><del>{{ productDetails.main_price }}</del></small></h4>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            productDetails: {}
        }
    },

    methods: {
        async getProductDetails() {
            await this.$axios.$get('/v1/product-details/'+this.$route.params.id)
            .then(response => {
                if(response.status_code == 200) {
                    this.productDetails = response.data;
                }
            })
            .catch(err => {
                console.log(err.response.data);
            })
        }
    },

    created() {
        this.getProductDetails();
    },
}
</script>

<style scoped>
    .prod-img-card{
        height: 700px;
    }

    .product-name {
        color: #373F50;
    }
</style>