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
                    done: false
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

        }
    }
}

createApp(obj).mount('#app')