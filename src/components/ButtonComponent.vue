<template>
  <button class="btn btn-dark text-white py-2 px-4" :class="classes">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: "Call to Actions",
    },
    classes: {
      type: String,
    },
  },
};
</script>
