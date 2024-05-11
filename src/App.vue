<template>
  <div id="app">
    <Header v-show="$route.path=='/home'||$route.path.startsWith('/detail')"></Header>
    <Header2 v-show="$route.path=='/address'||$route.path.startsWith('/address')"></Header2>
    <router-view></router-view>
    <Footer v-show="$route.path=='/home'||$route.path.startsWith('/detail')"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Header2 from './components/Header/index2.vue';
import Footer from './components/Footer/index.vue';
export default {
  name: '',
  components:{
    Header,
    Header2,
    Footer,
  },
}

</script>

<style lang="css" scoped>
  html,body,#app{
    height: 100%;
    margin:0;
    padding:0;
    background-color: #cfc0c0d9;
  }
</style>