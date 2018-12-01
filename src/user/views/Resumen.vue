<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 class="text-left">
        <h2 class="mb-3">Bienvenido {{user.nombre}}</h2>
        <div v-for="mascota in mascotas" :key="mascota._id" class="mb-4">
          <v-card>
            <v-card-title primary-title>
              <v-avatar color="red" class="mr-3">
                <span class="white--text headline">{{ mascota.nombre[0] }}</span>
              </v-avatar>
              <h3 class="headline mb-0">{{mascota.nombre}}</h3>
            </v-card-title>
            <v-card-text>
              <generar-charts tipo="Pulso"></generar-charts>
            </v-card-text>
            <temperatura></temperatura>
          </v-card>
          <lista-alertas :alertas="mascota.alertas"></lista-alertas>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import GenerarCharts from '@/common/GenerarCharts'
// import io from 'socket.io-client';
import { mapState, mapActions } from 'vuex';
import ListaAlertas from '../components/ListaAlertas';
import Temperatura from '../../common/Temperatura';

export default {
  name: 'Dashboard',
  data () {
    return {
      active: null
    }
  },
  computed: mapState('auth', {
    user: state => state.user,
    mascotas: state => state.mascotas
  }),
  components: { ListaAlertas, GenerarCharts, Temperatura },
  mounted(){
    this.getMascotas();
  },
  methods: {
    ...mapActions('auth', ['getMascotas', 'readAlerta']),
    alertType(gravedad){
      if(gravedad == 'Leve') return 'info';
      else if(gravedad == 'Moderada') return 'warning';
      else if(gravedad == 'Grave') return 'error';
      else return '';
    },
    async dismiss(alerta){
      await this.readAlerta(alerta._id);
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
