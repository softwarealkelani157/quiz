<template>
  <div class="col-md-3 col-sm-6 mb-4">
    <div class="card h-100 shadow-sm">
      <img
        :src="product.image"
        class="card-img-top p-3"
        :alt="product.title"
        style="height: 220px; object-fit: contain"
      />
      <div class="card-body d-flex flex-column justify-content-between">
        <h6 class="card-title text-truncate" :title="product.title">
          {{ product.title }}
        </h6>
        <p class="text-muted mb-1">{{ product.category }}</p>
        <p class="text-success fw-bold">${{ product.price }}</p>
        <NuxtLink :to="`/product/${product.id}`" class="btn btn-outline-dark btn-sm mt-auto">
            {{t('showDetails')}}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card {
  transition: transform 0.2s ease;
}
.card:hover {
  transform: scale(1.02);
}
</style>
