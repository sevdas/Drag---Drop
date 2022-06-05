"use strict";
const app = document.getElementById('app');
let templateEl = document.getElementById('project-input');
let templateElContent = templateEl.content;
app.appendChild(templateElContent);
let templateProjectListEl = document.getElementById('project-list');
let templateProjectListElContent = templateProjectListEl.content;
app.appendChild(templateProjectListElContent);
const formEl = document.querySelector('form');
const titleInputEl = document.querySelector('#title');
const descriptionInputEl = document.querySelector('#description');
const peopleInputEl = document.querySelector('#people');
const sectionEl = document.querySelector('section');
const allListEl = document.querySelector('ul');
const titleEl = document.querySelector('h2');
formEl.id = 'user-input';
const listId = `active-project-list`;
sectionEl.id = `active-projects`;
allListEl.id = listId;
titleEl.textContent = 'active'.toUpperCase() + ' projects';
const addListItem = (projTitle) => {
    var _a;
    let listNode = document.createElement('li');
    listNode.textContent = `${projTitle}`;
    (_a = document.getElementById(listId)) === null || _a === void 0 ? void 0 : _a.append(listNode);
};
const submitHandler = (event) => {
    event.preventDefault();
    const userInput = gatherUserInput();
    const [title, desc, people] = userInput;
    addListItem(title);
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
console.log('test_section', sectionEl);
//# sourceMappingURL=app.js.map