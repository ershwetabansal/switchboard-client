<template>
  <div class="home">
    <h1>
      {{ title }}
      <button class="pull-right" v-on:click="addNumber">Add a number</button>
    </h1>
    <ul>
      <li v-for="entity in entities">
        <span :class="entity.status" class="status"></span>
        <span>{{ entity.name }}</span>
        <span>{{ entity.phone_number }}</span>
        <span>{{ entity.schedule_string }}</span>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'home',
    data () {
      return {
        title: 'EA-switchboard',
        entities: []
      }
    },
    methods: {
      fetchNumbers: function () {
        this.$http.get('/numbers').then(response => {
          this.entities = response
        }).catch(error => {
          console.log(error)
        })
      },
      addNumber: function () {
        this.$router.push({name: 'number.create', params: {title: 'Add new number to switchboard', phone_number: ''}})
      },
      editNumber: function (number) {
        this.$router.push({name: 'number.edit', params: {phone_number: number}})
      }
    },
    created () {
      this.fetchNumbers()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
