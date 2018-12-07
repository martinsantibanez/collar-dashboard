<template>
  <div>
      <chart :chart-data="datacollection"></chart>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from './Chart'
import io from 'socket.io-client';
import Socket from './Socket.js';
import { mapState } from 'vuex';

export default {
  name: 'GenerarCharts',
  props: ['id_collar', 'tipo'], //tipo: Temperatura o Pulso
  data () {
    return {
      msg: 'Welcome to dashboard',
      arrayDATA: [],
      datacollection: null,
      socket : Socket
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  components: {Chart},
  created(){
    this.socket.emit('room', this.id_collar);
    this.socket.on(this.tipo, (data) => {
      this.pushMax(this.arrayDATA, data);
      this.generateData();
    });
  },
  beforeDestroy(){
    this.socket.emit('salir', this.id_collar);
  },
  methods: {
    generateData(){
      var color="#d81b60";
      this.datacollection = {
        datasets: [
          {
            fill: false,
            label: this.tipo,
            backgroundColor: color,
            pointBackgroundColor: '#000000',
            pointBorderColor: '#000000',
            borderColor: color,
            data: this.arrayDATA
          }
        ]
      }
    },
    pushMax(array, value){
      if (array.length >= 10) {
        array.splice(0, array.length - 10 + 1);
     	}
      return array.push(value);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
