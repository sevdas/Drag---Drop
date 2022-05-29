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
console.log('User input: ', titleInputEl.value)
}


// Event Handlers
formEl.addEventListener('submit', submitHandler)


console.log('test_people-input', peopleInputEl)

