<template>
  <!-- <v-layout row wrap> -->
  <!-- <v-flex xs12> -->
  <v-card>
    <v-list two-line subheader>
      <v-subheader inset>{{user.email}}</v-subheader>
      <v-list-tile
      v-for="item in items"
      :key="item.title"
      avatar
      >
        <v-list-tile-avatar>
            <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
        <!-- </v-flex> -->
    <!-- </v-layout> -->
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
      return {
        dialog: false,
        items: []
      }
    },
    computed: mapState('auth', {
        user: state => state.user
    }),
    methods: {
        ...mapActions('auth', ['getPerfilPropio']),
    },
    async created() {
        await this.getPerfilPropio();
        this.items = [
          { icon: 'person', iconClass: 'grey lighten-1 white--text', title: 'Nombre', subtitle: this.user['nombre'] },
          { icon: 'phone', iconClass: 'grey lighten-1 white--text', title: 'Telefono', subtitle: this.user.telefono },
          { icon: 'location_on', iconClass: 'grey lighten-1 white--text', title: 'Domicilio', subtitle: this.user.domicilio },
          { icon: 'fingerprint', iconClass: 'grey lighten-1 white--text', title: 'Contraseña', subtitle: '*********' },
        ]
    },
    watch: {
      dialog(val){
        console.log(val);
        this.$refs.nombre.focus();
      }
    }

}
</script>