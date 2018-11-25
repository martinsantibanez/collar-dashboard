<template>
  <v-app>
    <Nav></Nav>
    <v-content class="mt-3">
      <router-view/>
    </v-content>
    <!-- <v-footer color="indigo" app inset>
      <span class="white--text">&copy; 2018</span>
    </v-footer> -->

  </v-app>
</template>

<script>
import Nav from './Nav';
  export default {
    name: 'UserLayout',
    components: {
      'Nav': Nav
    },
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      drawer: null
    })
  }
</script>

<style scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   /* // Demo purposes only */
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>