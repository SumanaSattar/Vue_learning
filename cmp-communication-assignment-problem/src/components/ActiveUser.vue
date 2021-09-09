
<template>
  <section>
      <ul v-for="user in users" :key="user.id">
          <li>{{user.name}}</li>
          <li>{{user.age}}</li>
      </ul>
      
  </section>
</template>

<script>
export default {
    props:['users']

}
</script>

<style>

</style>