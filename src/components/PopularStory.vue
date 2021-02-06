<template>
  <!-- <div class="popular-story">
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
      <img src="../assets/arrow-left.png" />
      Swipe to discover more <span>popular</span> stories
      <img src="../assets/arrow-right.png" />
    </div>
  </div> -->
  <div class="popular-story">
    <el-carousel :interval="4000" class="popular-container" type="card">
      <el-carousel-item
        class="popular-img"
        v-for="(image, index) in popularImages"
        :key="index"
      >
        <img :src="image.src" :alt="'popular' + ++index" />
        <span>{{ image.title }}</span>
        <div class="category">{{ image.category }}</div>
      </el-carousel-item>
    </el-carousel>
    <div class="swipe">
      <img src="../assets/arrow-left.png" />
      Swipe to discover more <span>popular</span> stories
      <img src="../assets/arrow-right.png" />
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
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          category: "Test",
          src: require("../.././src/assets/logo.png"),
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          category: "Test",
          src: require("../.././src/assets/logo.png"),
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
  height: 330px;
  width: 990px;
  position: relative;
}
.popular-img {
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: auto;
  margin-right: 30px;
}
.popular-img img {
  position: absolute;
  background: linear-gradient(to bottom, transparent, #2626266f 95%);
  width: 300px;
  height: 300px;
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
  padding: 8px 8px;
  display: inline-block;
  margin-left: 61.5%;
}
.swipe span {
  color: orange;
}
.swipe img {
  display: inline-block;
  width: 20px;
}
</style>