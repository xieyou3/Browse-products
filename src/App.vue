<template>
  <div id="app">
    <Header v-show="$route.path=='/home'||$route.path.startsWith('/detail')"></Header>
    <Header2 v-show="$route.path=='/address'||$route.path.startsWith('/address')"></Header2>
    <Header3 v-show="$route.path.startsWith('/shoppingcart')"></Header3>
    <router-view></router-view>
    <Footer v-show="$route.path=='/home'||$route.path.startsWith('/detail')"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Header3 from './components/Header/index3.vue';
import Header2 from './components/Header/index2.vue';
import Footer from './components/Footer/index.vue';
import Counter from './components/counter.vue';
export default {
  name: '',
  components:{
    Header,
    Header2,
    Header3,
    Footer,
    Counter,
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