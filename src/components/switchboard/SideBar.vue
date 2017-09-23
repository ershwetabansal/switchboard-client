<template>
  <div class="sidebar">
    <div class="hide-on-hover">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="show-on-hover">
      <button v-on:click="create">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Add new number
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      create: function () {
        this.$router.push({
          name: 'number.create',
          params: {
            phone_number: ''
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    position: fixed;
    height: 100%;
    width: 50px;
    background: #450b0b;
    padding-top: 12px;
    text-align: center;
    transition: width 0.3s;
  }
  .sidebar .show-on-hover {
    display: none;
  }
  .sidebar:hover {
    width: 200px;
  }
  .sidebar:hover .hide-on-hover{
    display: none;
  }
  .sidebar:hover .show-on-hover {
    display: block;
  }
  button {
    /*background: transparent;*/
    /*border: 0;*/
    color: black;
    outline: 0;
  }
</style>
