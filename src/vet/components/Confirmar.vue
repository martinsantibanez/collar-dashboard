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
          {{titulo}}
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
      estado: false,
    }
  },
  props: {
    titulo: {
      type: String,
      default: "¿Seguro que desea eliminar?"
    }
  },
  methods: {
    // confirmar(){
    // }
  }
}
</script>
