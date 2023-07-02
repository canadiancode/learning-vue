// Get random value for attacks
function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Vue app
const vueApp = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages:  [],
        }
    },
    watch: {
        playerHealth(value) {
            console.log(value);
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
                console.log('player won');
            }
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAtack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
            this.currentRound++;
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.currentRound++;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(20, 8);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
                this.addLogMessage('player', 'heal', healValue);
            }
            this.currentRound++;
            this.attackPlayer();
        },  
        surrender() {
            this.winner = 'monster';
            this.addLogMessage('player', 'surrender', attackValue);
        },
        restartGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.logMessages = [];
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});
vueApp.mount('#game');