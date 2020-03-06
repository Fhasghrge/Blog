<template>
  <div id="app">
    <Profile></Profile>
    <router-view></router-view>
    <BLink></BLink>
  </div>
</template>

<script>
import Profile from './components/profile'
import BLink from './components/backLink'
export default {
  name: "App",
  components: {
    Profile,
    BLink
  }
};
</script>

<style>
  * {
    padding:  0;
    margin: 0
  }
  #app {
    display: flex;
  }
</style>
