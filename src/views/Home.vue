<template>
  <div class="home">
    <search-component/>
    <products-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList'
import Search from '@/components/Search' 

export default {
  name: 'home',
  components: {
    'products-component' : ProductList,
    'search-component' : Search
  },
}

</script>

<style lang="scss" scoped>
.home {
  padding: 30px 32px 0;
  max-width: 375px;
    margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 640px;
  }
  @media screen and (min-width: 768px) {
    max-width: 1024px;
  }
}
</style>
