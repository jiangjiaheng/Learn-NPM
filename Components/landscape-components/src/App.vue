<template>
  <div id="app">
    <calculator></calculator>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
html {
  height: 100%;
  background: radial-gradient(circle, white 20%, pink);
}
* {
  margin: 0px;
  padding: 0px;
  font-family: "黑体";
  font-size: 14px;
  font-weight: bold;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
