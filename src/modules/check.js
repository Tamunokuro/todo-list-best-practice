export default function check (item) {
    const todoItems = document.querySelectorAll('.todo-item');
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    todoItems.forEach((todoI) => {
        if (todoI.id === item.index.toString() && item.completed) { 
            todoI.classList.add('checked'); 
        } else if (todoI.id === item.index.toString() && !item.completed) {
            todoI.classList.remove('checked'); 
        }
    })
    localStorage.setItem('todoList', JSON.stringify(todoList));
} 