const defaultList = (() => {
    let todo = []
    return {todo};
})();
//iife to produce todo items and projects

function newTask(project) {
    const Taskfactory = (title,description,dueDate) => {
        let id = defaultList.todo.length
        return {title,description,dueDate, id};
    }
    let title = document.getElementById("title").value
    let description =  document.getElementById("description").value
    let dueDate =  document.getElementById("due").value
    let item = Taskfactory(title,description,dueDate)
    console.log(project)
    if (project !== 0) {return item}
    else {defaultList.todo.push(item)
    console.table(defaultList.todo)}
}
function newProject() {
    const createProject = (name) => {
        let project = []
        return {project,name}
    }
    let name = document.getElementById("project").value
    let project = createProject(name)
    return project
}

export {
    newTask,
    newProject, 
    defaultList
}