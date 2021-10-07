<template>
  <input
    type="checkbox"
    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label v-if="label" class="font-medium text-gray-700">{{ label }}</label>
</template>

<script>
// box model {margin => Box (content) | width | height}  => padding => border } margin
// flex box (display flex)  justify-content center moves element to center horizontally
// align items: center = align items vertically
// use grid display:grid grid-template-columns: 1fr 500px 1fr
// grid-template-row: 100px 200px
// place-item: center;
// article { width: clamp(200px, 50%, 600px);} // min preffered max clamp
/* use root selectors
:root {
  --text-color: rgb(255,0,0);
 }

 p { 
   --text-color: green // will override original
   color : var(--text-color) 
   }

   h1 {  
     color: var( --text-color) 
     }

     h2 {  
     color: var( --text-color) 
     }
     etc.
 

 composition approach

 :root {
  --r: 255;
  --g: 0;
  --b: 0;
  --text-color: rgb(var(--r),(--g),(--b)
 }
*/
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
