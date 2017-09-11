<template>
  <div class="home">
    <h1>
      {{ title }}
      <button class="pull-right" v-on:click="create">Add a number</button>
    </h1>
    <p v-if="errorMessage" class="alert">{{ errorMessage }}</p>
    <ul>
      <li v-for="entity in entities" v-on:click="update(entity.phone_number)">
        <span :class="entity.status" class="status" v-on:click="signInOut"></span>
        <span>{{ entity.name }}</span>
        <span>{{ entity.phone_number }}</span>
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
        entities: [],
        errorMessage: ''
      }
    },
    methods: {
      list: function () {
        this.loading = true
        this.$http.get('/numbers').then(response => {
          this.entities = response
          this.loading = false
        }).catch(error => {
          this.loading = false
          this.errorMessage = error.statusText
          this.entities = [{
            status: 'active',
            phone_number: '+34343434',
            password: '',
            confirm_password: '',
            name: 'Sarah howell',
            can_manage_switchboard: true,
            timezone: 'Europe/London',
            schedule: '1',
            days: [],
            start_time: '09:00',
            end_time: '18:00'
          }]
          console.log(error)
        })
      },
      create: function () {
        this.$router.push({
          name: 'number.create',
          params: {
            title: 'Add new number to switchboard',
            phone_number: ''
          }
        })
      },
      update: function (phoneNumber) {
        this.$router.push({
          name: 'number.edit',
          params: {
            phone_number: phoneNumber
          }
        })
      },
      signInOut: function () {

      }
    },
    created () {
      this.list()
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
    line-height: 25px;
  }

  .status {
    float: left;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 4px;
    margin-right: 10px;
  }

  .status.active {
    background: green;
  }

  .status.inactive {
    background: lightgrey;
  }
</style>
