<template>
  <div class="lista">
    <!-- <div class="row"> -->
      <h2>Clientes</h2>
      <div class="card-columns">
        <router-link :to="{ name: 'UsuariosEditar', params: { id: usuario._id } }" class="card usuario py-3" v-for="usuario in usuarios" v-bind:key="usuario._id">
          {{usuario.nombre}}
        </router-link>
        <router-link :to="{name: 'UsuariosCrear'}" class="card agregar py-3">
          Agregar
        </router-link>
      </div>
    <!-- </div> -->
    <!-- <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="usuarios" :fields="tableFields">
      <template slot="accion" slot-scope="data">
        <b-button :to="{ name: 'UsuariosMascotas', params: { id: data.item._id } }">Mascotas</b-button>
        <b-button :to="{ name: 'UsuariosEditar', params: { id: data.item._id } }">Editar</b-button>
        <b-button @click="deleteUsuario(data.item._id)">Eliminar</b-button>
      </template>
      <template slot="takenTables" slot-scope="data">
        {{ data.item.tables.length }}
      </template>
    </b-table> -->
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
.lista h2{
  text-align: left;
  margin-bottom: 20px;
}
.card-columns{
  column-count: 4 !important;
}
.row {
   display: flex;
   flex-wrap: wrap;
}
.card-columns .card{
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .1);
  border-radius: 20px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 18pt;
  color: #000;
  transition: ease 0.5s;
}
.card-columns .card:hover{
  text-decoration: none;
  color: #4487FA;
  
}
.card.agregar{
  background-color: #00D664;
  color: #fff;
  transition: ease 0.5s;
  font-weight: 600;
}
.card.agregar:hover {
  color: #fff;
  background-color: #00C55C;
}

</style>
