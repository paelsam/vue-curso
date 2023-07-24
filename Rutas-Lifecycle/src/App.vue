<template>

  <Navbar />
  <RouterView />
</template>

<script>
import { defineAsyncComponent } from 'vue';



  export default {
    name: 'App',
    components: { 
      // Hace más liviano los arrchivos
      Navbar: defineAsyncComponent(() => import('./modules/shared/components/Navbar.vue'))
    }
  }
</script>

<style>



body {
  background-color: gray;
  font-family: sans-serif;
}

</style>
