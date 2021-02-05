<template>
  <header>
    <div class="logo">Ông Dev<span>.</span></div>
    <div class="title">
      <span>my stories,</span> as <span>an engineer, developer,</span> and
      <span>gamer.</span>
    </div>
    <div class="search">
      <img src="../assets/search.png" alt="btnSearch" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap");

@font-face {
  font-family: "Avenir Next";
  src: url("../fonts/AvenirNextLTPro-Regular.otf");
}

header {
  width: 100%;
  height: 75px;
}
.logo {
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  line-height: 38px;
  letter-spacing: -0.06em;
  display: inline-block;
  margin-top: 33px;
  margin-bottom: 4px;
  width: 20%;
  text-align: center;
}
.logo span {
  color: orange;
}
.title {
  font-family: "Abhaya Libre";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: inline-block;
  margin-top: 43px;
  margin-bottom: 3px;
  width: 60%;
  text-align: center;
}
.title span {
  border-bottom: 1px dashed #6a6a6a;
  color: #6a6a6a;
}
.search {
  margin-top: 42px;
  margin-bottom: 4px;
  display: inline-block;
  width: 20%;
}
</style>