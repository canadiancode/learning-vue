<template>
    <div>
        <h2>Mange Goals</h2>
        <input type="text" ref="goal"/>
        <button @click="setGoal">Set goal</button>
        <error-alert v-if="inputIsInvalid">
            <h2>Input is Invalid</h2>
            <p>Please enter at least a single charater..</p>
            <button @click="confirmError">Confirm Error</button>
        </error-alert>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
    export default {
        components: {
            'error-alert': ErrorAlert,
        },
        data() {
            return {
                inputIsInvalid: false,
            };
        },
        methods: {
            setGoal() {
                const enteredValue = this.$refs.goal.value;
                if (enteredValue === '') {
                    this.inputIsInvalid = true;
                }
            },
            confirmError() {
                this.inputIsInvalid = false;
            }
        }
    }
</script>