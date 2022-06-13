interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
    dragOverHandler(event: DragEvent): void // to signal browser that the thing dragging something over is a valid valid target
    dropHandler(event: DragEvent): void // updating UI
    dragLeaveHandler(event: DragEvent): void
}

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

//Template for Single Project
let templateProjectListEl = <HTMLTemplateElement>document.getElementById('project-list');
let templateProjectListElContent = templateProjectListEl.content
app.appendChild(templateProjectListElContent) 

//Template for Multiple Projects
let templateProjectsListEl = <HTMLTemplateElement>document.getElementById('single-project');
let templateProjectsListElContent = templateProjectsListEl.content
app.appendChild(templateProjectsListElContent) 


// Input Elements
const formEl = <HTMLFormElement>document.querySelector('form');
const titleInputEl = <HTMLInputElement>document.querySelector('#title')
const descriptionInputEl = <HTMLInputElement>document.querySelector('#description')
const peopleInputEl = <HTMLInputElement>document.querySelector('#people')


// Project List Elements
const singleProj = <HTMLElement>document.getElementById('single-project')
const projectsSection = <HTMLElement>document.getElementById('projects')
const allActiveListEl = <HTMLUListElement>document.querySelector('.active');


const activeSectionEl = <HTMLElement>document.querySelector('section:nth-child(2)'); // document.querySelector('section') as HTMLElement
const activeTitleEl = <HTMLElement>activeSectionEl.firstElementChild?.firstElementChild;


// Dynamic css variables 
formEl.id = 'user-input'

const activeListId = `${ProjectSatus.Active}-project-list`
// const finishedListId = `${ProjectSatus.Finished}-project-list`

// Dynamic css variables for projects section
projectsSection.id = `active-projects`;
allActiveListEl.id = activeListId;
activeTitleEl!.textContent = `${ProjectSatus.Active}`.toUpperCase() + ' projects';


// Add list item
const addListItem = (projTitle: string, projType: string) =>{
    let listNode = document.createElement('li');
    listNode.textContent = `${projTitle}`


    if(projType === activeListId) {
        document.getElementById(activeListId)?.append(listNode)
    }
}


// Handler helpers
const submitHandler = (event: Event) => {
event.preventDefault(); // prevent HTTP req send
const userInput = gatherUserInput();
const [title, desc, people] = userInput
addListItem(title, activeListId)
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


