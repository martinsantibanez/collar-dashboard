<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <h1>Mascotas de {{usuario.nombre}}</h1>
    <b-table responsive hover :items="mascotas" :fields="tableFields">
      <template slot="accion" slot-scope="data">
        <b-button :to="{ name: 'MascotasEditar', params: { id: data.item._id } }">Editar</b-button>
        <!-- <b-button @click="deleteUsuario(data.item._id)">Eliminar</b-button> -->
      </template>
    </b-table>
    <b-button :to="{name: 'UsuariosMascotasCrear'}" variant="success">Agregar</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Usuarios',
  props: ['id'],
  data () {
    return {
      tableFields: ['nombre', 'raza', 'nacimiento', 'accion'],
      msg: 'Welcome to mascotas'
    }
  },
  computed: mapState('usuarios', {
    mascotas: state => state.mascotas,
    usuario: state => state.usuario
  }),
  created(){
    // console.log(this.id);
    this.getMascotas(this.id);
    this.getUsuarioById(this.id);
  },
  methods: {
    ...mapActions('usuarios', ['getMascotas', 'getUsuarioById']),
  }
}
</script>

<style>

</style>
