<template>
  <div class="container py-4">
    <h2>{{t('cartSales')}}</h2>
    <div v-if="cartItems.length === 0">{{t('cartEmpty')}}</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="d-flex justify-content-between align-items-center border p-3 my-2">
        <img :src="item.image" alt="" style="width: 60px" />
        <div class="flex-grow-1 ms-3">
          <h5>{{ item.title }}</h5>
          <div>
            <input type="number" v-model.number="item.quantity" min="1" class="form-control w-25 d-inline-block me-2" />
            <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">{{t('delete')}}</button>
          </div>
        </div>
        <div>${{ (item.price * item.quantity).toFixed(2) }}</div>
      </div>
      <hr />
      <h4>{{t('total')}}: ${{ total }}</h4>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useCart } from '@/composables/useCart'
const { cartItems, removeFromCart } = useCart()

const total = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
)
</script>
