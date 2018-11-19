<template>
  <div class="lista">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card" id="info">
          <div class="card-header">
            <h3 class="card-title">{{mascota.nombre}}</h3>
          </div>
          <div class="card-body">
            <!-- TODO Diseño de esto -->
            <ul>
              <li><strong>Año de nacimiento:</strong> {{mascota.nacimiento}} </li>
              <li><strong>ID:</strong> {{mascota._id}} </li>
              <li><strong>Raza:</strong> {{mascota.raza}} </li>
              <li><strong>Sexo:</strong> {{mascota.sexo}} </li>
            </ul>
            <div class="text-center">
              <b-button v-if="id_usuario" :to="{name: 'UsuariosMascotasEditar', id_usuario: id_usuario, id_mascota: mascota._id}" class="px-3" variant="primary">Editar</b-button>
                <b-button v-else :to="{name: 'MascotasEditar', id_mascota: mascota._id}" class="px-3" variant="primary">Editar</b-button>
              <b-button @click="eliminarMascota(mascota._id)" class="ml-3" variant="danger">Eliminar</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title mt-4">
      <h2>Emparejado con collar <code>asdf1234</code></h2>
      <!-- TODO: Emparejar con collar -->
    </div>
    <div class="card card-body">
      <div class="row">
        <div class="col-6">
          <!-- TODO bindear id mascota -->
          <generar-charts tipo="Temperatura"></generar-charts>
          <router-link class="btn btn-outline-danger mt-3" :to="{ name: 'MascotasAlertar', params: {id_mascota: mascota._id, tipo: 'Temperatura'} }"><i class="fas fa-exclamation-triangle"></i> Alertar por temperatura</router-link>
        </div>
        <div class="col-6">
          <generar-charts tipo="Pulso"></generar-charts>
          <router-link class="btn btn-outline-danger mt-3" :to="{ name: 'MascotasAlertar', params: {id_mascota: mascota._id, tipo: 'Pulso'} }"><i class="fas fa-exclamation-triangle"></i> Alertar por pulso</router-link>
        </div>
      </div>
    </div>
    <div class="title mt-4">
      <h2>Alertas</h2>
    </div>
    <!-- <div class="card card-body mb-5"> -->
      <div class="row">
        <div v-for="alerta in mascota.alertas" :key="alerta._id"  class="col-4 py-3 alerta">
          <router-link :to="{name: 'Dashboard'}" class="card card-body bg-warning">
            {{ alerta.tipo }}
          </router-link>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import GenerarCharts from '@/vet/components/GenerarCharts'
import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MascotasVer',
  props: ['id_usuario', 'id_mascota'],
  data () {
    return {
    }
  },
  components: { GenerarCharts },
  computed: mapState('mascotas', {
    mascota: state => state.mascota
  }),
  created(){
    this.getMascotaById(this.id_mascota);
  },
  methods: {
    ...mapActions('mascotas', ['getMascotaById', 'deleteMascota']),
    async eliminarMascota(id){
        await this.deleteMascota(id);
        if(this.id_usuario)
          this.$router.push({
            name: 'UsuariosVer',
            id_usuario: this.id_usuario,
          })
        else
          this.$router.push({
            name: 'Mascotas'
          });
    }
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
.alerta a{
  color: #fff;
}
.alerta:hover a{
  color: #fff;
  text-decoration: none;
}
</style>
