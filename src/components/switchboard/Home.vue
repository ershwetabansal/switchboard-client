<template>
  <div id="home">
    <draggable v-model="numbers" :options="{draggable:'.item'}">
      <div v-for="number in numbers" :key="number.id" class="item">
        <span :class="number.status" class="status" v-on:click.stop.prevent="signInOut"></span>
        <i class="fa fa-pencil" aria-hidden="true" v-on:click="update(number)"></i>
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
      </div>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    computed: {
      numbers: {
        get () {
          return this.$store.state.numbers.numbers
        },
        set (value) {
          console.log(value)
          this.$store.dispatch('changePriority', value)
        }
      }
    },
    methods: {
      create: function () {
        this.$router.push({
          name: 'number.create',
          params: {
            phone_number: ''
          }
        })
      },
      update: function (number) {
        this.$store.dispatch('setCurrentNumber', number)
        this.$router.push({
          name: 'number.edit',
          params: { id: number.id.toString() }
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
  #home {
    padding: 0;
    width: 50%;
    margin: 0 auto;
  }

  .item {
    padding: 1.5em;
    background: white;
    margin-bottom: 20px;
    opacity: 0.8;
    cursor: move;
  }

  .item .fa-pencil {
    display: none;
  }

  .item:hover .fa-pencil {
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

  .item label {
    min-width: 25%;
    display: inline-block;
    cursor: move;
  }
</style>
