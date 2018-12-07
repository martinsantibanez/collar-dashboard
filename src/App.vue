<template>
  <div id="app">
    <router-view/>
    <error></error>
  </div>
</template>

<script>
import Error from './Error';
export default {
  name: 'App',
  components: {
    Error
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: ease 0.2s;
}
</style>
