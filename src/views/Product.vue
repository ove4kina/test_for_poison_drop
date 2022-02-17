<template>
  <div class="product">
    <div class="product__description">
      <h3 class="product__title">{{this.product.title}}</h3>
      <router-link to="/">
        <button>Назад</button>
      </router-link>
    </div>
    <div class="product__image"><img :src="this.product.image" alt="this.product.title"></div>
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard' 
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      product: null,
    }
  },
  created: 
    function() {
      let productId = this.$route.params.id - 1;
      this.product = this.ALL_PRODUCTS[productId]
  },
  components: {
    'product-component': ProductCard
  },
  computed: {
    ...mapGetters(['ALL_PRODUCTS'])
  }
}


</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  &__description {
    display: flex;
    align-items: center;
    & button {
      cursor: pointer;
      padding: 8px;
      font-size: 16px;
      background-color: #fff;
      outline: none;
      border: none;
      color: #000;
      -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    }
  }
  &__title {
    margin-right: 30px;
  }
  &__image {
    position: relative;
    width: 50%;
    height: 700px;
    overflow: hidden;
    margin-top: 16px;
    & img {
      position: absolute;
      max-width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
