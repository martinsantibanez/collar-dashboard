<template>
<div class="container">
<!-- <div class="row"> -->
  <div class="titulo">
    <h2>{{titulo}}</h2>
  </div>
  <!-- </div> -->
  <div class="row">
      <div class="col-6">
        <!-- TODO id mascota -->
        <generar-charts :tipo="tipo"></generar-charts>
      </div>
      <div class="col-6 card">
          <div class="card-body">
          <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error.message">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="3"
                  breakpoint="md"
                  label="Mascota">
          <b-form-input id="mascota" v-model.trim="mascota.nombre" disabled></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="3"
                  breakpoint="md"
                  label="Tipo">
          <b-form-input id="tipo" v-model.trim="tipo" disabled></b-form-input>
        </b-form-group>

      <b-form-group 
                  horizontal
                  :label-cols="3"
                  label="Gravedad">
      <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="alerta.gravedad"
                          :options="gravedades"
                          name="radioBtnOutline" />
    </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="3"
                  breakpoint="md"
                  label="Descripción">
          <b-form-textarea id="descripcion" v-model.trim="alerta.descripcion" :rows="7"></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Enviar</b-button>
      </b-form>
      </div>
      </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';
import GenerarCharts from '@/common/GenerarCharts';

export default {
  name: 'Alertar',
  components: { GenerarCharts },
  props: ['id_mascota', 'tipo', 'id_usuario'],
  data () {
    return {
      alerta: {},
      errors: [],
      titulo: "Crear nueva alerta",
      gravedades: [
        { text: 'Leve', value: 'Leve', checked: true },
        { text: 'Moderada', value: 'Moderada' },
        { text: 'Grave', value: 'Grave' }
      ]
    }
  },
  created(){
      this.getMascotaById(this.id_mascota);
  },
  computed: {
    ...mapState('mascotas', {
      mascota: state => state.mascota
    }),
    ...mapState('auth', {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions('mascotas', ['getMascotaById', 'createAlerta']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        this.alerta.veterinario = this.user._id;
        this.alerta.tipo = this.tipo;
        await this.createAlerta({id_mascota: this.id_mascota, alerta: this.alerta});
        if(this.id_usuario)
          this.$router.push({
            name: 'UsuariosMascotasVer',
            id_usuario: this.id_usuario,
            id_mascota: this.id_mascota
          })
        else
          this.$router.push({
            name: 'MascotasVer',
            id_mascota: this.id_mascota
          });
      } catch(e) {
        console.log(e)
        this.errors.push(e)
      }
    }
  }
}
</script>