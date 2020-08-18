// selectors
var todoInput = document.querySelector('.todo-input')
var todoButton = document.querySelector('.todo-button')
var todoList = document.querySelector('.todo-list')

// EventListeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)


// Functions
function addTodo() {
    if (todoInput.value != ''){
        event.preventDefault()
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        const newTodo = document.createElement('li')
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
    
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fa fa-check"></i>'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)
    
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fa fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)
    
        todoList.appendChild(todoDiv)
    
        todoInput.value = ''
    }
    else {
        alert('Please add a name!')
    }
    
}

function deleteCheck(e) {
    const item = e.target
    if (item.classList[0] === 'trash-btn') {
        var todo = item.parentElement 
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
        // item.parentElement.remove()
    }
    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed')
    }
}