<template>
  <div id="sidebar" v-bind:class="{ expanded: expand }">
    <div v-if="!expand">
      <i class="fa fa-bars" aria-hidden="true" v-on:click="expandSideBar"></i>
    </div>
    <div v-if="expand">
      <div>
        <i class="fa fa-times" aria-hidden="true" v-on:click="expandSideBar"></i>
      </div>
      <div>
        <ul>
          <li v-on:click="goToHome">
            Home
          </li>
          <li v-on:click="create">
            Add new number
          </li>
          <li>
            Call routing options
          </li>
          <li>
            Manage speak messages
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        expand: false
      }
    },
    methods: {
      goToHome: function () {
        this.$router.push({name: 'number.index'})
        this.expand = false
      },
      expandSideBar: function () {
        this.expand = !this.expand
      },
      create: function () {
        this.$store.dispatch('setCurrentNumber')
        this.$router.push({
          name: 'number.create',
          params: {
            id: ''
          }
        })
        this.expand = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  i.fa {
    cursor: pointer;
  }
  #sidebar {
    position: fixed;
    height: 100%;
    padding: 15px;
    background: #076685;
    color: white;
  }
  #sidebar.expanded {
    width: 200px;
  }

  #sidebar > div > div {
    margin-bottom: 10px;
  }
  ul {
    padding-left: 0;
    list-style-type: none;
    margin: 0 -15px;
  }
  ul > li {
    padding: 10px;
    border-bottom: 1px solid #117393;
  }
  ul > li:last-of-type {
    border-bottom: none;
  }
  ul > li:hover {
    background: #e7e5e4;
    color: black;
    cursor: pointer;
  }
</style>
