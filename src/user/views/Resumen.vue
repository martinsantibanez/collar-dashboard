<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 class="text-left">
        <div v-for="mascota in mascotas" :key="mascota._id" class="mb-4">
          <div class="info-container">
            <v-layout row align-center>
              <v-flex xs8>
                <v-avatar color="red" class="mr-3" size="52">
                  <span class="white--text headline">{{ mascota.nombre[0] }}</span>
                </v-avatar>
                <h3 class="nombre">{{mascota.nombre}}</h3>
              </v-flex>
              <v-flex xs4>
                <temperatura text="1"></temperatura>

              </v-flex>
            </v-layout>
          </div>
          <v-card class="mt-3">
            <v-card-text>
              <generar-charts tipo="Pulso" :id_collar="mascota.collar"></generar-charts>
            </v-card-text>
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
.nombre{
  display: inline-flex;
  color: #000;
  font-size: 35px;
  font-weight: 500;
  vertical-align: middle;
  line-height: 1;
}

</style>
