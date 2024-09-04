import { list } from './../index.js'
import { STATUS } from './constants.js'

export function addTask(taskText, priority) {
	if (list.some(task => task.name === taskText)) {
		return
	}

	const newTask = {
		name: taskText,
		priority: priority,
		status: STATUS.IN_PROGRESS,
	}
	list.push(newTask)
}
