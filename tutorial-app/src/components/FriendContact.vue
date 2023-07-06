<template>
    <li>
        <h2>{{ name }} {{ isFavorite === true ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: {{ phoneNumber }}</li>
            <li>Email: {{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
    export default {
        emits: ['toggle-favorite', 'delete'], // adding to show what emits we have  
        props: {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            emailAddress: {
                type: String,
                required: true,  
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        data() {
            return {
                detailsAreVisible: false,
            };
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                this.$emit('toggle-favorite', this.id);
            },
        }
    }
</script>