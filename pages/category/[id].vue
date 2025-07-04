<template>
  <div class="container py-4">
    <h2>منتجات فئة: {{ route.params.id }}</h2>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const { data: products } = await useFetch(
  `https://fakestoreapi.com/products/category/${route.params.id}`
)
</script>
