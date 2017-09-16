<template>
  <div class="home">
    <h1>
      Switchboard
      <button class="pull-right" v-on:click="create">Add a number</button>
    </h1>
    <ul>
      <li v-for="number in numbers" v-on:click="update(number.phone_number)">
        <span :class="number.status" class="status" v-on:click.stop.prevent="signInOut"></span>
        <span>{{ number.name }}</span>
        <span>{{ number.phone_number }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      numbers: 'allNumbers',
      myInfo: {
        name: 'name'
      },
      canSeeNumbers: 'canSeeNumbers',
      canManageNumbers: 'canManageNumbers',
      canManageMessages: 'canManageMessages',
      canOverrideSingIn: 'canOverrideSingIn',
      canChangePriority: 'canChangePriority'
    }),
    methods: {
      create: function () {
        this.$router.push({
          name: 'number.create',
          params: {
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
        if (confirm('Are you sure you want to sign in?') === true) {

        }
      }
    },
    created () {
      this.$store.dispatch('whoAmI')
      this.$store.dispatch('getAllNumbers')
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
