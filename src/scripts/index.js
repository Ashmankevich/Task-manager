const addTaskBtn = document.querySelector('#AddTaskBtn');
const list_el = document.querySelector('#tasks');
const addBtn = document.querySelector('.form__add-btn');
const cancelBtn = document.querySelector('.form__cancel-btn');
const textArea = document.querySelector('.form__textarea');
const form = document.querySelector('.form');
const itemDel = document.getElementsByClassName('card__delete');
const editBtn = document.querySelector('.card__edit');
const itemDesc = document.querySelector('.card__description');
const boardName = document.querySelector('.header__title');


//локал сторидж

let tasks;

if (localStorage.tasks === tasks) {
    tasks = [];
} else {
    tasks = JSON.parse(localStorage.getItem('todos'));
    displayTask();
};

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
updateLocalStorage();

//Модальное окно ввода названия задачи

addTaskBtn.addEventListener('click', () => {
    form.style.display = 'block';
    addTaskBtn.style.display = 'none';
    addBtn.style.display = 'none';

    //Проверяем, если инпут пустой, тогда кнопку добавления прячем
    textArea.addEventListener('input', () => {
        if (textArea.value.trim()) {
            addBtn.style.display = 'block';
        } else {
            addBtn.style.display = 'none';
        }
    })
});

cancelBtn.addEventListener('click', () => {
    textArea.value = '';
    value = '';
    form.style.display = 'none';
    addTaskBtn.style.display = 'block';
});

// создание задачи

function createTask(item) {
    const card_el = document.createElement("article");
    card_el.classList.add("card");
    card_el.setAttribute('id', item.id);
    card_el.draggable = true;

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("card__header");
    card_el.appendChild(task_content_el);

    const card_priority = document.createElement("p");
    card_priority.classList.add("card__priority");
    card_priority.innerText = 'High';
    task_content_el.appendChild(card_priority);

    const editBtn = document.createElement("button");
    editBtn.classList.add("card__edit");
    editBtn.innerHTML = "Edit";
    task_content_el.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("card__delete");
    deleteBtn.innerHTML = "Delete";
    task_content_el.appendChild(deleteBtn);

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = textArea.value;
    //cardTitle.contentEditable = true;
    card_el.appendChild(cardTitle);

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("card__description");
    cardDesc.innerText = "Enter a description of the task.."
    cardDesc.contentEditable = true;
    card_el.appendChild(cardDesc);

    const footer = document.createElement("div");
    footer.classList.add("card__footer");
    card_el.appendChild(footer);

    const cardUser = document.createElement("div");
    cardUser.classList.add("card__user");
    cardUser.textContent = '+';
    footer.appendChild(cardUser);

    const cardConfirm = document.createElement("div");
    cardConfirm.classList.add("card__confirmation");
    footer.appendChild(cardConfirm);

    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("card__confirm");
    confirmBtn.innerHTML = "Confirm";
    cardConfirm.appendChild(confirmBtn);

    const revokeBtn = document.createElement("button");
    revokeBtn.classList.add("card__confirm");
    revokeBtn.innerHTML = "Cancel";
    cardConfirm.appendChild(revokeBtn);
    
    form.style.display = 'none';
    addTaskBtn.style.display = 'block';
    textArea.value = '';
    value = '';

    return card_el;
};

function displayTask() {
    list_el.innerHTML = '';

    tasks.forEach((item) => {
        list_el.appendChild( createTask(item) );
    });
};

function addNewItem() {
        tasks.push( {
            id: Date.now(),
            board: boardName.innerHTML,
            title: textArea.value,
            comment: "",
            priority: 'low',
            status: "backlog",
            user: "",
        });
        displayTask();
        updateLocalStorage();
};

addBtn.addEventListener('click', function() {
    addNewItem();
});


import { currentTime } from './time.js';
currentTime()

import { getUsers } from './users.js';
getUsers()


//свитчер

const switchBtn = document.getElementById('switchBtn');
switchBtn.addEventListener ("click", function() {
   document.body.classList.toggle("light")
});

