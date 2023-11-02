export { getIndex }

function getIndex(id, tasks) {
    for (let i = 0; i < tasks.length; i++) {
        if (id === tasks[i].id) {
            return i;
        }
    }
}

