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
                    text: 'mangiare un cappello',
                    done: true
                },
                {
                    id: 3,
                    text: 'fare il bucato',
                    done: false
                },
            ],
            lastId: this.tasks,
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
        },
        addTask() {
            if (this.todoText.replaceAll(' ', '') !== '') {
                this.lastId++
                const newtask = {
                    id: this.lastId,
                    text: this.todoText,
                    done: false
                }

                this.tasks.unshift(newtask)
            }
            this.todoText = ''
        },
    }
}

createApp(obj).mount('#app')