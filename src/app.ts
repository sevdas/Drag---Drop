// App
const app = <HTMLDivElement>document.getElementById('app')!;

//Template for input
let templateEl = <HTMLTemplateElement>document.getElementById('project-input');
let templateElContent = templateEl.content
app.appendChild(templateElContent) 

//Template for Projects
let templateProjectListEl = <HTMLTemplateElement>document.getElementById('project-list');
let templateProjectListElContent = templateProjectListEl.content
app.appendChild(templateProjectListElContent) 


// Dynamically add css selectors to the elements based on type
// let type: string
// type = type ? 'active' : 'finished' 


// Input Elements
const formEl =  <HTMLFormElement>document.querySelector('form');
const titleInputEl = <HTMLInputElement>document.querySelector('#title')
const descriptionInputEl = <HTMLInputElement>document.querySelector('#description')
const peopleInputEl = <HTMLInputElement>document.querySelector('#people')


// Project List Elements
const sectionEl = <HTMLElement>document.querySelector('section'); // document.querySelector('section') as HTMLElement
const allListEl = <HTMLUListElement>document.querySelector('ul')
const titleEl = <HTMLElement>document.querySelector('h2');

// Dynamic css variables
formEl.id = 'user-input'
const listId = `active-project-list`

// Dynamic css variables for projects section
sectionEl.id = `active-projects`
allListEl.id = listId;
titleEl!.textContent = 'active'.toUpperCase() + ' projects';


// Add list item
const addListItem = (projTitle: string) =>{
    let listNode = document.createElement('li');
    listNode.textContent = `${projTitle}`
    document.getElementById(listId)?.append(listNode)
}


// Handler helpers
const submitHandler = (event: Event) => {
event.preventDefault(); // prevent HTTP req send
const userInput = gatherUserInput();
const [title, desc, people] = userInput
addListItem(title)
console.log('title', title, 'desc', desc, 'people', people)
clearInputs()
}


const gatherUserInput = (): [string, string, number] => {
    const enteredTitle = titleInputEl.value
    const enteredDescription = descriptionInputEl.value
    const enteredPeople = peopleInputEl.value

    //Validation
    return [enteredTitle, enteredDescription, +enteredPeople]
}

const clearInputs = () => {
    titleInputEl.value = ''
    descriptionInputEl.value = ''
    peopleInputEl.value = ''
}


// Event Handlers
formEl.addEventListener('submit', submitHandler)


console.log('test_people-input', peopleInputEl)
console.log('test_section', sectionEl)
