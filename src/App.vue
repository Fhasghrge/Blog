<template>
  <div id="app">
    <Profile></Profile>
    <router-view></router-view>
    <BackManage></BackManage>
  </div>
</template>

<script>
import Profile from './components/profile'
import BackManage from './components/backManage'
export default {
  name: "App",
  components: {
    Profile,
    BackManage
  }
};
</script>

<style>
  * {
    padding:  0;
    margin: 0
  }
</style>
