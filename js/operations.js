import { STATUS } from './constants.js'
import { temporaryTasks } from './temporaryTasks.js'

function stringConverter(taskText) {
	if (temporaryTasks.some(task => task.name === taskText)) {
		throw new Error('Задача с таким названием уже существует')
	}

	if (taskText.length < 3 || taskText.length > 30) {
		throw new Error('Задача менее 3 или более 30 символов')
	}

	return taskText
}

export function addTask(taskText, priority) {
	try {
		stringConverter(taskText)
	} catch (error) {
		alert(error.message)
		return
	}

	const newTask = {
		name: taskText,
		priority: priority,
		status: STATUS.IN_PROGRESS,
	}

	temporaryTasks.push(newTask)
}

export function deleteTask(taskName) {
	const taskIndex = temporaryTasks.findIndex(item => item.name === taskName)
	if (taskIndex !== -1) {
		temporaryTasks.splice(taskIndex, 1)
	}
}

export function changeStatus(name, status) {
	const task = temporaryTasks.find(item => item.name === name)
	if (task) {
		task.status = status
	}
}
