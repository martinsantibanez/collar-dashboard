<template>
  <div class="lista">
    <div class="title">
      <h2>{{title}}</h2>
    </div>
    <div class="row">
      <div 
      class="col-3 py-3 col-lista"
      v-for="mascota in mascotas" v-bind:key="mascota._id">
        <router-link 
        :to="{ name: 'MascotasVer', params: { id_mascota: mascota._id } }" 
        class="card card-body h-100">
          {{mascota.nombre}}
        </router-link>
      </div>
      <!-- <div class="col-3 py-3 col-lista">
        <div class="card card-body h-100 agregar">
          <router-link 
          :to="{name: 'UsuariosCrear'}" >
            <i class="fas fa-plus"></i> Nuevo
          </router-link>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Mascotas',
  data () {
    return {
      tableFields: ['nombre', 'raza', 'nacimiento', 'dueno.nombre', 'accion'],
      title: 'Todas las mascotas'
    }
  },
  computed: mapState('mascotas', {
    mascotas: state => state.list
  }),
  created(){
    this.getMascotas();
  },
  methods: {
    ...mapActions('mascotas', ['getMascotas', 'deleteMascota']),
  }
}
</script>

<style>

</style>
