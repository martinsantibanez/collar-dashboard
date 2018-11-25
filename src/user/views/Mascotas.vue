<template>
  <!-- <v-layout row wrap> -->
  <!-- <v-flex xs12> -->
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
    <v-card v-for="mascota in mascotas" :key="mascota._id" class="mb-3">
      <v-list two-line subheader class="text-left">
        <v-card-title primary-title>
          <v-avatar color="red" class="mr-3">
            <span class="white--text headline">{{ mascota.nombre[0] }}</span>
          </v-avatar>
          <h3 class="headline mb-0">{{mascota.nombre}}</h3>
        </v-card-title>
        <!-- <v-subheader class="display-1">{{mascota.nombre}}</v-subheader> -->
        <!-- <h2 inset>{{mascota.nombre}}</h2> -->
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>pets</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Raza</v-list-tile-title>
            <v-list-tile-sub-title>{{ mascota.raza }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>access_time</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Año de nacimiento</v-list-tile-title>
            <v-list-tile-sub-title>{{ mascota.nacimiento }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar @click="ir({name: 'Sync', params: {id: mascota._id}})">
          <v-list-tile-avatar>
            <v-icon>settings_input_antenna</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Sincronizar collar</v-list-tile-title>
            <v-list-tile-sub-title v-if="mascota.collar">Sincronizado con {{ mascota.collar }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar @click="">
          <v-list-tile-avatar>
            <v-icon>camera</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Cambiar foto</v-list-tile-title> 
            <!-- TODO -->
            <!-- <v-list-tile-sub-title>{{ mascota.nacimiento }}</v-list-tile-sub-title> -->
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
  components: { ListaAlertas },
  computed: mapState('auth', {
      user: state => state.user,
      mascotas: state => state.mascotas
  }),
  methods: {
    ...mapActions('auth', ['getMascotas']),
    ir(route){
      this.$router.push(route);
    }
  },
  async created() {
      await this.getMascotas();
  }
}
</script>