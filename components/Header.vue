<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileDrawer"
        aria-controls="mobileDrawer"
        aria-label="تبديل التنقل"
      >
        <FontAwesomeIcon :icon="['fas', 'grip-lines']" />
      </button>
      <div
        :class="`offcanvas ${
          currentLocale == 'en' ? 'offcanvas-start' : 'offcanvas-end'
        }`"
        tabindex="-1"
        id="mobileDrawer"
        aria-labelledby="mobileDrawerLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="mobileDrawerLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="bi bi-x-lg fs-4 text-dark"></i>
          </button>
        </div>
        <div class="offcanvas-body d-flex flex-column gap-3">
          <!-- <div class="collapse navbar-collapse flex-column gap-3" id="navbarNav"> -->
          <ul class="navbar-nav up-header align-items-center">
            <li
              class="nav-item"
              v-for="item in tabStatic"
              :key="item.title"
              @click="closeDrawer"
            >
              <NuxtLink :to="item.route" class="nav-link"
                ><small> {{ t(item.title) }}</small></NuxtLink
              >
            </li>

            <li class="nav-item btn-lang" @click="toggleLanguage">
              <strong
                ><small>
                  {{ currentLocale === "en" ? "EN" : "AR" }}
                </small></strong
              >
            </li>
          </ul>

          <div class="d-flex down-header justify-content-around w-100">
            <ul class="navbar-nav align-items-center gap-3">
              <li class="nav-item d-flex align-items-center gap-2">
                <img src="@/assets/icons/heart.png" alt="heart" height="20" />
                <img src="@/assets/icons/Login.png" alt="login" height="20" />
                   <NuxtLink  to="/cart">
                <div class="position-relative">
                  <img src="@/assets/icons/Cart.png" alt="cart" height="20" />
                  <span v-if="cartCount > 0" class="badge bg-danger cart-badge">
                    {{ cartCount }}
                  </span>
                </div>
                   </NuxtLink>
              </li>
              <li class="nav-item position-relative">
                <input
                  class="form-control search pe-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <img
                  src="@/assets/icons/Search.png"
                  alt="search icon"
                  class="search-icon"
                  height="16"
                />
              </li>
            </ul>
            <ul
              class="navbar-nav align-items-center justify-content-center w-100"
            >
              <li
                class="nav-item"
                v-for="tab in tabs"
                :key="tab.title"
                @click="closeDrawer"
              >
                <NuxtLink
                  :to="{
                    path: '/product',
                    query: {
                      category: tab.category,
                    },
                  }"
                  class="nav-link"
                  :class="{
                    active: $route.query.category === tab.category,
                  }"
                  >{{ t(tab.title) }}</NuxtLink
                >
              </li>
            </ul>
            <NuxtLink class="navbar-brand" to="/">
              <div class="position-relative">
                <img
                  src="@/assets/icons/LogoBlack.png"
                  class="brand"
                  alt="Logo"
                  height="100"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <NuxtLink class="navbar-brand-mobile" to="/">
        <div class="position-relative">
          <img
            src="@/assets/icons/LogoBlack.png"
            class="brand"
            alt="Logo"
            height="70"
          />
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useCart } from "@/composables/useCart";
const { cartCount } = useCart();
const { t, locale } = useI18n();
const currentLocale = computed(() => locale.value);
const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "ar" : "en";
  const dir = locale.value === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", locale.value);
  closeDrawer();
};
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

let drawerInstance = null;
let drawerElement = null;

const closeDrawer = () => {
  if (!drawerElement) return;
  if (drawerInstance && drawerElement.classList.contains("show")) {
    const toggle = document.querySelector('[data-bs-toggle="offcanvas"]');
    toggle.click();
  }
};
onMounted(async () => {
  const { Offcanvas } = await import("bootstrap");
  drawerElement = document.getElementById("mobileDrawer");
  if (drawerElement)
    drawerInstance = Offcanvas.getOrCreateInstance(drawerElement);
});
</script>

<style scoped>
.navbar-nav .nav-link.active {
  font-weight: 700;
  color: black;
}
.navbar {
  background-color: white !important;
  padding: 0;
}
.search {
  background-color: #eee !important;
  border-radius: 0;
  width: 250px;
  height: 25px;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}
.navbar-brand {
  width: 100px;
}
.navbar-brand-mobile {
  width: 80px;
  display: none;
}
.brand {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 0.6rem;
  padding: 2px 5px;
  border-radius: 50%;
  background-color: red;
  color: white;
}
@media (max-width: 991.98px) {
  .navbar {
    padding: 10px 0;
  }
  .offcanvas-body {
    flex-direction: column-reverse !important;
    justify-content: start;
  }
  .down-header {
    flex-direction: column !important;
  }
  .navbar-brand {
    display: none;
  }
  .navbar-brand-mobile {
    display: block;
  }
  .navbar-nav {
    flex-direction: column !important;
    align-items: start !important;
    gap: 0.5rem;
    width: 100%;
  }

  .navbar-brand {
    margin-bottom: 1rem;
  }

  .search {
    width: 100% !important;
  }

  .navbar-collapse {
    margin-top: 1rem;
  }
  .brand {
    transform: translate(-50%, -50%);
  }
  .nav-item.d-flex {
    justify-content: start !important;
  }
}
.btn-lang {
  padding: 5px;
  border-radius: 10px;
}
.btn-lang:hover {
  cursor: pointer;
  background-color: #eee;
}
.up-header {
  margin-inline-end: auto;
}
.btn-close {
  margin-inline-end: 0;
  margin-inline-start: auto;
}
</style>
