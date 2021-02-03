<template>
  <footer>
    <div class="copyright">
      2020 © Ong Dev Project.<br />All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: "Avenir Next";
  src: url("../fonts/AvenirNextLTPro-Regular.otf");
}
footer {
  background-color: #312c2e;
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  bottom: 0;
}
.copyright {
  height: 16px;
  color: #fafafa;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 16px;
  padding: 16px 16px;
  display: inline-block;
  margin: 6px 50px 26px 50px;
}
</style>