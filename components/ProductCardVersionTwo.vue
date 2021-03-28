<template>
<!-- eslint-disable -->
<b-row>
<b-col sm="6" md="6" lg="6" xl="3" class="pb-3" v-if="products && loading == false" v-for="item in products" :key="item.pd_slug">
<div class="prod-card">
  <div class="pt-1">
    <small class="brand">{{ item.brand_name }}</small>
  </div>
  <img class="img-fluid img-section mt-3" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" alt="" @click="productDetails(item.pd_slug)">
  <div class="content-text">
    <small>{{ item.sub_type_name }}</small>
    <p>{{ item.pd_name }}</p>
      <div class="price float-left">
        <p><span class="prod-price">BDT {{ item.pd_offer_price ? item.pd_offer_price : item.pd_main_price }}</span> <small  v-if="item.pd_offer_price"><del>{{ item.pd_main_price }}</del></small></p>
      </div>
      <div class="cart text-right">
        <button class="btn-danger btn-sm btn-cart pl-2"><i class="fas fa-cart-plus"></i> Add</button>
      </div>
  </div>
</div>
</b-col>
<b-col sm="6" md="6" lg="6" xl="3" class="pb-3" v-if="products && loading == true" v-for="index in 8" :key="index">
<div class='area loading'>
  <div class='img-container'>
    <div class='img'>
    </div>
  </div>
</div>
</b-col>
</b-row>
</template>
<script>
export default {
props:['products', 'loading'],
data() {
  return {

  }
},
methods: {
  productDetails(slug) {
    this.$router.push({path: `/${slug}`});
  }
},
}
</script>
<style scoped>
  .prod-card {
  background: white;
  padding: 0px 15px;
  border-radius: 10px;
  margin-top: 10px;
  }

  .img-section{
    cursor: pointer;
  }

  .prod-price {
  color: #59C879;
  }

  .cart {
    visibility: hidden;
  }

  .prod-card:hover .cart {
  visibility: visible;
  transition: 1s ease-in;
  }
  .btn-cart {
  margin-bottom: 15px;
  background-color: #fd686a;
  border: none;
  box-shadow: 0 5px 7px 0 rgb(224, 88, 91);
  }
  .btn-cart:hover {
  background-color: #FE3638;
  }
  .brand {
  background-color:#fd686a;
  color: white;
  padding: 2px 5px;
  border-radius: 2px;
  }
  .area {
  display: flex;
  height: 323px;
  background-color: white;
  padding: 0px 15px;
  }
  .img-container {
  width: 100%;
  }
  .img {
  border: 1px solid white;
  width: 100%;
  height: 90%;
  margin-top: 15px;
  background-color: #babbbc;
  }
  .area.loading .img, .area.loading .stripe {
  animation: hintloading 2s ease-in-out 0s infinite reverse;
  -webkit-animation: hintloading 2s ease-in-out 0s infinite reverse;
  }
  @keyframes hintloading
  {
  0% {
  opacity: 0.5;
  }
  50%  {
  opacity: 1;
  }
  100% {
  opacity: 0.5;
  }
  }
  @-webkit-keyframes hintloading
  {
  0% {
  opacity: 0.5;
  }
  50%  {
  opacity: 1;
  }
  100% {
  opacity: 0.5;
  }
  }
</style>