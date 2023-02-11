<template>
  <div id="app" class="home">
    <landing-header />

    <!-- <landing-send-money-section /> -->
    <router-view />

    <landing-footer />
  </div>
</template>

<script>
// import landingSendMoneySection from "@/components/LandingPage/landingSendMoneySection";
import LandingHeader from "@/components/LandingHeader.vue";
import LandingFooter from "@/components/LandingFooter.vue";

// import { onMounted } from "@vue/composition-api";

export default {
  name: "HomePage",
  components: {
    LandingFooter,
    LandingHeader,
    // landingSendMoneySection,
  },

  setup(props, { root }) {
    // const store = root.$store;
    //mounted
    // onMounted(async () => {
    //   if (root.$route.query.token) openResetPasswordModal();
    // });
    // const openResetPasswordModal = () => {
    //   store.dispatch("general/openModal", {
    //     id: "resetPasswordModal",
    //   });
    // };
  },
};
</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
