<template>
  <div class="content page">
    <div class="">
      <section class="section-1 d-lg-flex">
        <div class="">
          <div>
            <h1 class="fw-bold heading">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p class="text mt-3 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="d-flex">
              <ButtonComponent />
              <ButtonComponent
                classes="ms-2 text-dark fw-bold bg-white"
                text="See Workspace"
              />
            </div>
          </div>
        </div>

        <div class="position-relative ms-lg-auto">
          <div class="background mt-5 mt-lg-0">
            <BoxComponent />
          </div>
          <div class="mini-background">
            <BoxComponent classes="dark" />
          </div>
        </div>
      </section>

      <!-- second section -->
      <section class="section-2 d-lg-flex justify-content-lg-between">
        <div>
          <h6 class="fw-bold heading">Header Text</h6>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>

        <div class="background mt-5 mt-lg-0">
          <BoxComponent />
        </div>

        <div class="align-self-end mt-5">
          <h6 class="fw-bold heading">Header Text</h6>
          <p class="text mt-3 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
      </section>
    </div>
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
  //   margin-top: 5em;
  margin-bottom: 10em;

  .heading {
    @include screen("large") {
      max-width: toRem(300px);
    }
  }
  .text {
    max-width: toRem(360px);
    font-size: toRem(12px);
  }
  .background {
    height: toRem(400px);
    width: 100%;
    max-width: toRem(400px);
    position: relative;
    // right: toRem(90px);
  }
  .mini-background {
    height: toRem(200px);
    width: toRem(200px);
    position: absolute;
    top: 0;
    @include screen("large") {
      right: toRem(0px);
      top: toRem(-60px);
    }
  }

  .section-1 {
    .background {
      @include screen("large") {
        width: toRem(400px);
        right: 20%;
      }
      //   @include screen("large") {
      //     width: toRem(400px);
      //     right: 10%;
      //   }
    }
  }
  .section-2 {
    margin-top: toRem(120px);
    .text {
      @include screen("large") {
        max-width: toRem(220px);
      }
    }
  }
}
</style>
