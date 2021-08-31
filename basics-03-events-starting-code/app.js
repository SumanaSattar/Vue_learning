const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      value:'',
      valueFinal:''
    };
  },
  methods:{
    add(){
      this.counter++;
    },
    remove(){
      this.counter--;
    },
    inputValue(event){
      this.value=event.target.value;

    },
    submitPage() {
      alert("hello")
    },
    finalValue() {
      this.valueFinal=this.value;
    }

  }
});

app.mount('#events');
