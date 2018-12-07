<template>
  <div>
    <v-btn
    absolute
    dark
    fab
    top
    right
    :color="genColor"
    style="width: 80px; height: 80px; font-size: 18pt; z-index: 1;"
    v-if="text!='1'"
    >
      {{temperatura}}° C
    </v-btn>
    <div v-else :style="{color: genColor}"> 
      <div class="temperatura">
        {{temperatura}}° C
      </div>
      <div class="text-center temperaturaEstado">
        Normal
      </div>
    </div>
  </div>
</template>

<script>
import Socket from './Socket.js';

export default {
  name: 'Dashboard',
  props: ['id_mascota', 'text'],
  data () {
    return {
      socket : Socket,
      tipo: 'Temperatura',
      temperatura: 0
    }
  },
  computed: {
      genColor: function(){
        return this.temperatura < 39 ? '#2e7d32' : '#d81b60';
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
div{
  /* color: #2e7d32; */
}
.temperatura{
  font-size: 40px;
  font-weight: 300;
  text-align: center;
}
.temperaturaEstado{
  line-height: 0.5;
  font-weight: 300;
  font-size: 22px;
}
</style>
