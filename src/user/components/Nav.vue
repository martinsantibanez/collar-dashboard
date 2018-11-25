<template>
  <div>
     <v-navigation-drawer
        fixed
        v-model="drawer"
        app
      >
      <v-list dense>
        <v-list-tile @click="ir(item.route)"  v-for="item in sidebarItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>FutureCan</v-toolbar-title>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      sidebarItems: [
        { title: 'Resumen', route: { name: 'Resumen' }, icon: 'home' },
        // { title: 'Clientes', route: { name: 'Usuarios' }, icon: 'users' },
        // { title: 'Perfil', route: { name: 'Perfil' }, icon: 'home' },
        { title: 'Perfil', route: { name: 'Perfil' }, icon: 'person' },
        { title: 'Mascotas', route: { name: 'MisMascotas' }, icon: 'pets' },
        { title: 'Alertas', route: { name: 'MisAlertas' }, icon: 'warning' },
        { title: 'Logout', route: { name: 'Logout' }, icon: 'exit_to_app' },
      ],
      drawer: null
    }
  },
  methods: {
    ir(route){
      this.$router.push(route);
    }
  }
}
</script>