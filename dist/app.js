"use strict";
var _a, _b;
var ProjectSatus;
(function (ProjectSatus) {
    ProjectSatus["Active"] = "active";
    ProjectSatus["Finished"] = "finished";
})(ProjectSatus || (ProjectSatus = {}));
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
const activeSectionEl = document.querySelector('section:nth-child(2)');
const finishedSectionEl = document.querySelector('section:nth-child(3)');
const allActiveListEl = document.querySelector('.active');
console.log('allActiveListEl', allActiveListEl);
const allFinishedListEl = document.querySelector('.finished');
console.log('allActiveListEl', allFinishedListEl);
const activeTitleEl = (_a = activeSectionEl.firstElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild;
const finishedTitleEl = (_b = finishedSectionEl.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild;
formEl.id = 'user-input';
const activeListId = `${ProjectSatus.Active}-project-list`;
const finishedListId = `${ProjectSatus.Finished}-project-list`;
activeSectionEl.id = `active-projects`;
finishedSectionEl.id = `finished-projects`;
allActiveListEl.id = activeListId;
allFinishedListEl.id = finishedListId;
activeTitleEl.textContent = `${ProjectSatus.Active}`.toUpperCase() + ' projects';
finishedTitleEl.textContent = `${ProjectSatus.Finished}`.toUpperCase() + ' projects';
const addListItem = (projTitle, projType) => {
    var _a, _b;
    let listNode = document.createElement('li');
    listNode.textContent = `${projTitle}`;
    if (projType === activeListId) {
        (_a = document.getElementById(activeListId)) === null || _a === void 0 ? void 0 : _a.append(listNode);
    }
    if (projType === finishedListId) {
        (_b = document.getElementById(finishedListId)) === null || _b === void 0 ? void 0 : _b.append(listNode);
    }
};
const submitHandler = (event) => {
    event.preventDefault();
    const userInput = gatherUserInput();
    const [title, desc, people] = userInput;
    addListItem(title, activeListId);
    addListItem(title, finishedListId);
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