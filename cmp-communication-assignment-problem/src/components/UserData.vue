<template>
<section>
    <form @submit.prevent="storeData">
         <label>Name </label>
        <input type='text' v-model="nameStore">
        <br>
        <br>
        <label>Age </label>
        <input type='text' v-model="ageStore">
        <button @click="takingValues">Submit</button>
    </form>
   
</section>

</template>

<script>
export default {
    
 data() {
     return {
         nameStore:'',
         ageStore:'',
         data:{}
     }
 },
 methods:{
     takingValues() {
        this.data={name:this.nameStore,
                   age:this.ageStore}
        
     },
     storeData() {
         console.log(this.data)
         this.$emit('adding-data',this.data);
         console.log('called');
     }
 }
}
</script>

<style>

</style>