<template>
<div>
  <div class="titulo">
    <h2>Editando a {{usuario.email}}</h2>
  </div>
  <b-row class="">
    <b-col cols="8" offset="2" class="card card-body">
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Email">
          <b-form-input id="email" v-model.trim="usuario.email"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Password">
          <b-form-input type="password" id="password" v-model.trim="usuario.password"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Nombre">
          <b-form-input type="text" id="name" v-model.trim="usuario.nombre"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Role">
          <b-form-input type="text" id="role" v-model.trim="usuario.role" placeholder="user o vet"></b-form-input>
        </b-form-group>
        <!-- TODO borrar esto -->
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Telefono">
          <b-form-input type="number" id="telefono" v-model.trim="usuario.telefono"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Domicilio">
          <b-form-input type="text" id="domicilio" v-model.trim="usuario.domicilio"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Guardar</b-button>
      </b-form>
    </b-col>
  </b-row>
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UsuariosEditar',
  props: ['id_usuario'],
  data () {
    return {
      errors: []
    }
  },
  computed: mapState('usuarios', {
    usuario: state => state.usuario
  }),
  created(){
    this.getUsuarioById(this.id_usuario);
  },
  methods: {
    ...mapActions('usuarios', ['editUsuario', 'getUsuarioById']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        await this.editUsuario(this.usuario);
        this.$router.replace({
          name: 'UsuariosVer',
          id_usuario: this.usuario._id
        });
      } catch(e) {
        console.log(e)
        this.errors.push(e)
      }
    }
  }
}
</script>