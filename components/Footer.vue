<template>
  <footer class="bg-dark text-white pt-3">
    <!-- Yellow Top Border -->

    <div class="container ">
      <div class="row   align-items-center">
        <!-- Logo and Social -->
        <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center ">
          <div class=" brand mb-3">
            <img src="@/assets/icons/Logo.png" width="200" alt=""/>
       

          <!-- Social Icons -->
          <div class="d-flex gap-0 icons">
            <a href="#" class=" p-0 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
              <img src="@/assets/icons/facebook.png" height="20" alt="facebook">
            </a>
            <a href="#" class=" d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
              <img src="@/assets/icons/youtube.png" height="20" alt="youtube">
            </a>
            <a href="#" class=" d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
              <img src="@/assets/icons/instagram.png" height="20" alt="instagram">
            </a>
            <a href="#" class=" d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
              <img src="@/assets/icons/twitter.png" height="20" alt="twitter">
            </a>
          </div>
             </div>
        </div>
        <!-- Navigation Links -->
        <div class="col-6 col-lg-3">
          <ul class="list-unstyled">
             <li  v-for="item in tabStatic" :key="item.title">
              <NuxtLink :to="item.route" class="text-white text-decoration-none d-block mb-2"
                >{{ t(item.title) }}</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="col-6 col-lg-3">
          <ul class="list-unstyled ">
            <li v-for="tab in tabs" :key="tab.title">   <NuxtLink
                  :to="{
                    path: '/product',
                    query: {
                      category: tab.category,
                    },
                  }"
                  class="text-white mb-2 d-block text-decoration-none"
                  >{{ t(tab.title) }}</NuxtLink
                ></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-12 col-lg-3 d-flex flex-column align-items-center">
          <h6 class="fw-bold mb-3">Contact us</h6>
          <p class="mb-1 text-white-50">+971 00 000 0000</p>
          <p class="mb-1 text-white-50">+971 0 000 0000</p>
          <p class="mb-0 text-white-50">info@sample.com</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-top border-secondary mt-2 pt-1 text-center">
        <small class="text-white-50">© Developer Test 2024. All Rights Reserved.</small>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const tabStatic = [
  {
    title: "home",
    route: "/",
  },
  {
    title: "about",
    route: "/",
  },
  {
    title: "mediaCenter",
    route: "/",
  },
  {
    title: "contact",
    route: "/",
  },
];
const tabs = [
  {
    title: "electronics",
    category: "electronics",
  },
  {
    title: "jewelery",
    category: "jewelery",
  },
  {
    title: "menClothing",
    category: "men's clothing",
  },
  {
    title: "womenClothing",
    category: "women's clothing",
  },
];
</script>
<style scoped>
.brand{
  position: relative;
}
.brand .icons{
  position: absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
}
</style>