<template>
  <div>
    <div class="container py-4">
      <h1 class="mb-4">{{t('products')}}</h1>
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import {watch, onMounted} from 'vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();


const route = useRoute();

const category = route.query.category;
const { data: productData } = await useFetch(
  "https://fakestoreapi.com/products"
);
const products = ref();
const filterData = (aCategory) => {
  products.value = productData.value.filter(
    (ele) => ele.category.toLowerCase() == aCategory.toLowerCase()
  );
};
watch(() => route.query.category,(n,o)=>{
    if(n != o)
    filterData(n)
})
onMounted(() => {
    filterData(category)
})
</script>
