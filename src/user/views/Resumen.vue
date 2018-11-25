<template>
  <v-container grid-list-md>
    <v-layout row wrap>
        <v-flex xs12>
             <v-avatar
              slot="activator"
              size="36px"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="Avatar"
              >
            </v-avatar>
            <h2 class="headline mb-0">Bienvenido {{user.nombre}}</h2>
            <v-card>
                <v-card-title primary-title>
                    
                        {{user.email}}
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange">Editar Perfil</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
// import GenerarCharts from '../components/GenerarCharts'
// import io from 'socket.io-client';
import { mapState } from 'vuex';


export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
//   components: {GenerarCharts},
  mounted(){
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
