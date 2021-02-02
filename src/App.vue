<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./pages/Footer.vue";
import store from "./store/index";

export default {
  components: { Footer },
  data: () => ({
    shareState: store.state,
  }),
  mounted() {
    store.removeUserOutOfState();
  },
};
</script>
<style lang="less"/>
