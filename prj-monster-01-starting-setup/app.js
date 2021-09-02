function randomValue(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth:100,
            playerHealth:100,
            counter:0,
            a=false
        }
    
    },
    watch:{
        counter() {
            if(this.counter ===3) {
                this.a=true;
            }
        }
    },
    methods: {
        playerAttack() {
            this.monsterHealth= this.monsterHealth- randomValue(5,10);
            console.log(this.monsterHealth);
            this.monsterAttack();
            counter++;
        },
        monsterAttack() {
            this.playerHealth =this.playerHealth- randomValue(2,9);
            console.log(this.playerHealth);
        },
        specialAttack() {
            this.monsterHealth=this.monsterHealth-randomValue(10,20);
            this.monsterAttack();
            counter++;
        }
    }
});
app.mount('#game');