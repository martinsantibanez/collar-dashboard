<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs10 md4 offset-md4 offset-xs1>
        <v-card>
          <v-card-title primary-title>
            <v-img
              :src="require('@/assets/logo-gv.png')"
              contain
            >
            </v-img>
          </v-card-title>
          <h2 class="futurecan-branding">Sistema <span>Future<span class="can">Can</span></span></h2>
          <v-form @submit="onSubmit">
            <v-card-text>
              <v-text-field prepend-icon="person" name="Email" label="Email" v-model="user.email" required></v-text-field>
              <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="user.password" required></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn primary large block dark type="submit">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      user: {},
      errors: []
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    ...mapGetters('auth', ['role']),
    async onSubmit (evt) {
      evt.preventDefault()
      await this.login(this.user);
      let role = this.role();
      if(role)
        this.$router.push('/'+role);
    },
    register () {
      this.$router.push({
        name: 'Register'
      })
    }
  }
}
</script>
<style>
.futurecan-branding{
  font-family: 'Roboto', Helvetica, sans-serif;
  font-weight: 300;
  color: #757575;
}
.futurecan-branding span{
  font-weight: 400;
}
.futurecan-branding .can{
  font-weight: 500;
}
</style>
