<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="users" :fields="tableFields">
      <template slot="action" slot-scope="data">
        <b-button :to="{ name: 'editUser', params: { id: data.item._id } }">Edit</b-button>
        <b-button @click="deleteUser(data.item._id)">Delete</b-button>
      </template>
      <template slot="takenTables" slot-scope="data">
        {{ data.item.tables.length }}
      </template>
    </b-table>
    <b-button :to="{name: 'addUser'}" variant="success">Add</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Users',
  data () {
    return {
      tableFields: ['name', 'email', 'role', 'takenTables', 'action'],
      msg: 'Welcome to users'
    }
  },
  computed: mapState('users', {
    users: state => state.list
  }),
  created(){
    this.getUsers();
  },
  methods: {
    ...mapActions('users', ['deleteUser', 'getUsers']),

  }
}
</script>

<style>

</style>
