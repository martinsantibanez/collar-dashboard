<template>
  <div class="lista">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card" id="info">
          <div class="card-header">
            <h3 class="card-title">{{user.nombre}}</h3>
          </div>
          <div class="card-body">
            <!-- TODO Diseño de esto -->
            <ul>
              <li><strong>Email:</strong> {{user.email}} </li>
              <li><strong>ID:</strong> {{user._id}} </li>
              <li><strong>Teléfono:</strong> {{user.telefono}} </li>
            </ul>
            <div class="text-center">
              <b-button :to="{name: 'PerfilVetEditar'}" class="px-3" variant="primary">Editar</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PerfilVet',
  data () {
    return {
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  created(){
    this.getPerfilPropio();
  },
  methods: {
    ...mapActions('auth', ['getPerfilPropio']),
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
</style>
