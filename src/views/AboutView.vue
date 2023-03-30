<template>
  <div class="about">
    Example functionality 
    <br><br>
    <v-btn @click="runNodeFunction">
      Check location
    </v-btn>
    <br><br>
    {{ receivedText }}
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'App',
  data: () => ({
    receivedText: ''
  }),
  methods: {
    runNodeFunction() {
      ipcRenderer.send('runFunction', 'Run functionality')
      ipcRenderer.once('functionResponse', (event, arg) => {
        console.log('Received message:', arg)
        this.receivedText = arg
      })
    },
  },
}
</script>