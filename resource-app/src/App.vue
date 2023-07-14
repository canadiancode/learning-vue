<template>
  <the-header title="Remember Me"></the-header>
  <the-resources></the-resources>
</template>
 
<script>
  import TheHeader from './components/layouts/TheHeader.vue';
  import TheResources from './components/learning-resources/TheResources.vue';
 
  export default {
    components: {
      'the-header': TheHeader,
      'the-resources': TheResources,
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>