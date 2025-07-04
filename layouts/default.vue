<template>
  <div>
    <Header />
      <div  class="content"> 
        <div class="container-page">
    <NuxtPage />

        </div>

    <Footer />
      </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.container-page{
  min-height: calc(100vh - 97px);
}
.content{
  height: calc(100vh - 97px);
  overflow-y: scroll ;
}
@media (max-width: 991.98px) {
  .content{
  height: calc(100vh - 54px);
  }
}
</style> 