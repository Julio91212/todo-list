function div(name) {
    let x = document.createElement("div");
    x.classList.add(name);
    return x
}

function button(name) {
    let x = document.createElement("button");
    x.classList.add(name);
    return x
}
//IIFE to create initial layout
const layout = (() => {
    let content = div("content");   
    let sidebar = div("sidebar");
    let newTask = button("task")
    newTask.textContent = "+ Add Task"
    sidebar.appendChild(newTask)
    let projects = document.createElement("h3")
    projects.textContent = "Projects"
    sidebar.appendChild(projects)
    let newProject = button("project")
    newProject.textContent = "+ Add Project"
    sidebar.appendChild(newProject)
    let header = div("header");
    let title = document.createElement("h1")
    title.textContent="Todo List"
    header.appendChild(title)
    let main = div("main");
    let footer = div("footer");
    let footerText = document.createElement("footer")
    footerText.textContent = "Copyright © Julio Cardona 2022"
    footer.appendChild(footerText)
    content.appendChild(sidebar)
    content.appendChild(header)
    content.appendChild(main)
    content.appendChild(footer)
    document.body.appendChild(content)
    return content
})();
//IIFE to create form for new task and new project
const forms = (() => {
    function formInput(parent,name,type) {
        let a = document.createElement("label")
        a.textContent = name.charAt(0).toUpperCase() + name.slice(1) + ":"
        a.setAttribute("for", name)
        let b = document.createElement("br")
        let c = document.createElement("input")
        c.id = name
        c.setAttribute("type", type)
        if (name=="submit") {c.setAttribute("value", "Submit")}
        let d = document.createElement("br")
        parent.append(a,b,c,d)
        return parent
    }
    let taskForm = document.createElement("form")
    taskForm.classList.add("task")
    let formHeader=div("formHeader")
    let formTitle = document.createElement("h3")
    formTitle.textContent = "New Task"
    let closeButton = button("closeButton")
    closeButton.textContent="x"
    formHeader.appendChild(formTitle)
    formHeader.appendChild(closeButton)
    let formInputs = div("formInputs")
    formInput(formInputs,"title", "text")
    formInput(formInputs,"description", "text")
    formInput(formInputs,"due", "date")
    formInput(formInputs,"submit", "submit")
    taskForm.appendChild(formHeader)
    taskForm.appendChild(formInputs)
    let projectForm = document.createElement("form")
    projectForm.classList.add("project")
    let projectHeader=div("formHeader")
    let projectTitle = document.createElement("h3")
    projectTitle.textContent = "New Project"
    let closeButton2 = button("closeButton")
    closeButton2.textContent="x"
    projectHeader.appendChild(projectTitle)
    projectHeader.appendChild(closeButton2)
    projectForm.appendChild(projectHeader)
    formInput(projectForm,"title","text")
    formInput(projectForm,"submit","submit")
    let overlay = div("overlay")
    layout.appendChild(taskForm)
    layout.appendChild(projectForm)
    layout.appendChild(overlay)
    return taskForm, projectForm, overlay
})();

const eventListeners = (() => {
let task = document.querySelector("button.task")
task.addEventListener("click", () => {
    let task = document.querySelector("form.task")
    task.classList.add("taskActive")
})

let project = document.querySelector("button.project")
project.addEventListener("click", () => {
    let project = document.querySelector("form.project")
    project.classList.add("taskActive")
})

let closeBtn = document.querySelector("button.closeButton")
closeBtn.addEventListener("click", () => {
    let task = document.querySelector("form.taskActive")
    let project = document.querySelector("form.projectActive")
    task.classList.add("task")
    project.classList.add("project")
})

let submitTask = document.querySelector("submit")
submitTask.addEventListener("click", (e) => {
    //create new div and 2 buttons when item form is submitted 
    let item = div("item")
    //first button is complete item
    let completeBtn = button("complete")
    //second button is to change due date
    let dateBtn = button("date")
    //run new task from objects
    newTask()
    e.preventDefault()
    closeForm()
})

let submitProject = document.querySelector("submit")
submitProject.addEventListener("click", (e) => {
    //create new div when project form is submitted
    let project = div("project")
    //button to add tasks
    let taskBtn = button("task")
    //run new project from objects
    newProject()
    e.preventDefault()
    closeForm()
})
})();