<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';
export default {
  name: '',
  components:{
    Header,
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