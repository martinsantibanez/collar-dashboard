<template>
              <v-btn
              absolute
              dark
              fab
              top
              right
              :color="genColor"
              style="width: 80px; height: 80px; font-size: 18pt; z-index: 1;"
            >
      {{temperatura}}° C
  </v-btn>
</template>

<script>
import Socket from './Socket.js';

export default {
  name: 'Dashboard',
  props: ['id_mascota'],
  data () {
    return {
      socket : Socket,
      tipo: 'Temperatura',
      temperatura: 0
    }
  },
  computed: {
      genColor: function(){
        return this.temperatura < 39 ? 'green' : 'red';
      }
  },
  mounted(){
    this.socket.on(this.tipo, (data) => {
      if(data.y)
        this.temperatura = data.y;
    });
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
