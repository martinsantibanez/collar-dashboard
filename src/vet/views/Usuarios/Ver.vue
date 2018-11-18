<template>
  <div class="lista">
    <div class="title">
      <h2>{{usuario.nombre}}</h2>
    </div>
    <div class="row">
      <div class="card card-body">
        <!-- TODO Diseño de esto -->
        <ul>
          <li>Email: {{usuario.email}} </li>
          <li>ID: {{usuario._id}} </li>
          <li>Fecha de nacimiento: {{usuario.nacimiento}} </li>
          <li>Sexo: {{usuario.sexo}} </li>
          <li>Teléfono: {{usuario.telefono}} </li>
          <li>Domicilio: {{usuario.domicilio}} </li>
        </ul>
        <router-link :to="{name: 'UsuariosEditar', id: usuario._id}">Editar</router-link>
      </div>
    </div>
    <div class="title mt-3">
      <h2>Mascotas</h2>
    </div>
      <div class="row">
            <div 
      class="col-3 py-3 col-lista"
      v-for="mascota in usuario.mascotas" v-bind:key="mascota._id">
        <router-link 
        :to="{ name: 'UsuariosMascotasEditar', params: { id_mascota: usuario._id, id_usuario: mascota._id  } }" 
        class="card card-body h-100">
          {{mascota.nombre}}
        </router-link>
      </div>
      <div class="col-3 py-3 col-lista">
        <div class="card card-body h-100 agregar">
          <router-link 
          :to="{name: 'UsuariosMascotasCrear', id: usuario._id}" >
            <i class="fas fa-plus"></i> Nuevo
          </router-link>
        </div>
      </div>
      </div>
      <!-- M: {{usuario.mascotas}} -->
      <!-- <mascotas-usuario :id_usuario="id"></mascotas-usuario> -->
      <!-- {{usuario._id}} -->
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';
import MascotasUsuario from '@/vet/components/MascotasUsuario'

export default {
  name: 'UsuariosVer',
  props: ['id'],
  components: {
    'mascotas-usuario': MascotasUsuario,
  },
  data () {
    return {
    //   errors: []
    }
  },
  computed: mapState('usuarios', {
    usuario: state => state.usuario
  }),
  created(){
    this.getUsuarioById(this.id);
  },
  methods: {
    ...mapActions('usuarios', ['getUsuarioById'])
  }
}
</script>

<style>
.mascotas{
  /* mt-2l */
}
</style>
