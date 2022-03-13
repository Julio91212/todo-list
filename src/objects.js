const defaultList = (() => {
    let data = JSON.parse(localStorage.getItem("user"))
    let defaultArray = []
    
    if (data === null) {
        let todo = []
        defaultArray.push(todo)
        window.localStorage.setItem("user", JSON.stringify(defaultArray))
    }
    else {
        let newArray = data
        for (let item of newArray) {
            defaultArray.push(item)
        }
        console.table(defaultArray)
    }
    return {defaultArray}
})();
//iife to produce todo items and projects

function newTask(project) {
    const Taskfactory = (title,description,dueDate) => {
        return {title,description,dueDate};
    }
    let title = document.getElementById("title").value
    let description =  document.getElementById("description").value
    let dueDate =  document.getElementById("due").value
    let item = Taskfactory(title,description,dueDate)
    console.log(project)
    if (project !== 0) {
        let current = defaultList.defaultArray.filter(group =>
        (group.name == project))
        current[0].projectList.push(item)
        console.table(current)
        console.log(current.length)
        item.id = current[0].projectList.length
        window.localStorage.setItem("user", JSON.stringify(defaultList.defaultArray))
        return item}
    else {
    item.id = defaultList.defaultArray[0].length
    defaultList.defaultArray[0].push(item)
    window.localStorage.setItem("user", JSON.stringify(defaultList.defaultArray))
    console.table(defaultList.defaultArray[0])}
}

function newProject() {
    const createProject = (name) => {
        let projectList = []
        return {projectList,name}
    }
    let name = document.getElementById("project").value
    let project = createProject(name)
    defaultList.defaultArray.push(project)
    console.table(defaultList.defaultArray)
    window.localStorage.setItem("user", JSON.stringify(defaultList.defaultArray))
    return project
}

function complete(project,id) {
    if (project !== 0) {
        let current = defaultList.defaultArray.filter(group =>
        (group.name == project))
        const capture = current[0].projectList.findIndex(item => item.id === id)
        current[0].projectList.splice(capture, 1);
        console.table(current)
        window.localStorage.setItem("user", JSON.stringify(defaultList.defaultArray))
        return current[0].projectList
    }
    else {
        let toDo = defaultList.defaultArray[0]
        const capture = toDo.findIndex(item => item.id === id)
        toDo.splice(capture,1);
        console.table(toDo)
        window.localStorage.setItem("user", JSON.stringify(defaultList.defaultArray))
        return toDo
        }
}

function findTask(project,id) {
    if (project !== 0) {
        let current = defaultList.defaultArray.filter(group =>
        (group.name == project))
        const capture = current[0].projectList.filter(item => 
        (item.id == id))
        return capture[0]
    }
    else {
        let toDo = defaultList.defaultArray[0]
        const capture = toDo.filter(item => 
        (item.id == id))
        return capture[0]
    }
}

function deleteProject(project) {
    let current = defaultList.defaultArray.findIndex(group =>
        (group.name == project))
        defaultList.defaultArray.splice(current,1)
        window.localStorage.setItem("user", JSON.stringify(defaultList.defaultArray))
        console.log(defaultList.defaultArray)
}

export {
    deleteProject,
    findTask,
    complete,
    newTask,
    newProject, 
    defaultList
}