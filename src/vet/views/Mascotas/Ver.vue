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
              <!-- <li><strong>Sexo:</strong> {{mascota.sexo}} </li> -->
            </ul>
            <div class="text-center">
              <b-button v-if="id_usuario" :to="{name: 'UsuariosMascotasEditar', id_usuario: id_usuario, id_mascota: mascota._id}" class="px-3" variant="primary">Editar</b-button>
                <b-button v-else :to="{name: 'MascotasEditar', id_mascota: mascota._id}" class="px-3" variant="primary">Editar</b-button>
              <confirmar @confirmar="eliminarMascota(mascota._id)">
                <b-button slot="boton" class="ml-3" variant="danger">Eliminar</b-button>
              </confirmar>
              <!-- TODO confirmacion eliminar -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!mascota.collar">
      <div class="title mt-4">
        <h2>No hay un collar asociado. <code @click="modalCollar = true">Sincroniza uno.</code></h2>
      </div>
    </div>
    <div v-else>
      <div class="title mt-4">
        <h2>Emparejado con collar <code @click="modalCollar = true"><a>{{mascota.collar}}</a></code></h2>
      </div>
      <div class="card card-body">
        <div class="row">
          <div class="col-6">
            <!-- TODO bindear id mascota -->
            <generar-charts tipo="Temperatura" :id_collar="mascota.collar"></generar-charts>
            <router-link class="btn btn-outline-danger mt-3" :to="{ name: 'MascotasAlertar', params: {id_mascota: mascota._id, tipo: 'Temperatura'} }"><i class="fas fa-exclamation-triangle"></i> Alertar por temperatura</router-link>
          </div>
          <div class="col-6">
            <generar-charts tipo="Pulso"></generar-charts>
            <router-link class="btn btn-outline-danger mt-3" :to="{ name: 'MascotasAlertar', params: {id_mascota: mascota._id, tipo: 'Pulso'} }"><i class="fas fa-exclamation-triangle"></i> Alertar por pulso</router-link>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="modalCollar" centered>
      <b-form-group
        horizontal
        :label-cols="3"
        breakpoint="md"
        label="ID Collar">
        <b-form-input id="collar" v-model.trim="newCollar" :value="mascota.collar"></b-form-input>
      </b-form-group>
      <div slot="modal-footer" class="w-100">
        <div class="float-right">
        <b-btn variant="danger" @click="quitarCollar()">
          Quitar
        </b-btn>
        <b-btn variant="primary" @click="cambiarCollar()" class="ml-3">
          Cambiar
        </b-btn>
        </div>
      </div>
    </b-modal>
    <div class="title mt-4">
      <h2>Alertas</h2>
    </div>
    <!-- <div class="card card-body mb-5"> -->
      <div class="row mb-4">
        <div v-if="!mascota.alertas || mascota.alertas.length == 0" class="card card-body">No hay alertas.</div>
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
              <confirmar @confirmar="eliminarAlerta(alerta._id)" v-if="!alerta.leida" titulo="¿Seguro que desea cancelar?">
                <b-button slot="boton" variant="light" class="mt-4 btn-sm">Cancelar</b-button>
              </confirmar>
            <!-- <div v-if="!alerta.leida">

                <b-btn variant="light" class="mt-4 btn-sm" @click="eliminarAlerta(alerta._id)">Cancelar alerta</b-btn>
            </div>-->
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
import Confirmar from '@/vet/components/Confirmar';

export default {
  name: 'MascotasVer',
  props: ['id_usuario', 'id_mascota'],
  components: { GenerarCharts, Confirmar },
  data () {
    return {
      modalCollar: false,
      newCollar: ''
    }
  },
  computed: mapState('mascotas', {
    mascota: state => state.mascota
  }),
  created(){
    this.getMascota();
  },
  methods: {
    ...mapActions('mascotas', ['getMascotaById', 'deleteMascota', 'deleteAlerta', 'sincronizar', 'eliminarCollar']),
    async getMascota(){
      await this.getMascotaById(this.id_mascota);
    },
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
    },
    async eliminarAlerta(id){
      await this.deleteAlerta(id);
      this.getMascota();
    },
    async cambiarCollar(){
      await this.sincronizar( { id_mascota: this.id_mascota, id_collar: this.newCollar } );
      this.getMascota();
      this.modalCollar = false;
    },
    async quitarCollar(){
      await this.eliminarCollar(this.id_mascota);
      this.getMascota();
      this.modalCollar=false;
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

code{
  cursor: pointer;
}
</style>
