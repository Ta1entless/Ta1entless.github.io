const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos__wrapper');
const addTaskKey = document.getElementById('description-task');

let tasks;
let todoItemElems = [];

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(description) {
	this.description = description;
	this.completed = false;
}

/*const createT = (task, index) => {
	var template  = document.querySelector(#element__task)
	const desc = template.content.querySelector(#desc)
	const span = template.content.querySelector('span')
	

}*/

const createTemplate = (task, index) => {
	return `
		<div class="todo__item ${task.completed ? 'checked' : ""}">
			<div class="description">${task.description}</div>
			<div class="buttons">
				<input onclick="completeTask(${index})"class="btn__complete" type="checkbox" ${task.completed ? 'checked' : ""}>
				<button onclick="deleteTask(${index})"class="btn__delete">Delete</button>
			</div>
		</div>
	`
}

const filterTasks = () => {
	const activeTasks = tasks.length && tasks.filter(item => item.completed == false)
	const completeTask = tasks.length && tasks.filter(item => item.completed == true)
	tasks = [...activeTasks, ...completeTask];
}

const fillHtmlList = () => {
	todosWrapper.innerHTML = "";
	if (tasks.length > 0) {
		filterTasks();
		tasks.forEach((item, index) => {
			todosWrapper.innerHTML += createTemplate(item, index);
		})
		todoItemElems = document.querySelectorAll('.todo__item');

	}
}

fillHtmlList();
const updateLocal = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}
const deleteTask = index => {
	todoItemElems[index].classList.add('delition');
	setTimeout(() => {
		tasks.splice(index, 1);
		updateLocal();
		fillHtmlList();
	}, 500)
}

const completeTask = index => {
	tasks[index].completed = !tasks[index].completed;
	if (tasks[index].completed) {
		todoItemElems[index].classList.add('checked');
	} else {
		todoItemElems[index].classList.remove('checked');
	}
	updateLocal();
	fillHtmlList();
}

addTaskKey.addEventListener('keydown', () => {
	if (event.keyCode == 13)  {
		tasks.push(new Task(deskTaskInput.value));
		console.log('Key: ', event.key);
		updateLocal();
		fillHtmlList();
		deskTaskInput.value = '';
	}
})


addTaskBtn.addEventListener('click', () => {
	tasks.push(new Task(deskTaskInput.value));
	console.log('Key: ', event.key);
	updateLocal();
	fillHtmlList();
	deskTaskInput.value = '';
	
})

