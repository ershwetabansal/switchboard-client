<template>
  <div class="home">
    <ul>
      <li v-for="number in numbers" >
        <span :class="number.status" class="status" v-on:click.stop.prevent="signInOut"></span>
        <i class="fa fa-pencil" aria-hidden="true" v-on:click="update(number.id)"></i>
        <label>
          {{ number.name }}
        </label>
        <label>
          <i class="fa fa-phone" aria-hidden="true"></i>
          {{ number.phone_number }}
        </label>
        <label>
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          {{ number.start_time }} to {{ number.end_time }} <em>({{ number.timezone.replace('_', ' ') }})</em>
        </label>
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
      update: function (id) {
        this.$router.push({
          name: 'number.edit',
          params: {
            id
          }
        })
      },
      signInOut: function () {
        if (confirm('Are you sure you want to sign in?') === true) {

        }
      }
    },
    created () {
//      this.$store.dispatch('whoAmI')
      this.$store.dispatch('getAllNumbers')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    width: 50%;
    margin: 0 auto;
  }

  li {
    padding: 1.5em;
    background: white;
    margin-bottom: 20px;
    opacity: 0.8;
    cursor: move;
  }

  li .fa-pencil {
    display: none;
  }

  li:hover .fa-pencil {
    float: right;
    display: inline-block;
    cursor: pointer;
    padding: 0 5px;
  }

  .status {
    float: left;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 1px;
    margin-right: 10px;
    cursor: pointer;
  }

  .status.active {
    background: #076685;
  }

  .status.off {
    background: lightgrey;
  }

  li label {
    min-width: 25%;
    display: inline-block;
  }
</style>
