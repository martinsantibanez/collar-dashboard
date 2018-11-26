<template>
    <v-snackbar
      v-model="estado"
      color="red"
      :timeout="timeout"
    >
      {{ error }}
      <v-btn
        dark
        flat
        @click="dismiss()"
      >
        Cerrar
      </v-btn>
    </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
        color: 'error',
        timeout: 3000,
        isVisible: false
      //
    }
  },
  computed: {
    estado: {
      get () { return this.$store.state.error.estado },
      set (value) { this.dismiss() }
    },
    ...mapState('error', {
      error: state => state.error
    }),
  },
  methods: {
      dismiss(){
        this.$store.dispatch('error/dismiss')
      }
  },
  watch: {
  }
}
</script>
<style>

</style>
