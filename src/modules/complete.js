import check from './check.js';

export default function isCompleted() {
  const checked = document.querySelectorAll('.select');

  checked.forEach((itemCheck) => {
    itemCheck.addEventListener('change', (e) => {
      const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
      todoList.forEach((item) => {
        if ((item.completed === false) && (+e.target.id === item.index)) {
          item.completed = true;
          check(item);
          localStorage.setItem('todoList', JSON.stringify(todoList));
        } else if ((item.completed === true) && (+e.target.id === item.index)) {
          item.completed = false;
          check(item);
          localStorage.setItem('todoList', JSON.stringify(todoList));
          window.location.reload();
        }
      });
    });
  });
}