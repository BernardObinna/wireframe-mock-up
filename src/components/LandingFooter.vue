<template>
  <div class="content page">
    <nav class="py-0">
      <div class="">
        <div class="d-flex align-items-center">
          <div class="background">
            <BoxComponent />
          </div>

          <div class="my-4 my-lg-0 ms-5">
            <div>
              <h1 class="fw-bold heading">
                Lorem ipsum dolor sit consecteturtur
              </h1>
              <p class="text mt-3 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ButtonComponent />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import BoxComponent from "@/components/BoxComponent.vue";
export default {
  name: "LandingFooter",
  components: { ButtonComponent, BoxComponent },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/core/mixins";
@import "@/assets/scss/core/variables";

.content {
  min-width: 100%;
  min-height: toRem(400px);
  background-color: $color-bg-lgt-grey;

  .heading {
    max-width: toRem(400px);
  }
  .text {
    max-width: toRem(400px);
    font-size: toRem(12px);
  }
  .background {
    height: toRem(400px);
    width: toRem(400px);
    // width: 30%;
    position: relative;
    top: -4em;
  }
}
</style>
