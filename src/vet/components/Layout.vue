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
/* Estilos globales para el vet */
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

.col-lista .card{
  background-color: #fff;
  /* box-shadow: 2px 2px 6px rgba(0, 0, 0, .1); */
  /* border-radius: 20px; */

  color: #000;
  font-weight: 300;
  font-size: 14pt;
}
.col-lista .card:hover{
  text-decoration: none;
  color: #4487FA;
  
}
.card.agregar{
  background-color: #00D664;
  transition: ease 0.2s;
}
.card.agregar:hover{
  background-color: #04EC71;
}
.card.agregar a{
  font-weight: 600;
  /* font-family: ''; */
  color: #fff;
}
.card.agregar a:hover {
  color: #fff;
  text-decoration: none;
}
</style>
