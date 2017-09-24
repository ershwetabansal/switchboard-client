<template>
  <div id="number">
    <div class="form">
      <div class="title">
        <span v-if="id">Update switchboard number</span>
        <span v-else>Add new number to switchboard</span>
      </div>
      <form v-on:submit.prevent="validateBeforeSubmit">
        <div class="form-group">
          <label for="phone_number" class="sr-only">Phone number</label>
          <input type="text" id="phone_number" v-model="number.phone_number" v-validate="'required'"
                 placeholder="+44 8989898989" name="phone_number"/>
          <div v-show="errors && errors.has('phone_number')">{{ errors.first('phone_number') }}</div>
        </div>
        <div class="form-group">
          <label for="name" class="sr-only">Name</label>
          <input type="text" id="name" v-model="number.name" placeholder="Joe Bloggs" v-validate="'required'" name="name"/>
          <div v-show="errors && errors.has('name')">{{ errors.first('name') }}</div>
        </div>
        <div v-if="number.schedule !== '4'" id="schedule" class="form-group">
          <input type="time" id="start_time" v-model="number.start_time"
                 v-validate="'required'" name="start_time">
          <label>to</label>
          <input type="time" id="end_time" v-model="number.end_time"
                 v-validate="'required'" name="end_time">
          <label>in</label>
          <select id="timezone" v-model="number.timezone"
                  v-validate="'required'" name="timezone">
            <option value="America/New_York">America/New York</option>
            <option value="Europe/London">Europe/London</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
          </select>
          <div v-show="errors && errors.has('start_time')">{{ errors.first('start_time') }}</div>
          <div v-show="errors && errors.has('end_time')">{{ errors.first('end_time') }}</div>
          <div v-show="errors && errors.has('timezone')">{{ errors.first('timezone') }}</div>
        </div>
        <div id="schedule-frequency">
          <label for="week-days">
            <input type="radio" name="schedule" v-model="number.schedule" value="weekday" id="week-days">
            Week days
          </label>
          <label for="is-daily">
            <input type="radio" name="schedule" v-model="number.schedule" value="daily" id="is-daily">
            Daily
          </label>
          <label for="not-active">
            <input type="radio" name="schedule" v-model="number.schedule" value="off" id="not-active">
            Do not schedule
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
      id: {
        type: String,
        default: ''
      }
    },
    computed: {
      ...mapGetters({
        numbers: 'allNumbers',
        number: 'currentNumber'
      })
    },
    methods: {
      saveChanges: function () {
        if (this.id) {
          return this.$store.dispatch('updateNumber', this.number).then(this.goToHome)
        }
        this.$store.dispatch('addNumber', this.number).then(this.goToHome)
      },
      goToHome: function () {
        this.$router.push({name: 'number.index'})
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.saveChanges()
          }
        })
      }
    },
    created: function () {
      if (!this.id || this.number.id) {
        return
      }
      this.$store.dispatch('getNumber', this.id)
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
  #schedule, #schedule-frequency {
    margin-bottom: 20px;
  }
  #schedule input[type="time"] {
    width: 15%;
    cursor: text;
  }
  #schedule label {
    display: inline-block;
    width: 3%;
    text-align: center;
  }
  #schedule select {
    width: 60%;
    float: right;
  }
  .sr-only {
    display: none;
  }
  button {
    margin-right: 5px;
  }

</style>
