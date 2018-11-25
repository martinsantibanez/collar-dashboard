<template>
  <!-- <v-layout row wrap> -->
  <!-- <v-flex xs12> -->
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
    <v-card v-for="mascota in mascotas" :key="mascota._id" class="mb-3">
      <v-list two-line subheader class="text-left">
        <!-- <v-subheader class="display-1">{{mascota.nombre}}</v-subheader> -->
        <!-- <h2 inset>{{mascota.nombre}}</h2> -->
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>pets</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{mascota.nombre}}</v-list-tile-title>
            <v-list-tile-sub-title>{{ mascota.raza }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <lista-alertas :alertas="mascota.alertas"></lista-alertas>
      </v-list>
    </v-card>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListaAlertas from '../components/ListaAlertas';

export default {
    data () {
      return {
        valid: true,
        dialog: false,
        items: [],
      }
    },
    computed: mapState('auth', {
        user: state => state.user,
        mascotas: state => state.mascotas
    }),
    components: { ListaAlertas },
    methods: {
      ...mapActions('auth', ['getMascotas']),
      alertType(gravedad){
        if(gravedad == 'Leve') return 'info';
        else if(gravedad == 'Moderada') return 'warning';
        else if(gravedad == 'Grave') return 'error';
        else return '';
      },
    },
    async created() {
      await this.getMascotas();
    }

}
</script>