<template>
    <ul class="catalog__list">
      <item :products="products"></item>


        </ul>
</template>

<script>
import products from '../data/products';
import item from './ProductItem.vue';
export default {
  name: "ProductList",
  components: {item},
  data() {
    return{
      products: products
    }
  }
}
</script>