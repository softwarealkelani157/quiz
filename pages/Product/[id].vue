<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid"  />
      </div>
      <div class="col-md-6">
        <h2>{{ product.title }}</h2>
        <p class="text-muted">{{ product.category }}</p>
        <p>{{ product.description }}</p>
        <h4 class="text-success">${{ product.price }}</h4>
        <button class="btn btn-primary mt-3" @click="addToCart(product)">
          {{t('addToCart')}}       </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useCart } from '@/composables/useCart'
const { addToCart } = useCart()

const route = useRoute()
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`)
</script>
