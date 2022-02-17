const defaultList = (() => {
    todo = []
    return {todo};
})();
//iife to produce todo items and projects

function newTask() {
    const Taskfactory = (title,description,dueDate) => {
        let id = defaultList.todo.length
        return {title,description,dueDate, id};
    }
    let title = document.getElementById("title").value
    let description =  document.getElementById("description").value
    let dueDate =  document.getElementById("due").value
    let item = Taskfactory(title,description,dueDate)
    //maybe try an if else
    defaultList.todo.push(item)
}
function newProject() {
    const createProject = (name) => {
        let project = []
        return {project,name}
    }
    let name = document.getElementById("projectTitle").value
    let project = createProject(name)
    return project
}