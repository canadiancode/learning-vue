<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal.goal" :timeframe="goal.timeframe"></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                goals: [
                    {
                        goal: 'Finish the course',
                        timeframe: 'End of July'
                    },
                    {
                        goal: 'Learn Vue',
                        timeframe: 'End of the month'
                    }
                ],
            }
        }
    }
</script>