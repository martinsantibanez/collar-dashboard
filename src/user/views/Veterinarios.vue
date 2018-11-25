<template>
  <!-- <v-layout row wrap> -->
  <!-- <v-flex xs12> -->
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card v-for="veterinario in veterinarios" :key="veterinario._id" class="mb-3">
          <v-list two-line subheader class="text-left">
            <v-card-title primary-title>
              <v-avatar color="red" class="mr-3">
                <span class="white--text headline">{{ veterinario.nombre[0].toUpperCase() }}</span>
              </v-avatar>
              <h3 class="headline mb-0">{{veterinario.nombre}}</h3>
            </v-card-title>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon>email</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Email</v-list-tile-title>
                <v-list-tile-sub-title>{{ veterinario.email }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon>phone</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Teléfono</v-list-tile-title>
                <v-list-tile-sub-title>{{ veterinario.telefono }}</v-list-tile-sub-title>
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
import ListaAlertas from '../components/ListaAlertas';
export default {
  data () {
    return {
    }
  },
  computed: mapState('veterinarios', {
      veterinarios: state => state.list,
  }),
  methods: {
    ...mapActions('veterinarios', ['getAllVeterinarios'])
  },
  async created() {
    await this.getAllVeterinarios();
  }
}
</script>