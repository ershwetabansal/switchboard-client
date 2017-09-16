<template>
  <div class="number">
    <h1 v-if="phone_number">Update switchboard number {{ phone_number }}</h1>
    <h1 v-else>Add a number to switchboard</h1>
    <div class="form">
      <form v-on:submit="saveChanges">
        <div>
          <label for="phone_number">Phone number</label>
          <input type="text" id="phone_number" v-model="number.phone_number"/>
        </div>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="number.name"/>
        </div>
        <div>
          <label for="role">Role</label>
          <select id="role" v-model="number.role_id">
            <option value="0">Admin</option>
            <option value="1">SuperAdmin</option>
            <option value="2">User</option>
          </select>
        </div>
        <div>
          <label for="timezone">Timezone</label>
          <select id="timezone" v-model="number.timezone">
            <option value="America/New_York">America/New York</option>
            <option value="Europe/London">Europe/London</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
          </select>
        </div>
        <div v-if="number.schedule !== '4'">
          <label for="start_time">Start time</label>
          <input type="time" id="start_time" v-model="number.start_time">
        </div>
        <div v-if="number.schedule !== '4'">
          <label for="end_time">End time</label>
          <input type="time" id="end_time" v-model="number.end_time">
        </div>
        <div>
          <label for="is-daily">
            <input type="radio" name="schedule" v-model="number.is_daily" id="is-daily">
            Daily
          </label>
          <label for="week-days">
            <input type="radio" name="schedule" v-model="number.is_weekday" id="week-days">
            Week days
          </label>
          <label for="not-active">
            <input type="radio" name="schedule" v-model="number.is_not_active" id="not-active">
            Not active
          </label>
        </div>
        <button type="submit">Save</button>
        <button type="button" v-on:click="goToHome">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'number',
    props: {
      phone_number: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        number: {
          phone_number: '',
          password: '',
          confirm_password: '',
          name: '',
          timezone: 'Europe/London',
          start_time: '09:00',
          end_time: '18:00'
        }
      }
    },
    computed: {
      ...mapGetters({
        numbers: 'allNumbers'
      }),
      getNumberDetails: (phoneNumber) => {
        const filteredNumbers = this.numbers.filter(number => number.phone_number === phoneNumber)
        return filteredNumbers.length === 1 ? filteredNumbers[0] : null
      }
    },
    methods: {
      saveChanges: function () {
        if (this.phone_number) {
          return this.$store.dispatch('updateNumber').then(this.goToHome)
        }
        this.$store.dispatch('addNumber').then(this.goToHome)
      },
      goToHome: function () {
        this.$router.push({name: 'number.index'})
      }
    },
    created: function () {
      if (!this.phone_number) {
        return
      }
      this.phone_number = this.getNumberDetails(this.phone_number)
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
