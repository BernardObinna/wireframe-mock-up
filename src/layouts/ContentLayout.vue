<template>
  <div>
    <landing-header />
    <slot></slot>
    <landing-footer />
  </div>
</template>

<script setup>
import LandingHeader from "@/components/LandingHeader.vue";
import LandingFooter from "@/components/LandingFooter.vue";
</script>

<style lang="scss" scoped></style>
