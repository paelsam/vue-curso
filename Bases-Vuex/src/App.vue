<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <Counter />
  
</template>

<script>
import { defineAsyncComponent } from 'vue'

  export default {
    name: 'App',
    components: {
      Counter: defineAsyncComponent( () => import('@/components/Counter.vue') )
    }
  }
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
