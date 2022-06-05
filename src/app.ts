enum ProjectSatus {
    Active = 'active',
    Finished = 'finished',
}

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
const activeSectionEl = <HTMLElement>document.querySelector('section:nth-child(2)'); // document.querySelector('section') as HTMLElement
const finishedSectionEl = <HTMLElement>document.querySelector('section:nth-child(3)');
const allActiveListEl = <HTMLUListElement>document.querySelector('.active');
console.log('allActiveListEl', allActiveListEl)
const allFinishedListEl = <HTMLUListElement>document.querySelector('.finished')
console.log('allActiveListEl', allFinishedListEl)
const activeTitleEl = <HTMLElement>activeSectionEl.firstElementChild?.firstElementChild;
const finishedTitleEl = <HTMLElement>finishedSectionEl.firstElementChild?.firstElementChild;

// Dynamic css variables 
formEl.id = 'user-input'

const activeListId = `${ProjectSatus.Active}-project-list`
const finishedListId = `${ProjectSatus.Finished}-project-list`

// Dynamic css variables for projects section
activeSectionEl.id = `active-projects`;
finishedSectionEl.id = `finished-projects`
allActiveListEl.id = activeListId;
allFinishedListEl.id = finishedListId;
activeTitleEl!.textContent = `${ProjectSatus.Active}`.toUpperCase() + ' projects';
finishedTitleEl!.textContent = `${ProjectSatus.Finished}`.toUpperCase() + ' projects';


// Add list item
const addListItem = (projTitle: string, projType: string) =>{
    let listNode = document.createElement('li');
    listNode.textContent = `${projTitle}`

    if(projType === activeListId) {
        document.getElementById(activeListId)?.append(listNode)
    }
    if(projType === finishedListId) {
        document.getElementById(finishedListId)?.append(listNode)
    }
}


// Handler helpers
const submitHandler = (event: Event) => {
event.preventDefault(); // prevent HTTP req send
const userInput = gatherUserInput();
const [title, desc, people] = userInput
addListItem(title, activeListId)
addListItem(title, finishedListId)
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

// Have 2 sections - one active - one finished
// drag adn drop active into finished 
