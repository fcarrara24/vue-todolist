const { createApp } = Vue;
const obj = {
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    text: 'prendere i diamanti',
                    done: false
                },
                {
                    id: 2,
                    text: 'fare a',
                    done: true
                },
                {
                    id: 3,
                    text: 'fare il bucato',
                    done: false
                },
            ],
            lastId: 3,
            todoText: '',
            filterValue: '',
        }
    },
    methods: {
        changeThings() {

        },
        removeTask(id) {
            //isolating the index and removing it
            const index = this.tasks.find((task) => { return task.id === id })
            this.tasks.splice(index, 1);
        }
    }
}

createApp(obj).mount('#app')