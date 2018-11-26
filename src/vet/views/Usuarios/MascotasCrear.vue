<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Nombre">
          <b-form-input type="text" id="nombre" v-model.trim="mascota.nombre"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Raza">
          <b-form-input type="text" id="nacimiento" v-model.trim="mascota.raza"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Año nacimiento">
          <b-form-input type="number" id="nacimiento" v-model.trim="mascota.nacimiento"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Agregar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MascotasCrear',
  props: ['id_usuario'],
  data () {
    return {
      errors: []
    }
  },
  computed: mapState('mascotas', {
    mascota: state => state.mascota
  }),
  created(){
  },
  methods: {
    ...mapActions('usuarios', ['addMascota']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        var created = await this.addMascota({id_usuario: this.id_usuario, mascota: this.mascota});
        console.log(created._id);
        this.$router.push({
          name: 'UsuariosVer',
          // id_mascota: created._id,
          id_usuario: this.id_usuario,
        });
        // this.$router.push({
        //   name: 'UsuariosMascotasVer',
        //   id_mascota: created._id,
        //   id_usuario: this.id_usuario,
        // });
      } catch(e) {
        console.log(e)
        this.errors.push(e)
      }
    }
  }
}
</script>