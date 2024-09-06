import {
	PRIORITY,
	STATUS,
	formHigh,
	formLow,
	highPriorityList,
	lowPriorityList,
	toDoInputs,
} from './js/constants.js'
import { createDomElement } from './js/createDomElement.js'
import { addTask, changeStatus, deleteTask } from './js/operations.js'

import tasks from './tasks.json' with { type: "json" }
export const list = tasks.list

function handleFormSubmit(event, priority) {
	event.preventDefault()

	toDoInputs.forEach(input => {
		const taskText = input.value.trim()
		if (taskText) {
			addTask(taskText, priority)
			input.value = ''
			input.focus()
		}
	})

	renderTasks()
}

formHigh.addEventListener('submit', function (event) {
	handleFormSubmit(event, PRIORITY.HIGH)
})

formLow.addEventListener('submit', function (event) {
	handleFormSubmit(event, PRIORITY.LOW)
})

function handleTaskDelete(event) {
	if (event.target.classList.contains('todo__close')) {
		const toDoItem = event.target.closest('.todo__item')
		const taskName = toDoItem.querySelector('.todo__text').textContent
		deleteTask(taskName)
		renderTasks()
	}
}

highPriorityList.addEventListener('click', handleTaskDelete)
lowPriorityList.addEventListener('click', handleTaskDelete)

function handleTaskChange(event) {
	if (event.target.classList.contains('todo__checkbox')) {
		const name = event.target
			.closest('.todo__item')
			.querySelector('.todo__text').textContent
		const status = event.target.checked ? STATUS.DONE : STATUS.IN_PROGRESS
		changeStatus(name, status)
		renderTasks()
	}
}

highPriorityList.addEventListener('change', handleTaskChange)

lowPriorityList.addEventListener('change', handleTaskChange)

function clearList() {
	highPriorityList.innerHTML = ''
	lowPriorityList.innerHTML = ''
}

function renderTasks() {
  clearList();
  list.forEach(task => {
    createDomElement(task, task.priority === PRIORITY.HIGH ? highPriorityList : lowPriorityList);
  });
}

window.onload = renderTasks;
