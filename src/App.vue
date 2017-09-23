<template>
  <div id="app">
    <div class="content">
      <side-bar></side-bar>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <div class="background"></div>
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
* {
  box-sizing: border-box;
}
#app {
  position: relative;
  font-family: Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
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
  z-index: 1;
  top: 0;
  left: 0;
  background: #e7e5e4;
}
button {
  height: 40px;
  padding: 0 30px;
  background: #076685;
  color: white;
  border: 0;
  outline: none;
  cursor: pointer;
}

  .main {
    padding-top: 4em;
  }
</style>
