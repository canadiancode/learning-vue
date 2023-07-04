<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite === true ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: {{ phoneNumber }}</li>
            <li>Email: {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        // props: [
        //     'name',
        //     'phoneNumber',
        //     'emailAddress',
        //     'isFavorite',
        // ],
        props: {
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
                friendIsFavorite: this.isFavorite,
            };
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                this.$emit('toggle-favorite');
            }
        }
    }
</script>