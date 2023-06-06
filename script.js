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
            confirmedName: '',
        }
    },
    methods: {
        confirmedInput(event) {
            console.log(event.target.value);
            this.confirmedName = event.target.value;
        }
    }
});
sectionFourApp.mount('#section-four');


// Section 5
const sectionFiveApp = Vue.createApp({
    data() {
        return {
            name: '',
        }
    },
    methods: {
        addName(event) {
            this.name = event.target.value;
        },
        clearName() {
            this.name = '';
        }
    }
});
sectionFiveApp.mount('#section-five');

// Section 6
const sectionSixApp = Vue.createApp({
    data() {
        return {
            name: '',
        }
    },
    computed: {
        fullName() {
            if (this.name === '') {
                return '';
            } else {
                return this.name + ' ' + 'is cool.'
            }
        }
    },
    methods: {
        function() {

        },
    }
});
sectionSixApp.mount('#section-six');

// Section 7
const sectionSevenApp = Vue.createApp({
    data() {
        return {
            name: '',
            fullName: '',
        }
    },
    watch: {
        name(value) {
            if (this.name === '') {
            } else {
                this.fullName = value + ' ' + 'Heids';
            }
        }
    },
    computed: {
        addName() {
            this.name = this.name;
        }
    },
    methods: {
        resetName() {
            this.name = '';
        }
    }
});
sectionSevenApp.mount('#section-seven');

// Section 8
const sectionEightApp = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
        }
    },
    computed: {
        addFirstName() {
            this.firstName = this.firstName;
        },
        addLastName() {
            this.lastName = this.lastName;
        }
    }
});
sectionEightApp.mount('#section-eight');

// Section 9
const sectionNineApp = Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    watch: {
        count(currentCount) {
            if (currentCount > 3) {
                this.count = 0;
            }
        }
    },
    methods: {
        add() {
            this.count++;
        }
    }
});
sectionNineApp.mount('#section-nine');

// Section 10
const sectionTenApp = Vue.createApp({
    data() {
        return {
            key: 0
        }
    },
});
sectionTenApp.mount('#section-ten');
