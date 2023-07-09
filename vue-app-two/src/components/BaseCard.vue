<template>
    <div>
        <!-- $slots.header checks for slot named header before using the slot template -->
        <header v-if="$slots.header"> 
            <slot name="header">
                <h2>The Default</h2>
            </slot>
        </header>
        <slot></slot> 
        <!-- slot with no name is the default slot -->
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$slots.header);
        }
    }
</script>

<style scoped>
    div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    }

    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
</style>

