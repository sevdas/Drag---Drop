//Template
let templateEl = <HTMLTemplateElement>document.getElementById('project-input');
const app = <HTMLDivElement>document.getElementById('app')!;
let templateElContent = templateEl.content
app.appendChild(templateElContent) 


// Elements
const formEl =  <HTMLFormElement>document.querySelector('form');
const titleInputEl = <HTMLInputElement>document.querySelector('#title')
const descriptionInputEl = <HTMLInputElement>document.querySelector('#description')
const peopleInputEl = <HTMLInputElement>document.querySelector('#people')

// Add css selectors to the elements dynamically
formEl.id = 'user-input'


// Handler helpers
const submitHandler = (event: Event) => {
// prevent HTTP req send
event.preventDefault();
const userInput = gatherUserInput();
const [title, desc, people] = userInput
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

