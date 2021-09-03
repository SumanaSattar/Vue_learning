function randomValue(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth:100,
            playerHealth:100,
            counter:0,
            a:false,
            gameEnd:false
        }
    
    },
    watch:{
        counter() {
            if(this.counter ===3) {
               
                this.a=!this.a;
                this.counter=0;
            }
        }
    },
    computed:{
          setValue() {
             
              return this.a;
          },
          
    },
    methods: {
        
        
        playerAttack() {
            if(this.monsterHealth <= 0){
                    this.monsterHealth=0;
                    this.result(player);
                    this.gameEnd=true;
            }else{
                this.monsterHealth= this.monsterHealth- randomValue(5,10);
                console.log(this.monsterHealth);
                this.monsterAttack();
                this.counter++;
            }
           
           
        },
        monsterAttack() {
            
            this.playerHealth =this.playerHealth- randomValue(2,9);
            console.log(this.playerHealth);
        },
        startAgain() {
            this.monsterHealth=100;
            this.playerHealth=100;
            this.counter=0;
            this.a=false;
            this.gameEnd=false;
        },
        specialAttack() {
            this.monsterHealth=this.monsterHealth-randomValue(10,20);
            this.monsterAttack();
            this.counter++;
        }
    }
    
});
app.mount('#game');