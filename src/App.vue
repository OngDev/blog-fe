<template>
  <Header />
  <Footer />
</template>

<script>
import Footer from "./pages/Footer.vue";
import Header from "./pages/Header.vue";
import store from "./store/index";

export default {
  components: { Footer, Header },
  data: () => ({
    shareState: store.state,
  }),
  mounted() {
    store.removeUserOutOfState();
  },
};
</script>
<style lang="less"/>
