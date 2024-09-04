import { list } from './../index.js'

export function changeStatus(name, status) {
	const task = list.find(item => item.name === name)
	if (task) {
		task.status = status
	}
}
