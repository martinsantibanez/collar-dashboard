<template>
  <!-- TODO Mejorar Diseño de esto -->
    <v-dialog
      v-model="estado"
      width="500">
      <slot name="boton" slot="activator"></slot>
      <v-card>
        <v-card-title
          class="title lighten-2"
          primary-title
        >
          ¿Seguro que desea eliminar?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="estado = false"
          >
            Cancelar
          </v-btn>
          <v-btn @click="$emit('confirmar')">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Confirmar',
  data(){
    return {
      estado: false
    }
  },
  // props: ['estado'],
  methods: {
    // confirmar(){
    // }
  }
}
</script>
