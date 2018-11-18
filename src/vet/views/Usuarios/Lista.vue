<template>
  <div class="lista">
    <div class="title">
      <h2>{{title}}</h2>
    </div>
    <div class="row">
      <div 
      class="col-3 py-3 col-lista"
      v-for="usuario in usuarios" v-bind:key="usuario._id">
        <router-link 
        :to="{ name: 'UsuariosVer', params: { id_usuario: usuario._id } }" 
        class="card card-body h-100">
          {{usuario.nombre}}
        </router-link>
      </div>
      <div class="col-3 py-3 col-lista">
        <div class="card card-body h-100 agregar">
          <router-link 
          :to="{name: 'UsuariosCrear'}" >
            <i class="fas fa-plus"></i> Nuevo
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Usuarios',
  data () {
    return {
      tableFields: ['email', 'nombre', 'role', 'accion'],
      title: 'Clientes'
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

.row {
   display: flex;
   flex-wrap: wrap;
}


</style>
