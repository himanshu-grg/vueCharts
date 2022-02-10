<template>
  <div id="app">
    <div id="nav">
      <h3>Line chart with a single dataset.....</h3>
      <LineChart/>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'

export default {
  components:{
    LineChart,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0000;
}
</style>