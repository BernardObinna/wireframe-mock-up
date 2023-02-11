<template>
  <nav class="navbar sticky-top navbar-light bg-white content page">
    <div class="container-fluid px-0">
      <router-link to="/" class="navbar-brand">
        <h4 class="fw-bold">
          Logo
          <span class="dot"></span>
        </h4>
      </router-link>
      <img
        type="button"
        id="nav-toggle"
        class="d-lg-none"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        src="@/assets/images/icons/nav-toggle.svg"
        alt=""
      />
      <div class="collapse navbar-collapse d-lg-none" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/services">Services</router-link>
          <router-link class="nav-link" to="/products">Products</router-link>
        </div>
      </div>

      <div class="nav-links d-none d-lg-flex">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/services">Services</router-link>
        <router-link class="nav-link" to="products">Products</router-link>
      </div>

      <div class="nav-links d-none d-lg-flex">
        <ButtonComponent text="Call to Actions"></ButtonComponent>
      </div>
    </div>
  </nav>
</template>
<script>
import { computed, reactive, toRefs } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "LandingHeader",
  components: { ButtonComponent },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/core/mixins";
@import "@/assets/scss/core/variables";

.page {
  padding: 0 8%;
  @include screen("large") {
    margin-bottom: 5em;
  }
}
#nav-toggle {
  max-width: toRem(32px);
  max-height: toRem(32px);
}

.content {
  padding-top: toRem(16px);
  padding-bottom: toRem(16px);
  min-height: toRem(100px);
}

.navbar-brand {
  font-style: normal;
  font-weight: 500;
  font-size: toRem(16px);
  line-height: toRem(40px);
  color: black;
  @include screen("med") {
    font-size: toRem(24px);
    line-height: toRem(30px);
  }
}

.nav-links {
  display: flex;
  align-items: center;

  .nav-link {
    font-size: toRem(14px);
    line-height: toRem(20px);
    color: $color-text-grey;
    font-weight: bold;
    margin-right: toRem(40px);
  }

  .dropdown {
    font-family: "Circular", sans-serif !important;

    .dropdown-toggle {
      display: flex;
      &:after {
        align-self: center;
        margin-left: toRem(9px);
        border-top-color: $color-grey;
      }
    }
    .dropdown-menu {
      margin-top: 0.4rem !important;
    }
  }
}

.dot {
  display: inline-block;
  border: 4px solid $color-bg-lgt-grey;
  width: 1px;
  height: 1px;
  border-radius: 50%;
}
</style>
