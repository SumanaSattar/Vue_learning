const app = Vue.createApp({
    data() {
        return {
            taskAdded:'',
            tasks:[],
            check:true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskAdded);
            this.taskAdded='';
        },
        toggle() {
          this.check=!this.check;
        }
    }
});
app.mount('#assignment')