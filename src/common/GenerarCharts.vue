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
  name: 'Dashboard',
  props: ['id_mascota', 'tipo'], //tipo: Temperatura o Pulso
  data () {
    return {
      msg: 'Welcome to dashboard',
      arrayDATA: [],
      datacollection: null,
      socket : io(Socket.URL)
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  components: {Chart},
  mounted(){
    this.socket.on(this.tipo, (data) => {
      this.pushMax(this.arrayDATA, data);
      this.generateData();
    });
  },
  methods: {
    generateData(){
      this.datacollection = {
        datasets: [
          {
            fill: false,
            label: this.tipo,
            backgroundColor: '#f87979',
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
