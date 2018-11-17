<template>
  <div>
      {{usuario.nombre}}
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UsuariosVer',
  props: ['id'],
  data () {
    return {
    //   errors: []
    }
  },
  computed: mapState('usuarios', {
    usuario: state => state.usuario
  }),
  created(){
    this.getUsuarioById(this.id);
  },
  methods: {
    ...mapActions('usuarios', ['getUsuarioById'])
  }
}
</script>