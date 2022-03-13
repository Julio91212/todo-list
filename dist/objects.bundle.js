/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGRlZmF1bHRMaXN0ID0gKCgpID0+IHtcbiAgICBsZXQgZGVmYXVsdEFycmF5ID0gW11cbiAgICBsZXQgdG9kbyA9IFtdXG4gICAgZGVmYXVsdEFycmF5LnB1c2godG9kbylcbiAgICByZXR1cm4ge2RlZmF1bHRBcnJheSx0b2RvfTtcbn0pKCk7XG4vL2lpZmUgdG8gcHJvZHVjZSB0b2RvIGl0ZW1zIGFuZCBwcm9qZWN0c1xuXG5mdW5jdGlvbiBuZXdUYXNrKHByb2plY3QpIHtcbiAgICBjb25zdCBUYXNrZmFjdG9yeSA9ICh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZX07XG4gICAgfVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWVcbiAgICBsZXQgZGVzY3JpcHRpb24gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZVxuICAgIGxldCBkdWVEYXRlID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlXCIpLnZhbHVlXG4gICAgbGV0IGl0ZW0gPSBUYXNrZmFjdG9yeSh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgaWYgKHByb2plY3QgIT09IDApIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkZWZhdWx0TGlzdC5kZWZhdWx0QXJyYXkuZmlsdGVyKGdyb3VwID0+XG4gICAgICAgIChncm91cC5uYW1lID09IHByb2plY3QpKVxuICAgICAgICBjdXJyZW50WzBdLnByb2plY3RMaXN0LnB1c2goaXRlbSlcbiAgICAgICAgY29uc29sZS50YWJsZShjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Lmxlbmd0aClcbiAgICAgICAgaXRlbS5pZCA9IGN1cnJlbnRbMF0ucHJvamVjdExpc3QubGVuZ3RoXG4gICAgICAgIHJldHVybiBpdGVtfVxuICAgIGVsc2Uge1xuICAgIGl0ZW0uaWQgPSBkZWZhdWx0TGlzdC50b2RvLmxlbmd0aFxuICAgIGRlZmF1bHRMaXN0LnRvZG8ucHVzaChpdGVtKVxuICAgIGNvbnNvbGUudGFibGUoZGVmYXVsdExpc3QudG9kbyl9XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdXG4gICAgICAgIHJldHVybiB7cHJvamVjdExpc3QsbmFtZX1cbiAgICB9XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIikudmFsdWVcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSlcbiAgICBkZWZhdWx0TGlzdC5kZWZhdWx0QXJyYXkucHVzaChwcm9qZWN0KVxuICAgIGNvbnNvbGUudGFibGUoZGVmYXVsdExpc3QuZGVmYXVsdEFycmF5KVxuICAgIHJldHVybiBwcm9qZWN0XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlKHByb2plY3QsaWQpIHtcbiAgICBpZiAocHJvamVjdCAhPT0gMCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IGRlZmF1bHRMaXN0LmRlZmF1bHRBcnJheS5maWx0ZXIoZ3JvdXAgPT5cbiAgICAgICAgKGdyb3VwLm5hbWUgPT0gcHJvamVjdCkpXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBjdXJyZW50WzBdLnByb2plY3RMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICBjdXJyZW50WzBdLnByb2plY3RMaXN0LnNwbGljZShjYXB0dXJlLCAxKTtcbiAgICAgICAgY29uc29sZS50YWJsZShjdXJyZW50KVxuICAgICAgICByZXR1cm4gY3VycmVudFswXS5wcm9qZWN0TGlzdFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHRvRG8gPSBkZWZhdWx0TGlzdC50b2RvXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSB0b0RvLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICB0b0RvLnNwbGljZShjYXB0dXJlLDEpO1xuICAgICAgICBjb25zb2xlLnRhYmxlKHRvRG8pXG4gICAgICAgIHJldHVybiB0b0RvXG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZXhwYW5kKHByb2plY3QsaWQpIHtcbiAgICBpZiAocHJvamVjdCAhPT0gMCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IGRlZmF1bHRMaXN0LmRlZmF1bHRBcnJheS5maWx0ZXIoZ3JvdXAgPT5cbiAgICAgICAgKGdyb3VwLm5hbWUgPT0gcHJvamVjdCkpXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBjdXJyZW50WzBdLnByb2plY3RMaXN0LmZpbHRlcihpdGVtID0+IFxuICAgICAgICAoaXRlbS5pZCA9PSBpZCkpXG4gICAgICAgIHJldHVybiBjYXB0dXJlWzBdLmRlc2NyaXB0aW9uXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgdG9EbyA9IGRlZmF1bHRMaXN0LnRvZG9cbiAgICAgICAgY29uc3QgY2FwdHVyZSA9IHRvRG8uZmlsdGVyKGl0ZW0gPT4gXG4gICAgICAgIChpdGVtLmlkID09IGlkKSlcbiAgICAgICAgcmV0dXJuIGNhcHR1cmVbMF0uZGVzY3JpcHRpb25cbiAgICB9XG59XG5cbndpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdExpc3QpKVxuSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKVxuZXhwb3J0IHtcbiAgICBleHBhbmQsXG4gICAgY29tcGxldGUsXG4gICAgbmV3VGFzayxcbiAgICBuZXdQcm9qZWN0LCBcbiAgICBkZWZhdWx0TGlzdFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==