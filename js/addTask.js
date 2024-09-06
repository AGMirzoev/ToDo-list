import { list } from './../index.js'
import { STATUS } from './constants.js'

function stringConverter(taskText) {
	if (list.some(task => task.name === taskText)) {
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

	list.push(newTask)
}
