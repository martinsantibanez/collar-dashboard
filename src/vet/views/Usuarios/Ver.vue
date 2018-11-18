<template>
  <div class="lista">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card" id="info">
          <div class="card-header">
            <h3 class="card-title">{{usuario.nombre}}</h3>
          </div>
          <div class="card-body">
            <!-- TODO Diseño de esto -->
            <ul>
              <li><strong>Email:</strong> {{usuario.email}} </li>
              <li><strong>ID:</strong> {{usuario._id}} </li>
              <li><strong>Teléfono:</strong> {{usuario.telefono}} </li>
              <li><strong>Domicilio:</strong> {{usuario.domicilio}} </li>
            </ul>
            <div class="text-center">
              <b-button :to="{name: 'UsuariosEditar', id_usuario: usuario._id}" class="px-3" variant="primary">Editar</b-button>
            </div>
          </div>
        </div>
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
        :to="{ name: 'UsuariosMascotasVer', params: { id_usuario: usuario._id, id_mascota: mascota._id  } }" 
        class="card card-body h-100">
          {{mascota.nombre}}
        </router-link>
      </div>
      <div class="col-3 py-3 col-lista">
        <div class="card card-body h-100 agregar">
          <router-link 
          :to="{name: 'UsuariosMascotasCrear', id_usuario: usuario._id}" >
            <i class="fas fa-plus"></i> Nuevo
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UsuariosVer',
  props: ['id_usuario'],
  data () {
    return {
    }
  },
  computed: mapState('usuarios', {
    usuario: state => state.usuario
  }),
  created(){
    this.getUsuarioById(this.id_usuario);
  },
  methods: {
    ...mapActions('usuarios', ['getUsuarioById'])
  }
}
</script>

<style>
#info .card-body{
  text-align: left;
}
li{
    list-style-type: none;
}
</style>
