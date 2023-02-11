<template>
  <button class="btn btn-dark py-2 px-3" :class="classes">
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

<style lang="scss" scoped>
@import "@/assets/scss/core/mixins";
@import "@/assets/scss/core/variables";

.btn {
  color: white;
}
</style>
