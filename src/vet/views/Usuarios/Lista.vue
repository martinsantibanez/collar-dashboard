<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="usuarios" :fields="tableFields">
      <template slot="accion" slot-scope="data">
        <b-button :to="{ name: 'UsuariosEditar', params: { id: data.item._id } }">Editar</b-button>
        <b-button @click="deleteUsuario(data.item._id)">Eliminar</b-button>
      </template>
      <template slot="takenTables" slot-scope="data">
        {{ data.item.tables.length }}
      </template>
    </b-table>
    <b-button :to="{name: 'UsuariosCrear'}" variant="success">Agregar</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Usuarios',
  data () {
    return {
      tableFields: ['email', 'nombre', 'role', 'accion'],
      msg: 'Welcome to usuarios'
    }
  },
  computed: mapState('usuarios', {
    usuarios: state => state.list
  }),
  created(){
    this.getUsuarios();
  },
  methods: {
    ...mapActions('usuarios', ['deleteUsuario', 'getUsuarios']),

  }
}
</script>

<style>

</style>
