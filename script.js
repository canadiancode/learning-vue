// Section 1
const sectionOneApp = Vue.createApp({
    data() {
        return {
            vueVariables: 'Interpolation',
            vueLink: 'https://vuejs.org/',
        };
    }
});
sectionOneApp.mount('#section-one');


// Section 2
const sectionTwoApp = Vue.createApp({
    data() {
        return {
            increase: '+',
            decrease: '-',
            count: 0
        }
    },
    methods: {
        add() {
            this.count++;
        },
        remove() {
            this.count--;
        }
    }
});
sectionTwoApp.mount('#section-two');


// Section 3
const sectionThreeApp = Vue.createApp({
    data() {
        return {
            name: '',
            role: ''
        }
    },
    methods: {
        addName(event) {
            this.name = event.target.value;
        },
        addJob(event, where) {
            this.role = event.target.value + '' + where;
        }
    }
});
sectionThreeApp.mount('#section-three');


// Section 4
const sectionFourApp = Vue.createApp({
    data() {
        return {
            buttonText: 'Sign up',
            newSignup: '',
        }
    },
    methods: {
        submitForm(event) {
            this.newSignup = event.target.value;
            console.log(event.target);
        }
    }
});
sectionFourApp.mount('#section-four')