"use strict";
let templateEl = document.getElementById('project-input');
const app = document.getElementById('app');
let templateElContent = templateEl.content;
app.appendChild(templateElContent);
const formEl = document.querySelector('form');
const titleInputEl = document.querySelector('#title');
const descriptionInputEl = document.querySelector('#description');
const peopleInputEl = document.querySelector('#people');
formEl.id = 'user-input';
const submitHandler = (event) => {
    event.preventDefault();
    console.log('User input: ', titleInputEl.value);
};
formEl.addEventListener('submit', submitHandler);
console.log('test_people-input', peopleInputEl);
//# sourceMappingURL=app.js.map