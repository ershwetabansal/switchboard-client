<template>
  <div id="messages">
    <button v-on:click="addNewMessage" v-if="!withBlankMessage"
    id="add-message">Add new message</button>
    <ul>
      <li v-for="message in messages">
        <input type="text" v-model="message.name" placeholder="Identifier"
               class="new-message" v-if="!message.id" v-validate="'required'">
        <textarea cols="30" rows="3" v-model="message.message" placeholder="Message"
                  class="new-message" v-if="!message.id" v-validate="'required'"></textarea>
        <input type="text" v-model="message.name" placeholder="Identifier" v-if="message.id"
               v-validate="'required'">
        <textarea cols="30" rows="3" v-model="message.message" placeholder="Message" v-if="message.id"
                  v-validate="'required'"></textarea>
        <button v-on:click="saveMessage(message)" class="save">Save</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        withBlankMessage: false
      }
    },
    computed: {
      messages () {
        const messages = []
        if (this.withBlankMessage) {
          messages.push({
            name: '',
            message: ''
          })
        }
        return messages.concat(JSON.parse(JSON.stringify(this.$store.state.messages.messages)))
      }
    },
    methods: {
      saveMessage (message) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store.dispatch('addMessage', message)
            this.withBlankMessage = false
          }
        })
      },
      addNewMessage () {
        this.withBlankMessage = true
        console.log(this.$refs)
      }
    },
    created () {
      this.$store.dispatch('getAllMessages')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #messages {
    padding: 0;
    width: 50%;
    margin: 0 auto;
  }

  ul {
    padding-left: 0;
    list-style-type: none;
  }

  ul > li {
    background: white;
    padding: 10px;
    margin-bottom: 15px;
  }
  input {
    width: 20%;
    vertical-align: top;
    margin-right: 10px;
  }
  textarea {
    width: 63%;
    height: 46px;
    border: 1px solid #ddf4fc;
    padding: 7px;
    background: #ddf4fc;
    outline: none;
    resize: vertical;
    margin-right: 10px;
  }
  button.save {
    vertical-align: top;
    height: 45px;
  }
  #add-message {
    position: absolute;
    top: 35px;
    right: 20px;
  }
  .new-message {
    border: 1px solid #076685;
  }
</style>
