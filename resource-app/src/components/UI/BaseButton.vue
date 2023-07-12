<template>
    <button :class="buttonClass">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ['buttonClass'],
    }
</script>

<style scoped>
    button {
        height: 30px;
        padding: 0em 1rem;
        cursor: pointer;
        background-color: rgb(47, 79, 79, 0.2);
        color: black;
        border: none;
        border-radius: 12px;
    }
    button:hover {
        background-color: rgb(47, 79, 79, 0.8);
        color: white;
    }
    .flat {
        background-color: transparent;
        color: black;
    }
    .flat:hover,
    .flat:active {
        background-color: rgb(47, 79, 79);
    }
</style>