<template>

    <header>
        <h1>{{ title }}</h1>
    </header>

</template>

<script>

export default {
    props: ['title'],
    data() {
        return {

        }
    }
}

</script>

<style scoped>
    header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        background-color: darkslategrey;
        margin: 0;
        height: 80px;
    }
</style>

