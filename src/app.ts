let templateEl = <HTMLTemplateElement>document.getElementById('project-input');
const app = <HTMLDivElement>document.getElementById('app')!;

let templateElContent = templateEl.content
app.appendChild(templateElContent) 
