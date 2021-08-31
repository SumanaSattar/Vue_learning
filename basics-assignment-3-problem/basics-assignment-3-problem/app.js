const app =Vue.createApp({
    data(){
      return {
          number:0,
          result:''
      }
    },
    watch:{
        number() {
          if (this.number===37){
            this.result='37'
          }
          if (this.number < 37) {
              this.result='not there yet'
          }
          if (this.number > 37) {
            this.result='Too much'
        }
        }
    },
    methods:{
        addFive(){
            console.log(this.number)
            this.number=this.number + 5;
            console.log(this.number);
        },
        addOne(){
            this.number++;
            console.log(this.number);
        }
    }
    });
app.mount('#assignment')