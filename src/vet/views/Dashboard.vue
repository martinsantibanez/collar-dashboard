<template>
  <div>
    Bienvenido {{user.email}}
    <div class="row">
      <div class="col-6">
      
        <chart :chart-data="datacollectionTEMP"></chart>
      </div>

      <div class="col-6">
        <chart :chart-data="datacollectionPULSO"></chart>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import Chart from '../components/Chart'
import io from 'socket.io-client';
import { mapState } from 'vuex';


export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to dashboard',
      arrayTEMP: [],
      datacollectionTEMP: null,
      arrayPULSO: [],
      datacollectionPULSO: null,
      socket : io('localhost:4000')
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  components: {Chart},
  mounted(){
    this.socket.on('TEMPERATURA', (temp) => {
      // console.log("got temp")
      this.pushMax(this.arrayTEMP, temp);
      this.generateDataTEMP();
    });
    this.socket.on('PULSO', (temp) => {
      this.pushMax(this.arrayPULSO, temp);
      this.generateDataPULSO();
    });
  },
  methods: {
    generateDataTEMP(){
      this.datacollectionTEMP = {
        // labels: [],
        datasets: [
          {
            fill: false,
            label: 'Temperatura',
            backgroundColor: '#f87979',
            data: this.arrayTEMP
          }
        ]
      }
    },
    generateDataPULSO(){
      this.datacollectionPULSO = {
        // labels: [],
        datasets: [
          {
            fill: false,
            label: 'Pulso',
            backgroundColor: '#f87979',
            data: this.arrayPULSO
          }
        ]
      }
    },
    pushMax(array, value){
      if (array.length >= 10) {
        array.splice(0, array.length - 10 + 1);
     	}
      return array.push(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
