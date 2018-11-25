<template>
  <!-- <v-layout row wrap> -->
  <!-- <v-flex xs12> -->
  <v-card>
    <v-list two-line subheader>
      <v-subheader inset>{{user.email}}</v-subheader>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon>person</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Nombre</v-list-tile-title>
          <v-list-tile-sub-title>{{ user.nombre }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon>phone</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Telefono</v-list-tile-title>
          <v-list-tile-sub-title>{{ user.telefono }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon>location_on</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Domicilio</v-list-tile-title>
          <v-list-tile-sub-title>{{ user.domicilio }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon>fingerprint</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Contraseña</v-list-tile-title>
          <v-list-tile-sub-title>******</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-fab-transition>
      <v-btn
        color="pink"
        dark
        absolute
        bottom
        right
        fab
        @click="dialog = true"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    </v-fab-transition>
    <!-- Dialogo de edicion -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Editar perfil</v-card-title>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Nombre*" v-model="user.nombre" required :rules="nameRules"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Telefono" v-model="user.telefono" :counter="9"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Domicilio" v-model="user.domicilio"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Contraseña" type="password"></v-text-field>
                </v-flex>
              </v-form>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="green darken-1"
              flat="flat"
              :disabled="!valid"
              @click="editarPerfil()"
            >
              Guardar
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
      return {
        valid: true,
        dialog: false,
        items: [],
        nameRules: [
          v => !!v || 'Debes introducir un nombre'
        ],
      }
    },
    computed: mapState('auth', {
        user: state => state.user
    }),
    methods: {
      ...mapActions('auth', ['getPerfilPropio', 'editPerfilPropio']),
      async editarPerfil(){
        try {
          await this.editPerfilPropio(this.user);
          await this.getPerfilPropio();
          this.dialog = false;
        } catch(e) {
          console.log(e)
          // this.errors.push(e)
        }
      }
    },
    async created() {
        await this.getPerfilPropio();
    }

}
</script>