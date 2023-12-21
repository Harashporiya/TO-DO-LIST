class Task {
    constructor(taskInput) {
        this.taskInput = taskInput;
    }
    displayDetails() {
        const taskList = document.createElement('div');
        taskList.innerHTML = `<p>${this.taskInput}</p>`;


        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.remove();
        });

        taskList.appendChild(removeButton);
        document.getElementById('taskList').appendChild(taskList);
        console.log(`taskInput: ${this.taskInput}`);

    }

}
const addButton = document.getElementById('addButton')
addButton.addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput').value;
    // if (taskInput.trim() !== '') {
    const newTask = new Task(taskInput);
    newTask.displayDetails();
    document.getElementById('taskInput').value = '';
    // } else {
    //     alert('Please enter a task!');
    // }
})


