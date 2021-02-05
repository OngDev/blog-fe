<template>
  <!-- <router-view /> -->
  <Header />
  <Popular-story />
  <Footer />
</template>

<script>
import PopularStory from "./components/PopularStory.vue";
import Footer from "./pages/Footer.vue";
import Header from "./pages/Header.vue";
import store from "./store/index";

export default {
  components: { Footer, Header, PopularStory },
  data: () => ({
    shareState: store.state,
  }),
  mounted() {
    store.removeUserOutOfState();
  },
};
</script>
<style lang="less"/>
