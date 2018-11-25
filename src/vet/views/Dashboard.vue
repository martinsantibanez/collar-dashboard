<template>
  <div>
    <h2>Bienvenido {{user.email}}</h2>
    <div class="row">
      <div class="col-6">
        <!-- <generar-charts tipo="TEMPERATURA"></generar-charts> -->
      </div>
      <div class="col-6">
        <!-- <generar-charts tipo="PULSO"></generar-charts> -->
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import GenerarCharts from '@/common/GenerarCharts'
import io from 'socket.io-client';
import { mapState } from 'vuex';


export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  components: {GenerarCharts},
  mounted(){
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
