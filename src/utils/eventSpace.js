import { ref, computed } from "vue";
export default function useEventSpace() {
  const capacity = ref(4);
  const attending = ref(["Tim", "Bob", "Joe"]);
  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });
  function increaseCapacity() {
    capacity.value++; // this is a reactice ref no an object .... cant use capacity++; use.value
  }
  return { capacity, attending, spacesLeft, increaseCapacity };
}