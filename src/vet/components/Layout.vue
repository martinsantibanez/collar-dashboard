<template>
  <div>
    <!-- <Navbar></Navbar> -->
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-10 pt-3 px-4">
          <b-col sm="12">
            <router-view/>
          </b-col>
        </main>
      </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
export default {
  name: 'VetLayout',
  components: {
    'Sidebar': Sidebar,
    'Navbar': Navbar
  },
  data () {
    return {
      msg: 'Wena'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-size: .875rem;
  background-color: #FCFCFC !important;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

</style>
