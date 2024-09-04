export function createDomElement(task, toDoList) {
	const toDoItem = document.createElement('li')
	const toDoLabel = document.createElement('label')
	const toDoInput = document.createElement('input')
	const toDoCheckbox = document.createElement('span')
	const toDoText = document.createElement('p')
	const toDoBtn = document.createElement('span')

	toDoItem.classList.add('todo__item')
	toDoLabel.classList.add('todo__label')
	toDoInput.classList.add('todo__input')
	toDoInput.type = 'checkbox'
	toDoCheckbox.classList.add('todo__checkbox')
	toDoText.classList.add('todo__text')
	toDoBtn.classList.add('todo__btn', 'todo__close')

	toDoText.textContent = task.name
	toDoList.appendChild(toDoItem)
	toDoItem.appendChild(toDoLabel)
	toDoLabel.appendChild(toDoInput)
	toDoLabel.appendChild(toDoCheckbox)
	toDoLabel.appendChild(toDoText)
	toDoItem.appendChild(toDoBtn)
}
