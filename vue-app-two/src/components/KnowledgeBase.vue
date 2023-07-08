<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- <knowledge-grid 
      :topics="topics" 
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-grid> -->
    <knowledge-grid></knowledge-grid>


  </section>
</template>

<script>
export default { 
  // No need since we are using provide & inject
  // props: ['topics'],
  // emits: ['select-topic'],
  props: [ 'id', 'name', 'phoneNumber', 'emailAddress', 'isFavorite'],
};

</script>