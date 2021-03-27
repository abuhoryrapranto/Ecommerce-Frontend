<template>
  <div>
    <!-- <img class="home-image mt-5" src="img/home1.jpg" alt="home"> -->
    <div class="banner text-white mt-5 d-none d-md-block">
      <div class="row">
        <div class="col-md-5 banner-text">
            <h1>Orginal Items a click away</h1>
            <p>Oder any goods from our store online and we deliver them to your door at a time convenient for you.</p>
        </div>
        <div class="col-md-7">
          <img class="img-fluid banner-img" src="img/banner-1.png" alt="banner">
        </div>
      </div>
    </div>
    <h5 class="text-center mt-3">Feature Products</h5>
    <ProductCardVersionTwo :products="featureProducts" :loading="loading"></ProductCardVersionTwo>
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
      featureProducts: {},
      loading: true
    }
  },
  methods: {
    async getAllFeatureProduct() {
      await this.$axios.$get('/v1/feature-products')
      .then(response => {
        if(response.status_code == 200) {
          this.loading = false;
          this.featureProducts = response.data;
        }
      })
      .catch(err => {
        console.log(err.response.data);
      })
    }
  },
  created() {
    this.getAllFeatureProduct();
  },
  head() {
    return {
      title: "Ec Clients Fe"
    }
  },
  mounted() {
    let data = JSON.stringify(this.featureProducts);
    console.log(data);
  }
}
</script>
 
<style>
 .container-fluid {
    padding: 0px 30px;
    margin: 0px;
  }

  .home-image {
    width: 100%;
    height: 400px;
    filter: brightness(70%);
    border-radius: 10px; 
    opacity: 0.9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .banner {
    background: #59C879;
    padding-bottom: 70px;
    border-radius: 10px;
  }

  .banner-text {
    margin-top: 100px;
    padding-left: 70px;
    float: left;
  }

  .banner-img {
    height: 300px;
    float: right;
    margin-top: 70px;
    padding-right: 70px;
  }
</style>
