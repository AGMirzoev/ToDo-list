export const STATUS = {
	IN_PROGRESS: 'В процессе',
	DONE: 'Готово',
}

export const PRIORITY = {
	HIGH: 'Высокий',
	LOW: 'Низкий',
}

export const formHigh = document.getElementById('form__high')
export const formLow = document.getElementById('form__low')
export const highPriorityList = document.getElementById('todo__list-high')
export const lowPriorityList = document.getElementById('todo__list-low')
export const toDoInputs = document.querySelectorAll('.todo__form-input')
