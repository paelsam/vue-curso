<script>
  // import Counter from './components/Counter.vue';
  import Indecision from './components/Indecision.vue';

  export default {
    name: 'App',
    components: {
      // Counter,
      Indecision,
    }
  }
</script>

<template>
  <!-- <div class="content">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <Counter titulo-contador="Hola Mundo" :start="8" />
  </div> -->

  <Indecision />
</template>

<style>

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.content {
  display: flex;
  flex: content;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
