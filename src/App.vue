<template>
  <div id="app">
    <Profile></Profile>
  </div>
</template>

<script>
import Profile from './components/profile'
export default {
  name: "App",
  components: {
    Profile
  }
};
</script>

<style>
  * {
    padding:  0;
    margin: 0
  }
</style>
