<template>
  <div class="box" :class="size"></div>
</template>

<script>
export default {
  name: "BoxComponent",
  props: {
    size: {
      type: String,
      default: "lg",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/core/mixins";
@import "@/assets/scss/core/variables";

.box {
  background-color: $color-img-bg-drk-grey;
  //   max-width: toRem(320px);
  &.lg {
    // width: toRem(400px);
    // height: toRem(500px);
    width: 100%;
    height: 100%;
  }
}
</style>
