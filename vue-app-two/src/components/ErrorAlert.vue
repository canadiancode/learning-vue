<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {
    margin: 0 auto;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    box-shadow: 0px 2px 8px white;
    padding: 1rem;
}
</style>