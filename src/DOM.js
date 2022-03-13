import {findTask,deleteProject,expand,complete,newTask,newProject,defaultList} from "./objects.js"
// import { compareAsc, format } from 'date-fns'

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
    let inbox = button("inbox")
    inbox.textContent = "Inbox"
    tasks.appendChild(inbox)
    
    let projectsHeader = document.createElement("h3")
    projectsHeader.textContent = "Projects"
    projects.appendChild(projectsHeader)
    let newProject = button("newProject")
    newProject.textContent = "Add Project"
    projects.appendChild(newProject)
    sidebar.appendChild(tasks)
    sidebar.appendChild(projects)
    let header = div("header");
    let title = document.createElement("h1")
    title.textContent="To-Do List"
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
            parent.append(c,d)}
        else if (name=="due") {
            parent.append(a,b,c,d)
            return c
            }
        else {parent.append(a,b,c,d)}
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
    formInput(formInputs,"title", "text",)
    formInput(formInputs,"description", "text",)
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
    return taskForm, projectForm, overlay,formInput
})();

const eventListeners = (() => {
let main = document.querySelector("div.main")

let inbox = document.querySelector("button.inbox")
inbox.addEventListener("click", () => {
    fillDefault()
})

function fillDefault() {
    clearOut()
    let newTask = button("task")
    newTask.id = "task"
    newTask.textContent = "+ Add Task"
    main.appendChild(newTask)
    let i = 0
    for (let item of defaultList.defaultArray[0]) {
        console.log(item.title)
        addTask(item.title,0,item.id)
        i++
    }
}

document.addEventListener("click", (e) => {
    let elmnt = e.target
    if (elmnt.classList.contains("task")) {
    let task = document.querySelector("form.task")
    task.classList.add("taskActive")
    let overlay = document.querySelector("div.overlay")
    overlay.classList.add("overlayActive")
    }
})

document.addEventListener("click", (e) => {
    let elmnt = e.target
    if (elmnt.id == "submitTask") {
        newTask(0)
        fillDefault()
        closeForm()
        e.preventDefault()
        }
        
    })
let project = document.querySelector("button.newProject")
project.addEventListener("click", () => {
    let project = document.querySelector("form.project")
    project.classList.add("projectActive")
    let overlay = document.querySelector("div.overlay")
    overlay.classList.add("overlayActive")
})

function closeForm() {
    let task = document.querySelector("form.taskActive")
    let project = document.querySelector("form.projectActive")
    let overlay = document.querySelector("div.overlay")
    overlay.classList.remove("overlayActive")
    if (project === null) {task.classList.remove("taskActive")}
    else {project.classList.remove("projectActive")}
}

let closeBtn = document.querySelectorAll("button.closeButton")
closeBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
    e.preventDefault()
    closeForm()
})})

function addTask(newTask,project,id) {
    //create new div and 2 buttons when item form is submitted 
    let item = div("item")
    //first button is complete item
    let completeBtn = addComplete(project,id)
    //title of task
    let title = document.createElement("h3")
    title.classList.add("taskTitle")
    if (newTask==1) {
    title.textContent = document.getElementById("title").value
    } else {title.textContent = newTask}
    
    //run new task from objects
    item.appendChild(title)
    item.appendChild(completeBtn)
    let task = findTask(project,id)
    let date = task.dueDate
    let input = forms(item,"due", "date")
    input.value = date
    console.log(input.value)
    input.addEventListener("change", () => {
        task.dueDate = input.value
        console.log(task)
    })
    item.addEventListener("mouseover", () => {
        let task = findTask(project,id)
        let description1 = document.querySelector("div.descr")
        if (description1 === null) {
        let descr = div("descr")
        descr.textContent = "Description: " + task.description
        item.appendChild(descr)}
        else {}
    })
    item.addEventListener("mouseout", () => {
        let description = document.querySelector("div.descr")
        if (description !== null) {
        item.removeChild(description)}
        else {}
    })
    main.appendChild(item)
}

let submitProject = document.getElementById("submitProject")
submitProject.addEventListener("click", (e) => {
    let title = document.getElementById("project").value
    //run new project from objects
    newProject()
    projectFill(title)
    closeForm()
    e.preventDefault()
})
function title(project) {
    let title = document.createElement("h1")
    title.classList.add("projectTitle")
    title.textContent = project
    main.appendChild(title)
}
function taskButton(project) {
    let taskBtn = button("projectTask")
    taskBtn.textContent = "+ Add Task"
    taskBtn.id = project
    let submit = document.getElementById("submitTask")
    main.appendChild(taskBtn)
    taskBtn.addEventListener("click", (e) => {
        submit.id = "projectTask"
        let task = document.querySelector("form.task")
        task.classList.add("taskActive")
        let overlay = document.querySelector("div.overlay")
        overlay.classList.add("overlayActive")
    })}

function addComplete(project,id) {
    let completeBtn = document.createElement("input")
    completeBtn.setAttribute("type", "checkbox")
    completeBtn.classList.add("complete") 
    completeBtn.addEventListener("click", () => {
    console.log(project)
    console.log(id)
    clearOut()
    if(project !==0) {
    title(project)
    taskButton(project)}
    else {let newTask = button("task")
    newTask.id = "task"
    newTask.textContent = "Add Task"
    main.appendChild(newTask)}
    let array = complete(project,id)
    let i = 0
    for (let item of array)  {
        console.log(item.title)
        addTask(item.title,project,item.id)
        i++
    }
    })
    return completeBtn
}
function clearOut() {
    while (main.lastChild) {
        main.removeChild(main.lastChild)
    }}

function projectFill(name) {
    clearOut()
    let projectTitle = name

    title(projectTitle)
    //create new button when project form is submitted
    let project = button("project")
    project.textContent = projectTitle
    //create delete button
    let deleteProjectBtn = button("deleteProject")
    deleteProjectBtn.addEventListener("click", (e) => {
        clearOut()
        deleteProject(projectTitle)
        projects.removeChild(project)
        e.stopPropagation()
    })
    deleteProjectBtn.textContent = "x"
    project.appendChild(deleteProjectBtn)
    //button to add tasks
    taskButton(projectTitle)
    let projects = document.querySelector("div.projects")
    let submit = document.getElementById("submitTask")
    let current = defaultList.defaultArray.filter(group =>
        (group.name == projectTitle))
    projects.appendChild(project)
    project.addEventListener("click", () => {
        clearOut()
        title(projectTitle)
        taskButton(projectTitle)
        //need to move below to objects
        let i = 0
        for (let item of current[0].projectList) {
            console.log(item.title)
            addTask(item.title,projectTitle,item.id)
            i++
        }
    })
    document.addEventListener("click", (e) => {
        let elmnt = e.target
        if (elmnt.id == "projectTask") {
        let current = document.querySelector("button.projectTask")
        let task = newTask(current.id)
        let id = task.id
        addTask(1,current.id,id)
        submit.id = "submitTask"
        closeForm()
        e.preventDefault()
        }
    })
    let i = 0
        for (let item of current[0].projectList) {
            console.log(item.title)
            addTask(item.title,projectTitle,item.id)
            i++}
}
let data = JSON.parse(localStorage.getItem("user"))
for (let item of data.slice(1)) {
    projectFill(item.name)
}
})();

