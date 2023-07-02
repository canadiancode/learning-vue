const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '123 456 7890',
                    email: 'manuellorenz@email.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '987 654 3210',
                    email: 'juliejones@email.com'
                }
            ],
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '123 456 7890',
                email: 'manuellorenz@email.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');