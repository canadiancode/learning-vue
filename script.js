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
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxA = true;
            } else if (box === 'B') {
                this.boxB = true;
            } else if (box === 'C') {
                this.boxC = true;
            }
        }
    }
});
sectionTenApp.mount('#section-ten');

// Section 11
const sectionEleventApp = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxA = !this.boxA;
            } else if (box === 'B') {
                this.boxB = !this.boxB;
            } else if (box === 'C') {
                this.boxC = !this.boxC;
            }
        },
    }
});
sectionEleventApp.mount('#section-eleven');

// Section 12
const sectionTwelveApp = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    computed: {
        boxAClasses() {
            return {
                active: this.boxA
            }
        },
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxA = !this.boxA;
            } else if (box === 'B') {
                this.boxB = !this.boxB;
            } else if (box === 'C') {
                this.boxC = !this.boxC;
            }
        },
    }
});
sectionTwelveApp.mount('#section-twelve');

// Section 13
const sectionThirteenApp = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
    }
});
sectionThirteenApp.mount('#section-thirteen');

// Section 14
const sectionFourteenApp = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = '';
        }
    }
});
sectionFourteenApp.mount('#section-fourteen');

// Section 15
const sectionFifteenApp = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = '';
        }
    }
});
sectionFifteenApp.mount('#section-fifteen');

// Section 16
const sectionSixteenApp = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            myGoals: {
                name: 'Kevin',
                myGoal: 'Kick ass',
                howLong: 'My whole life'
            },

        }
    },
    methods: {

    }
});
sectionSixteenApp.mount('#section-sixteen');