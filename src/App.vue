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
  font-family: 'Roboto',sans-serif;
  font-size: 14px;
}
#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  min-height: 100vh;
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

.title {
  position: absolute;
  top: -21px;
  right: -7px;
  color: #767675;
  padding: 2px;
  border: 1px solid #d9d7d5;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.form {
  position: relative;
  background: #ffffff;
  padding: 3.5em;
  width: 50%;
  margin: 0 auto;
  opacity: 0.8;
}
.form-group {
  margin-bottom: 5px;
}
select {
  cursor: pointer;
}
input[type="text"], input[type="time"], select {
  width: 100%;
  height: 3em;
  border: none;
  outline: none;
  padding: 3px 10px;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 1.1em;
  background: #ddf4fc;
}

</style>
