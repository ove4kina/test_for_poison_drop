import { createStore } from 'vuex'

export default createStore({
  state: {
    value: '',
    products: [
      {title: 'Product 1', src: 'product1', image: '/image/product.jpg', id: 1},
      {title: 'Product 2', src: 'product2', image: '/image/product.jpg', id: 2},
      {title: 'Product 3', src: 'product3', image: '/image/product.jpg', id: 3},
      {title: 'Product 4', src: 'product4', image: '/image/product.jpg', id: 4},
      {title: 'Product 5', src: 'product5', image: '/image/product.jpg', id: 5},
      {title: 'Product 6', src: 'product6', image: '/image/product.jpg', id: 6},
      {title: 'Product 7', src: 'product7', image: '/image/product.jpg', id: 7},
      {title: 'Product 8', src: 'product8', image: '/image/product.jpg', id: 8},
      {title: 'Product 9', src: 'product9', image: '/image/product.jpg', id: 9},
      {title: 'Product 10', src: 'product10', image: '/image/product.jpg', id: 10},
      {title: 'Product 11', src: 'product11', image: '/image/product.jpg', id: 11},
      {title: 'Product 12', src: 'product12', image: '/image/product.jpg', id: 12},
      {title: 'Product 13', src: 'product13', image: '/image/product.jpg', id: 13},
      {title: 'Product 14', src: 'product14', image: '/image/product.jpg', id: 14},
      {title: 'Product 15', src: 'product15', image: '/image/product.jpg', id: 15},
    ],
    src: '',
  },
  mutations: {
    UPDATE_SEARCH_VALUE(state, value) {
      state.value = value;
    },
  },
  getters: {
    ALL_PRODUCTS(state) {
      return state.products;
    },
    FILTER_PRODUCTS(state) {
      return Object.values(state.products).filter(item => 
        item.title.toLowerCase().includes(state.value.toLowerCase()));
    },
  },
})
