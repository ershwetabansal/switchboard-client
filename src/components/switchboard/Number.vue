<template>
  <div class="number">
    <h1 v-if="phone_number">Update switchboard number {{ phone_number }}</h1>
    <h1 v-else>Add a number to switchboard</h1>
    <div class="form">
      <form v-on:submit="addUpdate">
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
  export default {
    name: 'number',
    props: {
      phone_number: {
        type: String,
        default: ''
      }
    },
    data () {
      console.log(this.phone_number)
      return {
        title: '',
        number: {
          phone_number: '',
          password: '',
          confirm_password: '',
          name: '',
          can_manage_switchboard: false,
          timezone: 'Europe/London',
          schedule: '1',
          days: [],
          start_time: '09:00',
          end_time: '18:00'
        }
      }
    },
    methods: {
      goToHome: function () {
        this.$router.push({name: 'number.index'})
      },
      get: function (phoneNumber) {
        this.loading = true
        this.$http.get(`/number/${phoneNumber}`).then(data => {
          this.loading = false
          this.number = data
        }).catch(error => {
          this.loading = false
          console.log(error)
          this.number = {
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
          }
        })
      },
      addUpdate: function () {
        if (this.phone_number) {
          this.$http.post(`/number/${this.phone_number}`, this.number)
            .then(() => this.goToHome())
            .catch(error => {
              console.log(error)
            })
          return
        }
        this.$http.post('/number', this.number)
          .then(() => this.goToHome())
          .catch(error => {
            console.log(error)
          })
      }
    },
    mounted: function () {
      console.log(this.phone_number)
      this.phone_number && this.get(this.phone_number)
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
