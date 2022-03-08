import {newTask,newProject,defaultList} from "./objects.js"

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
    let tasks = div("tasks")
    let projects = div("projects")
    let newTask = button("task")
    newTask.textContent = "+ Add Task"
    tasks.appendChild(newTask)
    let projectsHeader = document.createElement("h3")
    projectsHeader.textContent = "Projects"
    projects.appendChild(projectsHeader)
    let newProject = button("newProject")
    newProject.textContent = "+ Add Project"
    projects.appendChild(newProject)
    sidebar.appendChild(tasks)
    sidebar.appendChild(projects)
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
        let d = document.createElement("br")
        if (name=="submitTask"||name=="submitProject") {
            c.setAttribute("value", "Submit")
            parent.append(b,c,d)}
        else {parent.append(a,b,c,d)}

        return parent
    }
    //task form
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
    formInput(formInputs,"submitTask", "submit")
    taskForm.appendChild(formHeader)
    taskForm.appendChild(formInputs)
    //project form
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
    formInput(projectForm,"project","text")
    formInput(projectForm,"submitProject","submit")
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

document.addEventListener("click", (e) => {
    let elmnt = e.target
    if (elmnt.id == "submitTask") {
        clearOut()
        newTask(0)
        let i = 0
        for (let item of defaultList.todo) {
            console.log(item.title)
            addTask(item.title)
            i++
        }
        closeForm()
        }
        e.preventDefault()
    })
let project = document.querySelector("button.newProject")
project.addEventListener("click", () => {
    let project = document.querySelector("form.project")
    project.classList.add("projectActive")
})

function closeForm() {
    let task = document.querySelector("form.taskActive")
    let project = document.querySelector("form.projectActive")
    if (project === null) {task.classList.remove("taskActive")}
    else {project.classList.remove("projectActive")}
}

let closeBtn = document.querySelectorAll("button.closeButton")
closeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
    closeForm()
})})

let main = document.querySelector("div.main")

function addTask(newTask) {
    //create new div and 2 buttons when item form is submitted 
    let item = div("item")
    //first button is complete item
    let completeBtn = button("complete")
    //title of task
    let title = div("taskTitle")
    if (newTask==1) {
    title.textContent = document.getElementById("title").value
    } else {title.textContent = newTask}
    //second button is to change due date
    let dateBtn = button("date")
    //run new task from objects
    item.appendChild(title)
    item.appendChild(completeBtn)
    item.appendChild(dateBtn)
    main.appendChild(item)
}

let submitProject = document.getElementById("submitProject")
submitProject.addEventListener("click", (e) => {
    clearOut()
    //create new div when project form is submitted
    let project = button("project")
    project.textContent = document.getElementById("project").value
    //button to add tasks
    function taskButton() {
    let taskBtn = button("projectTask")
    main.appendChild(taskBtn)
    taskBtn.addEventListener("click", () => {
        submit.id = "projectTask"
        let task = document.querySelector("form.task")
        task.classList.add("taskActive")
        e.preventDefault()
    })
    }
    taskButton()
    //run new project from objects
    let projectArray = newProject()
    let projects = document.querySelector("div.projects")
    let submit = document.getElementById("submitTask")
    projects.appendChild(project)
    
    document.addEventListener("click", (e) => {
        let elmnt = e.target
        if (elmnt.id == "projectTask") {
        addTask(1)
        let task = newTask(1)
        projectArray.project.push(task)
        console.table(projectArray.project)
        submit.id = "submitTask"
        closeForm()
        }
        e.preventDefault() 
    })  
    project.addEventListener("click", () => {
        clearOut()
        taskButton()
        let i = 0
        for (let item of projectArray.project) {
            console.log(item.title)
            addTask(item.title)
            i++
        }
    })
    e.preventDefault()
    closeForm()
})

function clearOut() {
    while (main.lastChild) {
        main.removeChild(main.lastChild)
    }
}

function fill() {
    // let something = Array
    // run through array and extract title and due date for each object
    //for each object create a div
    //append all divs to main
}
})();

