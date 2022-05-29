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
    const userInput = gatherUserInput();
    const [title, desc, people] = userInput;
    console.log('title', title, 'desc', desc, 'people', people);
    clearInputs();
};
const gatherUserInput = () => {
    const enteredTitle = titleInputEl.value;
    const enteredDescription = descriptionInputEl.value;
    const enteredPeople = peopleInputEl.value;
    return [enteredTitle, enteredDescription, +enteredPeople];
};
const clearInputs = () => {
    titleInputEl.value = '';
    descriptionInputEl.value = '';
    peopleInputEl.value = '';
};
formEl.addEventListener('submit', submitHandler);
console.log('test_people-input', peopleInputEl);
//# sourceMappingURL=app.js.map