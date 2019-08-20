<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive exclued="Detail">
      <!--路由内容加载过一次以后，就把路由中的内容放在内存中-->
      <!--<router-view/>-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
