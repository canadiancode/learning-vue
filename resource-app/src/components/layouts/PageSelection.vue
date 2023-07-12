<template>

    <div>
        <base-button @click="changeDisplayedPage('new-resource')">Add new resource</base-button>
        <base-button @click="changeDisplayedPage('saved-resources')">Review resources</base-button>
    </div>

</template>

<script>

export default {
    emits: ['changed-displayed-page'],
    methods: {
        changeDisplayedPage(page) {
            this.$emit('changed-displayed-page', page);
        }
    }
}


</script>

<style scoped>

    div {
        margin: 0 auto;
        display:flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;
    }

</style>