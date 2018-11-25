<template>
    <div>
        <v-alert
            :value="true"
            v-for="alerta in alertas"
            :key="alerta._id"
            class="text-left"
            dismissible
            :type="alertType(alerta.gravedad)"
            @input="dismiss(alerta)"
          >
            <strong>{{alerta.tipo}} fuera de lo normal:</strong> {{alerta.descripcion}}
        </v-alert>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
      return {
      }
    },
    props: ['alertas'],
    methods: {
      ...mapActions('auth', ['readAlerta']),
      alertType(gravedad){
        if(gravedad == 'Leve') return 'info';
        else if(gravedad == 'Moderada') return 'warning';
        else if(gravedad == 'Grave') return 'error';
        else return '';
      },
      async dismiss(alerta){
        await this.readAlerta(alerta._id);
      }
    },

}
</script>