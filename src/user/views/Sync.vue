<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Ubica el identificador de tu dispositivo
      <!-- <small>Summarize if needed</small> -->
    </v-stepper-step>

    <v-stepper-content step="1">
      <div>
        <img src="data:image/jpeg;base64,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" alt="">
      </div>
      <!-- <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card> -->
      <v-btn color="accent" @click="e6++">Listo</v-btn>
      <v-btn flat @click="$router.push({name: 'MisMascotas'})">Cancelar</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Introduce el identificador</v-stepper-step>

    <v-stepper-content step="2">
      <v-text-field label="ID Collar" v-model="collar" required></v-text-field>
      <v-btn color="accent" @click="e6++">Siguiente</v-btn>
      <v-btn flat @click="e6--">Volver</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Revisa que los datos sean correctos:</v-stepper-step>

    <v-stepper-content step="3">
      <v-list two-line subheader>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon>pets</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Mascota</v-list-tile-title>
            <v-list-tile-sub-title>{{ mascota.nombre }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon>settings_input_antenna</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Collar</v-list-tile-title>
            <v-list-tile-sub-title>{{ collar }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn color="accent" @click="realizar()">Finalizar</v-btn>
      <v-btn flat @click="e6--">Volver</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data () {
    return {
      e6: 1,
      collar: ''
    }
  },
  props: ['id_mascota'],
  computed: mapState('mascotas', {
    mascota: state => state.mascota
  }),
  created(){
    this.getMascotaById(this.id_mascota);
  },
  methods: {
    ...mapActions('mascotas', ['sincronizar', 'getMascotaById']),
    async realizar(){
      await this.sincronizar( { id_mascota: this.id_mascota, id_collar: this.collar } );
      this.$router.push({name: 'MisMascotas'})
    }
  }
}
</script>