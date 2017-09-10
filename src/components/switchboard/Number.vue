<template>
  <div class="number">
    <h1>{{ title }}</h1>
    <div class="form">
      <form action="/" method="post">
        <div>
          <label for="phone_number">Phone number</label>
          <input type="text" id="phone_number" v-model="entity.phone_number"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="entity.password"/>
        </div>
        <div>
          <label for="confirm_password">Confirm password</label>
          <input type="password" id="confirm_password" v-model="entity.confirm_password"/>
        </div>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="entity.name"/>
        </div>
        <div>
          <label for="can_manage_switchboard">
            <input type="checkbox" id="can_manage_switchboard" v-model="entity.can_manage_switchboard"/>
            Can manage switchboard numbers?
          </label>
        </div>
        <div>
          <label for="timezone">Timezone</label>
          <select id="timezone" v-model="entity.timezone">
            <option value="America/New_York">America/New York</option>
            <option value="Europe/London">Europe/London</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
          </select>
        </div>
        <div v-if="entity.schedule !== '4'">
          <label for="start_time">Start time</label>
          <input type="time" id="start_time" v-model="entity.start_time">
        </div>
        <div v-if="entity.schedule !== '4'">
          <label for="end_time">End time</label>
          <input type="time" id="end_time" v-model="entity.end_time">
        </div>
        <div>
          <label for="days">Schedule</label>
          <select id="days" v-model="entity.schedule">
            <option value="1">Every day</option>
            <option value="2">Every work day</option>
            <option value="3">Selective days</option>
            <option value="4">Do not schedule</option>
          </select>
        </div>
        <div v-if="entity.schedule === '3'">
          <label for="monday"><input type="checkbox" id="monday" v-model="entity.days"/>Monday</label>
          <label for="tuesday"><input type="checkbox" id="tuesday" v-model="entity.days"/>Tuesday</label>
          <label for="wednesday"><input type="checkbox" id="wednesday" v-model="entity.days"/>Wednesday</label>
          <label for="thursday"><input type="checkbox" id="thursday" v-model="entity.days"/>Thursday</label>
          <label for="friday"><input type="checkbox" id="friday" v-model="entity.days"/>Friday</label>
          <label for="saturday"><input type="checkbox" id="saturday" v-model="entity.days"/>Saturday</label>
          <label for="sunday"><input type="checkbox" id="sunday" v-model="entity.days"/>Sunday</label>
        </div>
        <button type="submit">Save</button>
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
      this.phone_number = this.phone_number || ''
      return {
        entity: {
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
    mounted: function () {
      console.log(this.entity)
      if (this.phone_number) {
        this.$http.get(`/number/${this.phone_number}`)
      }
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
