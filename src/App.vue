<template>
  <div id="app">
    <side-bar></side-bar>
    <div class="main">
      <router-view></router-view>
    </div>
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
