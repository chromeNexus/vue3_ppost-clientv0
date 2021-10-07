// https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/
import { ref, computed } from "vue";

export default function useProduct() {
  const loading = ref(false);
  const products = ref([]);
  const cart = ref({});

  function useCart() {
    // super complicated cart logic
    return {
      cart: computed(() => cart.value),
    };
  }

  async function search(params) {
    loading.value = true;
    products.value = await fetchProduct(params);
    loading.value = false;
  }
  return {
    loading: computed(() => loading.value),
    products: computed(() => products.value),
    search,
  };
}
