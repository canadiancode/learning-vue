<template>
  <div>
    <the-header></the-header>
    <!-- Switches the component used to the active-goals component -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import ActiveGoals from './components/ActiveGoals.vue';
  import ManageGoals from './components/ManageGoals.vue';

  export default {
    components: {
      'the-header': TheHeader,
      'active-goals': ActiveGoals,
      'manage-goals': ManageGoals,
    },
    data() {
      return {
        selectedComponent: 'active-goals', // default displayed component
      };
    },
    methods: {
      setSelectedComponent(component) {
        this.selectedComponent = component;
      }
    }
  };
</script>

<style scoped> 
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>