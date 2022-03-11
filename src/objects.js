const defaultList = (() => {
    let defaultArray = []
    let todo = []
    defaultArray.push(todo)
    return {defaultArray,todo};
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
        return item}
    else {
    item.id = defaultList.todo.length
    defaultList.todo.push(item)
    console.table(defaultList.todo)}
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
    return project
}
function complete(project,id) {
    if (project !== 0) {
        let current = defaultList.defaultArray.filter(group =>
        (group.name == project))
        const capture = current[0].projectList.findIndex(item => item.id === id)
        current[0].projectList.splice(capture, 1);
        console.table(current)
        return current[0].projectList
    }
    else {
        let toDo = defaultList.todo
        const capture = toDo.findIndex(item => item.id === id)
        toDo.splice(capture,1);
        console.table(toDo)
        return toDo
        }
}

export {
    complete,
    newTask,
    newProject, 
    defaultList
}