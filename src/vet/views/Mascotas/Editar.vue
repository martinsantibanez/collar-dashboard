<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error.message">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Nombre">
          <b-form-input type="text" id="name" v-model.trim="mascota.nombre"></b-form-input>
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
        <b-button type="submit" variant="primary">Guardar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MascotasEditar',
  props: ['id_mascota', 'id_usuario'],
  data () {
    return {
      errors: []
    }
  },
  computed: mapState('mascotas', {
    mascota: state => state.mascota
  }),
  created(){
    this.getMascotaById(this.id_mascota);
  },
  methods: {
    ...mapActions('mascotas', ['editMascota', 'getMascotaById']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        await this.editMascota(this.mascota);
        if(this.id_usuario)
          this.$router.push({
            name: 'UsuariosMascotasVer',
            id_usuario: this.id_usuario,
            id_mascota: this.id_mascota
          })
        else
          this.$router.push({
            name: 'Mascotas'
          });
      } catch(e) {
        console.log(e)
        this.errors.push(e)
      }
    }
  }
}
</script>