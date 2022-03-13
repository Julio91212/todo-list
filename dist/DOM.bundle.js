/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expand": () => (/* binding */ expand),
/* harmony export */   "complete": () => (/* binding */ complete),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "defaultList": () => (/* binding */ defaultList)
/* harmony export */ });
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

function expand(project,id) {
    if (project !== 0) {
        let current = defaultList.defaultArray.filter(group =>
        (group.name == project))
        const capture = current[0].projectList.filter(item => 
        (item.id == id))
        return capture[0].description
    }
    else {
        let toDo = defaultList.todo
        const capture = toDo.filter(item => 
        (item.id == id))
        return capture[0].description
    }
}

window.localStorage.setItem("user", JSON.stringify(defaultList))
JSON.parse(window.localStorage.getItem("user"))


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");



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
    newTask.textContent = "+ Add Single Task"
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
        if (name=="submitTask"||name=="submitProject") {
            c.setAttribute("value", "Submit")
            parent.append(c,d)}
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
let main = document.querySelector("div.main")

let task = document.querySelector("button.task")
task.addEventListener("click", () => {
    let task = document.querySelector("form.task")
    task.classList.add("taskActive")
    let overlay = document.querySelector("div.overlay")
    overlay.classList.add("overlayActive")
})

document.addEventListener("click", (e) => {
    let elmnt = e.target
    if (elmnt.id == "submitTask") {
        clearOut()
        ;(0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.newTask)(0)
        let i = 0
        for (let item of _objects_js__WEBPACK_IMPORTED_MODULE_0__.defaultList.todo) {
            console.log(item.title)
            addTask(item.title,0,item.id)
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
    btn.addEventListener("click", () => {
    closeForm()
})})

function addTask(newTask,project,id) {
    //create new div and 2 buttons when item form is submitted 
    let item = div("item")
    //first button is complete item
    let completeBtn = addComplete(project,id)
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
    item.addEventListener("mouseover", () => {
        let task = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.expand)(project,id)
        let description = document.querySelector("div.descr")
        if (description === null) {
        let descr = div("descr")
        descr.textContent = task
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
    clearOut()
    let projectTitle = document.getElementById("project").value
    title(projectTitle)
    //create new button when project form is submitted
    let project = button("project")
    project.textContent = projectTitle
    //button to add tasks
    taskButton(projectTitle)
    //run new project from objects
    let projectArray = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.newProject)()
    // let currentArray = projectArray.name
    let projects = document.querySelector("div.projects")
    let submit = document.getElementById("submitTask")
    projects.appendChild(project)
    project.addEventListener("click", () => {
        clearOut()
        title(projectTitle)
        taskButton(projectTitle)
        //need to move below to objects
        let i = 0
        for (let item of projectArray.projectList) {
            console.log(item.title)
            addTask(item.title,projectArray.name,item.id)
            i++
        }
    })
    document.addEventListener("click", (e) => {
        let elmnt = e.target
        if (elmnt.id == "projectTask") {
        let current = document.querySelector("button.projectTask")
        let task = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.newTask)(current.id)
        let id = task.id
        addTask(1,current.id,id)
        submit.id = "submitTask"
        closeForm()
        }
    })     
    e.preventDefault()
    closeForm()
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
    })}

function addComplete(project,id) {
    let completeBtn = button("complete") 
    completeBtn.addEventListener("click", () => {
    console.log(project)
    console.log(id)
    clearOut()
    if(project !==0) {
    title(project)
    taskButton(project)}
    let array = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.complete)(project,id)
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
    }
}
})();
window.localStorage.setItem("user", JSON.stringify(eventListeners))
JSON.parse(window.localStorage.getItem("user"))


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRMaXN0ID0gKCgpID0+IHtcbiAgICBsZXQgZGVmYXVsdEFycmF5ID0gW11cbiAgICBsZXQgdG9kbyA9IFtdXG4gICAgZGVmYXVsdEFycmF5LnB1c2godG9kbylcbiAgICByZXR1cm4ge2RlZmF1bHRBcnJheSx0b2RvfTtcbn0pKCk7XG4vL2lpZmUgdG8gcHJvZHVjZSB0b2RvIGl0ZW1zIGFuZCBwcm9qZWN0c1xuXG5mdW5jdGlvbiBuZXdUYXNrKHByb2plY3QpIHtcbiAgICBjb25zdCBUYXNrZmFjdG9yeSA9ICh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZX07XG4gICAgfVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWVcbiAgICBsZXQgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZVxuICAgIGxldCBkdWVEYXRlID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlXCIpLnZhbHVlXG4gICAgbGV0IGl0ZW0gPSBUYXNrZmFjdG9yeSh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgaWYgKHByb2plY3QgIT09IDApIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkZWZhdWx0TGlzdC5kZWZhdWx0QXJyYXkuZmlsdGVyKGdyb3VwID0+XG4gICAgICAgIChncm91cC5uYW1lID09IHByb2plY3QpKVxuICAgICAgICBjdXJyZW50WzBdLnByb2plY3RMaXN0LnB1c2goaXRlbSlcbiAgICAgICAgY29uc29sZS50YWJsZShjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Lmxlbmd0aClcbiAgICAgICAgaXRlbS5pZCA9IGN1cnJlbnRbMF0ucHJvamVjdExpc3QubGVuZ3RoXG4gICAgICAgIHJldHVybiBpdGVtfVxuICAgIGVsc2Uge1xuICAgIGl0ZW0uaWQgPSBkZWZhdWx0TGlzdC50b2RvLmxlbmd0aFxuICAgIGRlZmF1bHRMaXN0LnRvZG8ucHVzaChpdGVtKVxuICAgIGNvbnNvbGUudGFibGUoZGVmYXVsdExpc3QudG9kbyl9XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdXG4gICAgICAgIHJldHVybiB7cHJvamVjdExpc3QsbmFtZX1cbiAgICB9XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIikudmFsdWVcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSlcbiAgICBkZWZhdWx0TGlzdC5kZWZhdWx0QXJyYXkucHVzaChwcm9qZWN0KVxuICAgIGNvbnNvbGUudGFibGUoZGVmYXVsdExpc3QuZGVmYXVsdEFycmF5KVxuICAgIHJldHVybiBwcm9qZWN0XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlKHByb2plY3QsaWQpIHtcbiAgICBpZiAocHJvamVjdCAhPT0gMCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IGRlZmF1bHRMaXN0LmRlZmF1bHRBcnJheS5maWx0ZXIoZ3JvdXAgPT5cbiAgICAgICAgKGdyb3VwLm5hbWUgPT0gcHJvamVjdCkpXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBjdXJyZW50WzBdLnByb2plY3RMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICBjdXJyZW50WzBdLnByb2plY3RMaXN0LnNwbGljZShjYXB0dXJlLCAxKTtcbiAgICAgICAgY29uc29sZS50YWJsZShjdXJyZW50KVxuICAgICAgICByZXR1cm4gY3VycmVudFswXS5wcm9qZWN0TGlzdFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHRvRG8gPSBkZWZhdWx0TGlzdC50b2RvXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSB0b0RvLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICB0b0RvLnNwbGljZShjYXB0dXJlLDEpO1xuICAgICAgICBjb25zb2xlLnRhYmxlKHRvRG8pXG4gICAgICAgIHJldHVybiB0b0RvXG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZXhwYW5kKHByb2plY3QsaWQpIHtcbiAgICBpZiAocHJvamVjdCAhPT0gMCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IGRlZmF1bHRMaXN0LmRlZmF1bHRBcnJheS5maWx0ZXIoZ3JvdXAgPT5cbiAgICAgICAgKGdyb3VwLm5hbWUgPT0gcHJvamVjdCkpXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBjdXJyZW50WzBdLnByb2plY3RMaXN0LmZpbHRlcihpdGVtID0+IFxuICAgICAgICAoaXRlbS5pZCA9PSBpZCkpXG4gICAgICAgIHJldHVybiBjYXB0dXJlWzBdLmRlc2NyaXB0aW9uXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgdG9EbyA9IGRlZmF1bHRMaXN0LnRvZG9cbiAgICAgICAgY29uc3QgY2FwdHVyZSA9IHRvRG8uZmlsdGVyKGl0ZW0gPT4gXG4gICAgICAgIChpdGVtLmlkID09IGlkKSlcbiAgICAgICAgcmV0dXJuIGNhcHR1cmVbMF0uZGVzY3JpcHRpb25cbiAgICB9XG59XG5cbndpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdExpc3QpKVxuSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKVxuZXhwb3J0IHtcbiAgICBleHBhbmQsXG4gICAgY29tcGxldGUsXG4gICAgbmV3VGFzayxcbiAgICBuZXdQcm9qZWN0LCBcbiAgICBkZWZhdWx0TGlzdFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtleHBhbmQsY29tcGxldGUsbmV3VGFzayxuZXdQcm9qZWN0LGRlZmF1bHRMaXN0fSBmcm9tIFwiLi9vYmplY3RzLmpzXCJcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5mdW5jdGlvbiBkaXYobmFtZSkge1xuICAgIGxldCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB4LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHhcbn1cblxuZnVuY3Rpb24gYnV0dG9uKG5hbWUpIHtcbiAgICBsZXQgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgeC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgIHJldHVybiB4XG59XG4vL0lJRkUgdG8gY3JlYXRlIGluaXRpYWwgbGF5b3V0XG5jb25zdCBsYXlvdXQgPSAoKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZGl2KFwiY29udGVudFwiKTsgICBcbiAgICBsZXQgc2lkZWJhciA9IGRpdihcInNpZGViYXJcIik7XG4gICAgbGV0IHRhc2tzID0gZGl2KFwidGFza3NcIilcbiAgICBsZXQgcHJvamVjdHMgPSBkaXYoXCJwcm9qZWN0c1wiKVxuICAgIGxldCBuZXdUYXNrID0gYnV0dG9uKFwidGFza1wiKVxuICAgIG5ld1Rhc2sudGV4dENvbnRlbnQgPSBcIisgQWRkIFNpbmdsZSBUYXNrXCJcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrKVxuICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgbGV0IG5ld1Byb2plY3QgPSBidXR0b24oXCJuZXdQcm9qZWN0XCIpXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRhc2tzKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpXG4gICAgbGV0IGhlYWRlciA9IGRpdihcImhlYWRlclwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICB0aXRsZS50ZXh0Q29udGVudD1cIlRvZG8gTGlzdFwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGxldCBtYWluID0gZGl2KFwibWFpblwiKTtcbiAgICBsZXQgZm9vdGVyID0gZGl2KFwiZm9vdGVyXCIpO1xuICAgIGxldCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKVxuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSBKdWxpbyBDYXJkb25hIDIwMjJcIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgIHJldHVybiBjb250ZW50XG59KSgpO1xuLy9JSUZFIHRvIGNyZWF0ZSBmb3JtIGZvciBuZXcgdGFzayBhbmQgbmV3IHByb2plY3RcbmNvbnN0IGZvcm1zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBmb3JtSW5wdXQocGFyZW50LG5hbWUsdHlwZSkge1xuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICBhLnRleHRDb250ZW50ID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyBcIjpcIlxuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImZvclwiLCBuYW1lKVxuICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKVxuICAgICAgICBsZXQgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICBjLmlkID0gbmFtZVxuICAgICAgICBjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSlcbiAgICAgICAgaWYgKG5hbWU9PVwic3VibWl0VGFza1wifHxuYW1lPT1cInN1Ym1pdFByb2plY3RcIikge1xuICAgICAgICAgICAgYy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKVxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZChjLGQpfVxuICAgICAgICBlbHNlIHtwYXJlbnQuYXBwZW5kKGEsYixjLGQpfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG4gICAgLy90YXNrIGZvcm1cbiAgICBsZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpXG4gICAgbGV0IGZvcm1IZWFkZXI9ZGl2KFwiZm9ybUhlYWRlclwiKVxuICAgIGxldCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCJcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBidXR0b24oXCJjbG9zZUJ1dHRvblwiKVxuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50PVwieFwiXG4gICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpXG4gICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbilcbiAgICBsZXQgZm9ybUlucHV0cyA9IGRpdihcImZvcm1JbnB1dHNcIilcbiAgICBmb3JtSW5wdXQoZm9ybUlucHV0cyxcInRpdGxlXCIsIFwidGV4dFwiKVxuICAgIGZvcm1JbnB1dChmb3JtSW5wdXRzLFwiZGVzY3JpcHRpb25cIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybUlucHV0KGZvcm1JbnB1dHMsXCJkdWVcIiwgXCJkYXRlXCIpXG4gICAgZm9ybUlucHV0KGZvcm1JbnB1dHMsXCJzdWJtaXRUYXNrXCIsIFwic3VibWl0XCIpXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcilcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSW5wdXRzKVxuICAgIC8vcHJvamVjdCBmb3JtXG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxuICAgIGxldCBwcm9qZWN0SGVhZGVyPWRpdihcImZvcm1IZWFkZXJcIilcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG4gICAgbGV0IGNsb3NlQnV0dG9uMiA9IGJ1dHRvbihcImNsb3NlQnV0dG9uXCIpXG4gICAgY2xvc2VCdXR0b24yLnRleHRDb250ZW50PVwieFwiXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbjIpXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcbiAgICBmb3JtSW5wdXQocHJvamVjdEZvcm0sXCJwcm9qZWN0XCIsXCJ0ZXh0XCIpXG4gICAgZm9ybUlucHV0KHByb2plY3RGb3JtLFwic3VibWl0UHJvamVjdFwiLFwic3VibWl0XCIpXG4gICAgbGV0IG92ZXJsYXkgPSBkaXYoXCJvdmVybGF5XCIpXG4gICAgbGF5b3V0LmFwcGVuZENoaWxkKHRhc2tGb3JtKVxuICAgIGxheW91dC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSlcbiAgICBsYXlvdXQuYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICByZXR1cm4gdGFza0Zvcm0sIHByb2plY3RGb3JtLCBvdmVybGF5XG59KSgpO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9ICgoKSA9PiB7XG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubWFpblwiKVxuXG5sZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24udGFza1wiKVxudGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0udGFza1wiKVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tBY3RpdmVcIilcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYub3ZlcmxheVwiKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlBY3RpdmVcIilcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBlbG1udCA9IGUudGFyZ2V0XG4gICAgaWYgKGVsbW50LmlkID09IFwic3VibWl0VGFza1wiKSB7XG4gICAgICAgIGNsZWFyT3V0KClcbiAgICAgICAgbmV3VGFzaygwKVxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkZWZhdWx0TGlzdC50b2RvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRpdGxlKVxuICAgICAgICAgICAgYWRkVGFzayhpdGVtLnRpdGxlLDAsaXRlbS5pZClcbiAgICAgICAgICAgIGkrK1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlRm9ybSgpXG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcbmxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5uZXdQcm9qZWN0XCIpXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS5wcm9qZWN0XCIpXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFjdGl2ZVwiKVxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5vdmVybGF5XCIpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheUFjdGl2ZVwiKVxufSlcblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0udGFza0FjdGl2ZVwiKVxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0ucHJvamVjdEFjdGl2ZVwiKVxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5vdmVybGF5XCIpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheUFjdGl2ZVwiKVxuICAgIGlmIChwcm9qZWN0ID09PSBudWxsKSB7dGFzay5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0FjdGl2ZVwiKX1cbiAgICBlbHNlIHtwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0QWN0aXZlXCIpfVxufVxuXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmNsb3NlQnV0dG9uXCIpXG5jbG9zZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VGb3JtKClcbn0pfSlcblxuZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrLHByb2plY3QsaWQpIHtcbiAgICAvL2NyZWF0ZSBuZXcgZGl2IGFuZCAyIGJ1dHRvbnMgd2hlbiBpdGVtIGZvcm0gaXMgc3VibWl0dGVkIFxuICAgIGxldCBpdGVtID0gZGl2KFwiaXRlbVwiKVxuICAgIC8vZmlyc3QgYnV0dG9uIGlzIGNvbXBsZXRlIGl0ZW1cbiAgICBsZXQgY29tcGxldGVCdG4gPSBhZGRDb21wbGV0ZShwcm9qZWN0LGlkKVxuICAgIC8vdGl0bGUgb2YgdGFza1xuICAgIGxldCB0aXRsZSA9IGRpdihcInRhc2tUaXRsZVwiKVxuICAgIGlmIChuZXdUYXNrPT0xKSB7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlXG4gICAgfSBlbHNlIHt0aXRsZS50ZXh0Q29udGVudCA9IG5ld1Rhc2t9XG4gICAgLy9zZWNvbmQgYnV0dG9uIGlzIHRvIGNoYW5nZSBkdWUgZGF0ZVxuICAgIGxldCBkYXRlQnRuID0gYnV0dG9uKFwiZGF0ZVwiKVxuICAgIC8vcnVuIG5ldyB0YXNrIGZyb20gb2JqZWN0c1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgaXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bilcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRhdGVCdG4pXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHRhc2sgPSBleHBhbmQocHJvamVjdCxpZClcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5kZXNjclwiKVxuICAgICAgICBpZiAoZGVzY3JpcHRpb24gPT09IG51bGwpIHtcbiAgICAgICAgbGV0IGRlc2NyID0gZGl2KFwiZGVzY3JcIilcbiAgICAgICAgZGVzY3IudGV4dENvbnRlbnQgPSB0YXNrXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3IpfVxuICAgICAgICBlbHNlIHt9XG4gICAgfSlcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZGVzY3JcIilcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pfVxuICAgICAgICBlbHNlIHt9XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGl0ZW0pXG59XG5cbmxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRQcm9qZWN0XCIpXG5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyT3V0KClcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpLnZhbHVlXG4gICAgdGl0bGUocHJvamVjdFRpdGxlKVxuICAgIC8vY3JlYXRlIG5ldyBidXR0b24gd2hlbiBwcm9qZWN0IGZvcm0gaXMgc3VibWl0dGVkXG4gICAgbGV0IHByb2plY3QgPSBidXR0b24oXCJwcm9qZWN0XCIpXG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZVxuICAgIC8vYnV0dG9uIHRvIGFkZCB0YXNrc1xuICAgIHRhc2tCdXR0b24ocHJvamVjdFRpdGxlKVxuICAgIC8vcnVuIG5ldyBwcm9qZWN0IGZyb20gb2JqZWN0c1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBuZXdQcm9qZWN0KClcbiAgICAvLyBsZXQgY3VycmVudEFycmF5ID0gcHJvamVjdEFycmF5Lm5hbWVcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnByb2plY3RzXCIpXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0VGFza1wiKVxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhck91dCgpXG4gICAgICAgIHRpdGxlKHByb2plY3RUaXRsZSlcbiAgICAgICAgdGFza0J1dHRvbihwcm9qZWN0VGl0bGUpXG4gICAgICAgIC8vbmVlZCB0byBtb3ZlIGJlbG93IHRvIG9iamVjdHNcbiAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcHJvamVjdEFycmF5LnByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRpdGxlKVxuICAgICAgICAgICAgYWRkVGFzayhpdGVtLnRpdGxlLHByb2plY3RBcnJheS5uYW1lLGl0ZW0uaWQpXG4gICAgICAgICAgICBpKytcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxldCBlbG1udCA9IGUudGFyZ2V0XG4gICAgICAgIGlmIChlbG1udC5pZCA9PSBcInByb2plY3RUYXNrXCIpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByb2plY3RUYXNrXCIpXG4gICAgICAgIGxldCB0YXNrID0gbmV3VGFzayhjdXJyZW50LmlkKVxuICAgICAgICBsZXQgaWQgPSB0YXNrLmlkXG4gICAgICAgIGFkZFRhc2soMSxjdXJyZW50LmlkLGlkKVxuICAgICAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdFRhc2tcIlxuICAgICAgICBjbG9zZUZvcm0oKVxuICAgICAgICB9XG4gICAgfSkgICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNsb3NlRm9ybSgpXG59KVxuZnVuY3Rpb24gdGl0bGUocHJvamVjdCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIilcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKVxufVxuZnVuY3Rpb24gdGFza0J1dHRvbihwcm9qZWN0KSB7XG4gICAgbGV0IHRhc2tCdG4gPSBidXR0b24oXCJwcm9qZWN0VGFza1wiKVxuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIlxuICAgIHRhc2tCdG4uaWQgPSBwcm9qZWN0XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0VGFza1wiKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0J0bilcbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBzdWJtaXQuaWQgPSBcInByb2plY3RUYXNrXCJcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS50YXNrXCIpXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tBY3RpdmVcIilcbiAgICB9KX1cblxuZnVuY3Rpb24gYWRkQ29tcGxldGUocHJvamVjdCxpZCkge1xuICAgIGxldCBjb21wbGV0ZUJ0biA9IGJ1dHRvbihcImNvbXBsZXRlXCIpIFxuICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICBjb25zb2xlLmxvZyhpZClcbiAgICBjbGVhck91dCgpXG4gICAgaWYocHJvamVjdCAhPT0wKSB7XG4gICAgdGl0bGUocHJvamVjdClcbiAgICB0YXNrQnV0dG9uKHByb2plY3QpfVxuICAgIGxldCBhcnJheSA9IGNvbXBsZXRlKHByb2plY3QsaWQpXG4gICAgbGV0IGkgPSAwXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheSkgIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS50aXRsZSlcbiAgICAgICAgYWRkVGFzayhpdGVtLnRpdGxlLHByb2plY3QsaXRlbS5pZClcbiAgICAgICAgaSsrXG4gICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNvbXBsZXRlQnRuXG59XG5mdW5jdGlvbiBjbGVhck91dCgpIHtcbiAgICB3aGlsZSAobWFpbi5sYXN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICB9XG59XG59KSgpO1xud2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShldmVudExpc3RlbmVycykpXG5KU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==