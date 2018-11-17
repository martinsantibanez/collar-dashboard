<template>
  <div class="lista">
      <h2>{{title}}</h2>
      <div class="row">
        <div 
        class="col-3 py-3 usuarios"
        v-for="usuario in usuarios" v-bind:key="usuario._id">
          <router-link 
          :to="{ name: 'UsuariosEditar', params: { id: usuario._id } }" 
          class="card card-body h-100 usuario">
            {{usuario.nombre}}
          </router-link>
        </div>
        <div class="col-3 py-3 usuarios">
          <div class="card card-body h-100 agregar">
            <router-link 
            :to="{name: 'UsuariosCrear'}" >
              <i class="fas fa-plus"></i> NUEVO
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
.lista h2{
  text-align: left;
  margin-bottom: 20px;
}

.row {
   display: flex;
   flex-wrap: wrap;
}
.usuarios .card{
  background-color: #fff;
  /* box-shadow: 2px 2px 6px rgba(0, 0, 0, .1); */
  /* border-radius: 20px; */

  color: #000;
  font-weight: 300;
  font-size: 14pt;
}
.usuarios .card:hover{
  text-decoration: none;
  color: #4487FA;
  
}
.card.agregar{
  background-color: #00D664;
  transition: ease 0.2s;
}
.card.agregar:hover{
  background-color: #04EC71;
}
.card.agregar a{
  font-weight: 600;
  /* font-family: ''; */
  color: #fff;
}
.card.agregar a:hover {
  color: #fff;
  text-decoration: none;
}

</style>
