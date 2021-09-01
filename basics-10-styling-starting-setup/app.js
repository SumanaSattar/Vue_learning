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
           this.divAselected =true;
           console.log(this.divAselected);
       }else if ( selected === 'B') {
        this.divBselected =true;
        console.log('B');
       }else if ( selected === 'C') {
        this.divCselected =true;
        console.log('c');
    }
    } 
}
})
app.mount('#styling');