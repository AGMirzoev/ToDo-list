import { list } from './../index.js'

export function deleteTask(taskName) {
	const taskIndex = list.findIndex(item => item.name === taskName)

	list.splice(taskIndex, 1)
}
