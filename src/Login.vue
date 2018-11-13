<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error.message">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Username">
          <b-form-input id="email" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Password">
        <b-form-input type="password" id="password" v-model.trim="user.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="button" variant="success" @click.stop="register()">Register</b-button>
      </b-form>
    </b-col>
  </b-row>
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
      try {
        var role = await this.login(this.user);
        this.$router.push('/'+role);
      } catch(e) {
        console.log(e)
        this.errors.push(e)
      }
    },
    register () {
      this.$router.push({
        name: 'Register'
      })
    }
  }
}
</script>