<template>
  <the-header title="Learning Resources"></the-header>
  <page-selection @changed-displayed-page="changeView"></page-selection>

  <keep-alive>
    <component :is="displayedPage"></component>
  </keep-alive>

</template>

<script>

  import TheHeader from './components/layouts/TheHeader.vue';
  import PageSelection from './components/layouts/PageSelection.vue';
  import NewResource from './components/layouts/pages/NewResource.vue'
  import SavedResources from './components/layouts/pages/SavedResources.vue';

  export default {
    components: {
      'the-header': TheHeader,
      'page-selection': PageSelection,
      'new-resource': NewResource,
      'saved-resources': SavedResources,
    },
    data() {
      return {
        displayedPage: 'new-resource',
        storedResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'The official Vue.js documentation',
            link: 'https://vuejs.org/'
          },
          {
            id: 'google',
            title: 'Google',
            description: 'Learning google',
            link: 'https://google.com/'
          }
        ]
      }
    },
    methods: {
      changeView(page) {
        this.displayedPage = page;
      }
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
