<template>
  <div class="popular-story">
    <div class="popular-container">
      <div
        class="popular-img"
        v-for="(image, index) in popularImages"
        :key="index"
      >
        <img :src="image.src" :alt="'popular' + ++index" />
        <span>{{ image.title }}</span>
        <div class="category">{{ image.category }}</div>
      </div>
    </div>
    <div class="swipe">
      <i class="arrow-left"></i>Swipe to discover more
      <span>popular</span> stories<i class="arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularImages: [
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          category: "Chuyện của tôi",
          src: require("../.././src/assets/popular1.png"),
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          category: "Gamer",
          src: require("../.././src/assets/popular2.png"),
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          category: "Kĩ thuật",
          src: require("../.././src/assets/popular3.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.popular-story {
  width: 100%;
  height: 330px;
  margin-top: 30px;
}
.popular-container {
  margin: auto;
  height: 300px;
  width: 990px;
}
.popular-img {
  width: 300px;
  height: 300px;
  float: left;
  margin: auto;
  margin-right: 30px;
  position: relative;
}
.popular-img img {
  border-radius: 0.3rem;
}
.popular-img span {
  position: absolute;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2em;
  line-height: 23px;
  color: #fafafa;
  width: 283px;
  height: 46px;
  left: 9px;
  top: 215px;
}
.category {
  position: absolute;
  background-color: #262626;
  height: 20px;
  left: 9px;
  top: 267px;
  padding: 2px 7px 2px 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 0.7em;
  line-height: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fbfbfb;
}
.swipe {
  height: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 0.8em;
  line-height: 141.6%;
  color: rgba(0, 0, 0, 0.4);
  float: right;
  width: 37%;
  padding: 8px 8px;
}
.swipe span {
  color: orange;
}
.arrow-left {
}
.arrow-right {
}
</style>