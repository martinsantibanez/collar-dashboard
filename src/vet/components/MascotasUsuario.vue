<template>
  <div>
    <div v-for="mascota in mascotas" :key="mascota._id">
      <!-- <router-link :to="{name: MascotasVer, id: mascota._id}"> -->
        {{mascota.nombre}}
      <!-- </router-link> -->
    </div>
    <b-button :to="{name: 'UsuariosMascotasCrear'}" variant="success">Agregar</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MascotasUsuario',
  props: ['id_usuario'],
  data () {
    return {
      tableFields: ['nombre', 'raza', 'nacimiento', 'accion'],
      msg: 'Welcome to mascotas'
    }
  },
  computed: mapState('usuarios', {
    mascotas: state => state.mascotas,
    usuario: state => state.usuario
  }),
  mounted(){
    console.log(this.id_usuario);
    this.getMascotas(this.id_usuario);
    this.getUsuarioById(this.id_usuario);
  },
  methods: {
    ...mapActions('usuarios', ['getMascotas', 'getUsuarioById']),
  }
}
</script>

<style>

</style>
