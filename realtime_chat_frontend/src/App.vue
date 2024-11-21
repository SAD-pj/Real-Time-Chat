<template>
  <div id="app">
<!--    <Header />-->
    <div class="ViewContainer">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

// import Header from "@/components/HeaderMenu.vue";

export default {
  name: 'App',
  components: {
    // Header
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
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.ViewContainer {
  flex: 1;
  overflow-y: auto;
  background-color: #f0f2f5; /* 你可以根据需要调整背景颜色 */
}
</style>