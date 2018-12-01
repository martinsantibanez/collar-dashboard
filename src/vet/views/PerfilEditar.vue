<template>
<div>
  <div class="titulo">
    <h2>Editando tu perfil</h2>
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
                  label="Nombre"
                  required>
          <b-form-input type="text" id="name" v-model.trim="usuario.nombre"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Telefono">
          <b-form-input type="number" id="telefono" v-model.trim="usuario.telefono"></b-form-input>
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
  data () {
    return {
    }
  },
  computed: mapState('auth', {
    usuario: state => state.user
  }),
  created(){
    this.getPerfilPropio();
  },
  methods: {
    ...mapActions('auth', ['getPerfilPropio', 'editPerfilPropio']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        await this.editPerfilPropio(this.usuario);
        this.$router.replace({
          name: 'PerfilVet'
        });
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>