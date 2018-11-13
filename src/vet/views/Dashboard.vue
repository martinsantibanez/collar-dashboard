<template>
  <div>
    Bienvenido {{user.email}}
    <chart :chart-data="datacollection"></chart>
    <code>
     {{data}}
    </code>
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
      data: [],
      datacollection: null,
      socket : io('localhost:4000')
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  components: {Chart},
  mounted(){
    this.socket.on('DATA', (data) => {
      this.pushMax(this.data, data);
      // this.data = [...this.data, data];
      this.generateData();
    });
  },
  methods: {
    generateData(){
      this.datacollection = {
        // labels: [],
        datasets: [
          {
            fill: false,
            label: 'Data One',
            backgroundColor: '#f87979',
            data: this.data
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
