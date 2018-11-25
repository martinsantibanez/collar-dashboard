<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-avatar color="red">
          <span class="white--text headline">U</span>
        </v-avatar>
        <h2 class="headline mb-0">Bienvenido {{user.nombre}}</h2>
        <v-card v-for="mascota in mascotas" :key="mascota._id" class="mb-4">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{mascota.nombre}}</h3>
          </v-card-title>
          <v-card-text class="text-left">
            TODO: ACA VA EL Grafico
          </v-card-text>
          <v-alert
            :value="true"
            v-for="alerta in mascota.alertas"
            :key="alerta._id"
            class="text-left"
            type="info"
          >
            <strong>Alerta {{alerta.gravedad}} de {{alerta.tipo}}:</strong> {{alerta.descripcion}}
          </v-alert>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
// import GenerarCharts from '../components/GenerarCharts'
// import io from 'socket.io-client';
import { mapState, mapActions } from 'vuex';


export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  computed: mapState('auth', {
    user: state => state.user,
    mascotas: state => state.mascotas
  }),
//   components: {GenerarCharts},
  mounted(){
    this.getMascotas();
  },
  methods: {
    ...mapActions('auth', ['getMascotas']),
    alertType(gravedad){
      console.log(gravedad);
      if(gravedad == 'Leve') return 'info';
      else if(gravedad == 'Moderada') return 'warning';
      else if(gravedad == 'Grave') return 'error';
      else return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
