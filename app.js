const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const wrapper = document.querySelector('.todo-wrapper');

button.addEventListener('click', () => {
  const newListItem = document.createElement('li');
  newListItem.classList.add('list');
  newListItem.innerHTML = `
    <p>${input.value}</p>
    <img class='list-img' src='images/trash-icon.png'>
  `;
  const trashIcon = newListItem.querySelector('.list-img');
  trashIcon.addEventListener('click', () => {
    newListItem.remove();
  });

  wrapper.appendChild(newListItem);
  input.value = '';
});


