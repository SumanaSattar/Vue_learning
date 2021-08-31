const app = Vue.createApp({
data()
  {
    return {
        myName:'Sumana',
        age:'37',
        ageFuture:'42',
        link:'https://www.shutterstock.com/de/image-illustration/save-water-concept-paper-cut-eco-347798567'
    } ;
  },
  methods:{
      randomNumber(){
       return Math.random();
      }
  }
});
app.mount('#test');