<template>
  <div id="app">
    <PetsList />
  </div>
</template>

<script>
import PetsList from './components/PetsList.vue'

export default {
  name: 'App',
  components: {
    PetsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
