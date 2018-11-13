<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="usuarios" :fields="tableFields">
      <template slot="action" slot-scope="data">
        <!-- <b-button :to="{ name: 'editUsuario', params: { id: data.item._id } }">Edit</b-button> -->
        <b-button @click="deleteUsuario(data.item._id)">Delete</b-button>
      </template>
      <template slot="takenTables" slot-scope="data">
        {{ data.item.tables.length }}
      </template>
    </b-table>
    <!-- <b-button :to="{name: 'addUsuario'}" variant="success">Add</b-button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Usuarios',
  data () {
    return {
      tableFields: ['email', 'role', 'action'],
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
