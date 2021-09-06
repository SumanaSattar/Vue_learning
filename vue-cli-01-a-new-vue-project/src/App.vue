<template>
  <section>
    <h1> Hello world </h1>
    <card name="zartab" age="10"></card>
    <card name="Maham" age="30"></card>
  </section>
</template>
<script>

export default {
    data() {
        return {
            friends:[
                {
                    name:'zartab',
                    age:10,
                    id:2
                }
            ]
        }
    },
}
</script>
