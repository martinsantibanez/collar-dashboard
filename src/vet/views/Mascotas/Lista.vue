<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="mascotas" :fields="tableFields">
      <template slot="accion" slot-scope="data">
        <b-button :to="{ name: 'MascotasEditar', params: { id: data.item._id } }">Editar</b-button>
        <b-button @click="deleteMascota(data.item._id)">Eliminar</b-button>
      </template>
    </b-table>
    <!-- <b-button :to="{name: 'MascotasCrear'}" variant="success">Agregar</b-button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Usuarios',
  data () {
    return {
      tableFields: ['nombre', 'raza', 'nacimiento', 'dueno.nombre', 'accion'],
      msg: 'Welcome to mascotas'
    }
  },
  computed: mapState('mascotas', {
    mascotas: state => state.list
  }),
  created(){
    this.getMascotas();
  },
  methods: {
    ...mapActions('mascotas', ['getMascotas', 'deleteMascota']),
  }
}
</script>

<style>

</style>
