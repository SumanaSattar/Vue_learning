<template>
   <section>
       <div v-if="contentVisible">
           <h1>{{name}}</h1>
            <h3>{{age}}</h3>
       </div>
       
       <button @click="showContent">show</button>
   </section>
    
</template>

<script>
export default {
    props:[
        'name',
        'age'
    ],
    data() {
      return {
          contentVisible:true,
          friends:[
             {
                    name:'zartab',
                    age:10,
                    id:2
                } 
          ]
      }  
    },
    methods:{
        showContent() {
            console.log('i m here')
            this.contentVisible=!this.contentVisible;
        }
    }
}
</script>