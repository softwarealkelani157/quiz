// composables/useCart.ts
import { ref } from 'vue'

const cartItems = ref([])

export function useCart() {
  const addToCart = (product: any) => {
    const existing = cartItems.value.find((p) => p.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (id: number) => {
    cartItems.value = cartItems.value.filter( (item) => item.id !== id)
  }
  const cartCount = computed(() =>
  cartItems.value.reduce((total, item) => total + item.quantity, 0)
)

  return { cartItems, addToCart, removeFromCart ,cartCount}
}
