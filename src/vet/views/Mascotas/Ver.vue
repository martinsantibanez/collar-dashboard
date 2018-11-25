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
              <!-- TODO confirmacion eliminar -->
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
      <div class="row mb-4">
        <div v-if="mascota.alertas.length == 0" class="card card-body">No hay alertas.</div>
        <div v-for="alerta in mascota.alertas" :key="alerta._id"  class="col-4 py-3 alerta">
          <div class="card" :class="{'bg-warning': !alerta.leida}">
            <div class="card-header">
              <div><strong>{{ alerta.tipo }}</strong></div>
              <span class="badge" 
              :class="{'badge-danger': alerta.gravedad=='Grave', 'badge-primary': alerta.gravedad=='Moderada', 'badge-light': alerta.gravedad=='Leve'}">
                {{ alerta.gravedad }}
              </span>
            </div>
            <div class="card-body">
              <div>{{ alerta.descripcion }}</div>
            <div v-if="!alerta.leida">
              <b-btn variant="light" class="mt-4 btn-sm">Cancelar alerta</b-btn>
              <!-- TODO cancelar alerta -->
            </div>
            </div>
            <div class="card-footer" v-if="alerta.leida">
              <div>Leida el {{ alerta.fechaLeida }}</div>
              <!-- TODO formato fecha -->
            </div>
          </div>
            <!-- <div>{{alerta}}</div> -->
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import GenerarCharts from '@/common/GenerarCharts'
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
.alerta .bg-warning{
  color: #fff;
}

</style>
