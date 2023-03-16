<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="item in tempRoutes" :key="item.name" :to="item.path">{{item.name}}</router-link>  
    </div>
    <div class="body_container">
      <router-view/>
    </div>
  </div>
</template>
<script> 
import router from '@/router'
export default {
  data(){
    return {
      tempRoutes:[],
    }
  },
  mounted(){ 
    this.tempRoutes = router.options.routes
  },
  methods:{}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex; 
}

#nav {
  padding: 15px;
  box-shadow: 1px 1px 1px 1px #eee ;
  height: 100%;
  box-sizing: border-box;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    line-height: 30px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.body_container{
  padding: 15px;
  flex: 1;
}
</style>
