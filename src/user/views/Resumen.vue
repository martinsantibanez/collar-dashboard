<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="headline mb-0">Bienvenido {{user.nombre}}</h2>
        <v-avatar color="red">
          <span class="white--text headline">U</span>
        </v-avatar>
        <div v-for="mascota in mascotas" :key="mascota._id" class="mb-4">
            <h3 class="headline mb-0 text-left">{{mascota.nombre}}</h3>
            <v-tabs
            v-model="mascota.active"
            color="cyan"
            dark
            slider-color="yellow"
            >
              <v-tab ripple>
                Temperatura
              </v-tab>
              <v-tab ripple>
                Pulso
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <generar-charts tipo="Temperatura"></generar-charts>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <generar-charts tipo="Pulso"></generar-charts>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
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
  components: { ListaAlertas, GenerarCharts },
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
