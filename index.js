import { addTask } from './js/addTask.js'
import { changeStatus } from './js/changeStatus.js'
import {
	PRIORITY,
	STATUS,
	formLow,
	highPriorityList,
	lowPriorityList,
	toDoInput,
} from './js/constants.js'
import { createDomElement } from './js/createDomElement.js'
import { deleteTask } from './js/deleteTask.js'

export const list = []

formHigh.addEventListener('submit', function (event) {
	event.preventDefault()
	const taskText = toDoInput.value.trim()

	if (taskText) {
		addTask(taskText, PRIORITY.HIGH)
		toDoInput.value = ''
		toDoInput.focus()
		renderTasks()
	}
})

formLow.addEventListener('submit', function (event) {
	event.preventDefault()
	const taskText = toDoInput.value.trim()

	if (taskText) {
		addTask(taskText, PRIORITY.HIGH)
		toDoInput.value = ''
		toDoInput.focus()
		renderTasks()
	}
})

highPriorityList.addEventListener('click', function (event) {
	if (event.target.classList.contains('todo__close')) {
		const toDoItem = event.target.closest('.todo__item')
		const taskName = toDoItem.querySelector('.todo__text').textContent
		deleteTask(taskName)
		renderTasks()
	}
})

lowPriorityList.addEventListener('click', function (event) {
	if (event.target.classList.contains('todo__close')) {
		const toDoItem = event.target.closest('.todo__item')
		const taskName = toDoItem.querySelector('.todo__text').textContent
		deleteTask(taskName)
		renderTasks()
	}
})

highPriorityList.addEventListener('change', function (event) {
	if (event.target.classList.contains('todo__checkbox')) {
		const name = event.target
			.closest('.todo__item')
			.querySelector('.todo__text').textContent
		const status = event.target.checked ? STATUS.DONE : STATUS.IN_PROGRESS
		changeStatus(name, status)
		renderTasks()
	}
})

lowPriorityList.addEventListener('change', function (event) {
	if (event.target.classList.contains('todo__checkbox')) {
		const name = event.target
			.closest('.todo__item')
			.querySelector('.todo__text').textContent
		const status = event.target.checked ? STATUS.DONE : STATUS.IN_PROGRESS
		changeStatus(name, status)
		renderTasks()
	}
})

function clearList() {
	highPriorityList.innerHTML = ''
	lowPriorityList.innerHTML = ''
}

function renderTasks() {
	clearList()
	list.forEach(task => {
		if (task.priority === PRIORITY.HIGH) {
			createDomElement(task, highPriorityList)
		} else {
			createDomElement(task, lowPriorityList)
		}
	})
}
