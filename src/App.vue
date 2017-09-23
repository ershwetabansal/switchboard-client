<template>
  <div id="app">
    <div class="content">
      <side-bar></side-bar>
      <div class="main">
        <h1>Switchboard</h1>
        <router-view></router-view>
      </div>
    </div>
    <div class="background"></div>
    <div class="overlay"></div>
  </div>
</template>

<script>
  import sideBar from './components/switchboard/SideBar.vue'
  export default {
    name: 'app',
    components: { sideBar }
  }
</script>

<style>
body {
  margin: 0;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100vh;
}

h1 {
  text-align: center;
}
.content {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
}
.background {
  position: absolute;
  height: 100%;
  width: 100%;
  filter: grayscale(81%) blur(3px);
  z-index: 1;
  top: 0;
  left: 0;
  background: url(/static/images/switchboard-background.jpg);
  -webkit-background-size: cover;
  background-size: cover;
}
.overlay {
  position: absolute;
  background: black;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 2;
  top: 0;
  left: 0;
}
</style>
