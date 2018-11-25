<template>
  <!-- <v-layout row wrap> -->
  <!-- <v-flex xs12> -->
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
    <v-card v-for="mascota in mascotas" :key="mascota._id" class="mb-3">
      <v-list two-line subheader class="text-left">
        <v-card-title primary-title>
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
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>warning</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Alertas</v-list-tile-title>
            <v-list-tile-sub-title>{{ mascota.alertas.length }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
      return {
        valid: true,
        dialog: false,
        items: [],
        nameRules: [
          v => !!v || 'Debes introducir un nombre'
        ],
      }
    },
    computed: mapState('auth', {
        user: state => state.user,
        mascotas: state => state.mascotas
    }),
    methods: {
      ...mapActions('auth', ['getPerfilPropio', 'editPerfilPropio', 'getMascotas']),
      async editarPerfil(){
        try {
          await this.editPerfilPropio(this.user);
          await this.getPerfilPropio();
          this.dialog = false;
        } catch(e) {
          console.log(e)
          // this.errors.push(e)
        }
      }
    },
    async created() {
        await this.getMascotas();
    }

}
</script>