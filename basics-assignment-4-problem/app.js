const app =Vue.createApp(
    {
        data() {
            return {
                firstInput:'',
                userOne:false,
                userTwo:false,
                color:'',
                colorCheck:false
               
            }
        },
        computed: {
            styling() {
                console.log('styling')
                if (this.userOne === true) {
                    return {user1:this.userOne}
                } else if (this.userTwo === true) {
                    return {user2:this.userTwo}
                }
            }
               
           
        },
        methods: {
            
            
            finalValue(event) {
                 this.firstInput = event.target.value
                 console.log('enter pressed');
                 console.log(this.firstInput);
                if(this.firstInput === 'user1') {
                    console.log('1');
                    this.userOne=true;


                }else if(this.firstInput === 'user2') {
                    console.log('2');
                    this.userTwo=true;
                    console.log(this.userTwo);
                }
                console.log(this.userOne);
                console.log(this.userTwo);

            },
            toggleStyling() {
                if (this.userOne===true) {
                    this.userTwo=true;
                    this.userOne=false;
                } else if (this.userTwo===true) {
                    this.userTwo=false;
                    this.userOne=true;
                }
            },
            secondValue(event) {
                this.color=event.target.value;
                this.colorCheck=true;
            }
        }
    }
);
app.mount('#assignment')