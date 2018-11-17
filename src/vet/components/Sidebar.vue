<template>
  <nav class="col-md-2 d-none d-md-block sidebar">
      <router-link :to="{name: 'Dashboard'}" class="navbar-brand col-12">SmartCan</router-link>
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in sidebarItems" :key="item.title">
          <router-link class="nav-link" :to="item.route" active-class="active">
          <!-- <a class="nav-link active" href="#"> -->
            <span class="icon"><i class="fa-fw" :class="item.faIcon"></i></span>
            {{item.title}}
            </router-link>
          <!-- </a> -->
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      sidebarItems: [
        { title: 'Dashboard', route: { name: 'Dashboard' }, faIcon: 'fa fa-columns' },
        { title: 'Clientes', route: { name: 'Usuarios' }, faIcon: 'fa fa-users' },
        { title: 'Mascotas', route: { name: 'Mascotas' }, faIcon: 'fas fa-dog' },
        { title: 'Logout', route: { name: 'Logout' }, faIcon: 'fas fa-sign-out-alt' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .1);
  text-align: left;
  background-color: #fff;
}
.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  font-family: 'Korolev';
  /* background-color: rgba(0, 0, 0, .25); */
  color: #4487FA;
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25); */
  /* min-width: 100%; */
  text-align: center;
  font-size: 20pt;
}
.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 60px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 300;
  font-family: 'Roboto';
  font-size: 16pt;
  color: #858D91;
}
.sidebar .nav-link .icon {
  margin-right: 10px;
}
.sidebar .nav-link:hover {
  color: #007bff;
}
.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
  font-weight: 500;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
</style>
