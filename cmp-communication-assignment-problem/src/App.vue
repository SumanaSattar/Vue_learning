<template>
    <section>
        <h1>working with vue framework </h1>
    <active-user :users="users" ></active-user>
    <user-data @adding-data="adding"></user-data>
    </section>
    
</template>
<script>

export default{
 data() {
     return {
         users:[
             { 
                 id:'1',
                 name:'Sumana',
                 age:'37'
             },
              {  id:2,
                 name:'Umer',
                 age:'49'
             },
         ]
     }
 },
 methods:{
     adding(data){
         this.users.push(data);
         
         
     }
 }

}
</script>
<style>

</style>