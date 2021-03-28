<template>
    <b-row class="mt-5">
        <b-col xs="12" sm="6" md="6" lg="7">
            <!-- <h1>{{this.$route.params.id}}</h1> -->
            <div class="card prod-img-card border-0"  v-if="!loading">
               <div class="text-center mt-3">
                   <img class="img-fluid mt-3" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" alt="">
               </div>
            </div>
            <div class="card prod-img-card border-0" v-if="loading">
               
            </div>
        </b-col>

        <b-col xs="12" sm="6" md="6" lg="5">
            <div class="card prod-img-card border-0" v-if="!loading">
                <div class="content mt-5 ml-5">
                    <span><small><b>{{ productDetails.type }} - {{ productDetails.sub_type }}</b></small> <small class="bg-success text-white pl-2 pr-2 rounded">{{ productDetails.brand}}</small></span>
                    <h3 class="product-name mt-5"><b>{{ productDetails.name }}</b></h3>
                    <h4 class="text-success"><span class="text-info">BDT </span>{{ productDetails.offer_price ?  productDetails.offer_price : productDetails.main_price}} <small class="text-danger" v-if="productDetails.offer_price"><del>{{ productDetails.main_price }}</del></small></h4>
                    <div class="cart-option mt-5">
                        <div class="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-sm btn-danger" @click="subtractQuantity">-</button>
                        <button type="button" class="btn btn-sm btn-default">{{ quantity }}</button>
                        <button type="button" class="btn btn-sm btn-success" @click="addQuantity">+</button>
                    </div>
                    <button class="btn-danger btn-sm btn-cart"><i class="fas fa-cart-plus"></i> Add</button>
                    </div>

                    <h5 class="mt-5">Product Description:</h5>
                    <li>Good Product</li>
                    <li>Best Quality</li>
                    <li>Fast Delivery</li>
                    <li>Money Back Guranty</li>
                </div>
            </div>
            <div class="card prod-img-card border-0" v-if="loading">
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            productDetails: {},
            quantity: 1,
            loading: true
        }
    },

    methods: {
        async getProductDetails() {
            await this.$axios.$get('/v1/product-details/'+this.$route.params.id)
            .then(response => {
                if(response.status_code == 200) {
                    this.loading = false;
                    this.productDetails = response.data;
                }
            })
            .catch(err => {
                console.log(err.response.data);
            })
        },

        addQuantity() {
            this.quantity++;
        },

        subtractQuantity() {
            if(this.quantity > 1) {
                this.quantity--;
            }  
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

  .btn-cart {
      padding-left: 40px;
      padding-right: 40px;
      background-color: #fd686a;
      border: none;
      box-shadow: 0 5px 7px 0 rgb(224, 88, 91);
  }
  .btn-cart:hover {
    background-color: #FE3638;
  }
</style>