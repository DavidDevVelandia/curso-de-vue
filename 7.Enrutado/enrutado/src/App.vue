<template>
  <h1>Hola</h1>
  <nav>
    <!-- es mala practica usar el router-link to porque al momento de cambair la ruta toca cambiar la ruta en cada uno de los router-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Contact">Contact</router-link> |
    <router-link to="/services">Services</router-link> |
    <router-link :to='{name: "blog"}'>Blog</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
