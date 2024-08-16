<template>
  <div id="app">
    <nav id="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/user">User</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

#main-nav {
  position: absolute;
  top: 20px;
  left: 20px;
}

#main-nav a {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  
}

#main-nav a:hover {
  color: #35495e;
}
</style>
