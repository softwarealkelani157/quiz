<template>
  <div class="product-carousel">
      <h5>
          {{title}}
      </h5>
      <div class="contain">
    <div class="card" v-for="(item, index) in data" :key="index">
      <img :src="item.image" class="card-img-top" :alt="item.title" />
      <div class="card-body">

        <div class="card-title ">{{ item.title }}</div>
        <div class="d-flex align-items-center h6 ">
            <div>AED</div>
            <div class="price ms-2 me-4">{{ item.price }}.00</div>
            <div v-if="item.discount">{{ item.discount }}.00</div>

        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  },
  title:String
})
</script>

<style scoped>
.product-carousel{
    margin:25px
}
.contain {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 1rem;
}
.card {
  width: 220px;
  flex-shrink: 0;
  border-radius: 8px;
    border:none !important
}
.card-body{
}
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: fill;
}
.card .price{
    text-decoration-line: line-through;
}
</style>
