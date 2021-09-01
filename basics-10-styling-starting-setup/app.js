const app = Vue.createApp({
data() {
   return {
       divAselected:false,
       divBselected:false,
       divCselected:false,
   }
},
methods:{
   
    selectedDiv(selected) {
        console.log('here')
       if ( selected === 'A') {
           this.divAselected =!this.divAselected;
           console.log(this.divAselected);
       }else if ( selected === 'B') {
        this.divBselected =!this.divBselected;
        console.log('B');
       }else if ( selected === 'C') {
        this.divCselected =!this.divCselected;
        console.log('c');
    }
    } 
}
})
app.mount('#styling');