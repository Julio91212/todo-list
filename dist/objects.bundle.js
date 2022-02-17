/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
const defaultList = (() => {
    todo = []
    projects = []
    return {todo, projects};
})();
//iife to produce todo items and projects


const createTodo = (title,description,dueDate,priority) => {
    let id = defaultList.todo.length
    return {title,description,dueDate,priority, id}
}

const createProject = (name) => {
    project=[]
    return {project,name}
}

//submit.onclick
function newTodo(title,description,dueDate,priority) {
const item = createTodo(title,description,dueDate,priority)
defaultList.todo.push(item)
}

//call function from DOM to create new div when form is submitted
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRMaXN0ID0gKCgpID0+IHtcbiAgICB0b2RvID0gW11cbiAgICBwcm9qZWN0cyA9IFtdXG4gICAgcmV0dXJuIHt0b2RvLCBwcm9qZWN0c307XG59KSgpO1xuLy9paWZlIHRvIHByb2R1Y2UgdG9kbyBpdGVtcyBhbmQgcHJvamVjdHNcblxuXG5jb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcbiAgICBsZXQgaWQgPSBkZWZhdWx0TGlzdC50b2RvLmxlbmd0aFxuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgaWR9XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIHByb2plY3Q9W11cbiAgICByZXR1cm4ge3Byb2plY3QsbmFtZX1cbn1cblxuLy9zdWJtaXQub25jbGlja1xuZnVuY3Rpb24gbmV3VG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KSB7XG5jb25zdCBpdGVtID0gY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KVxuZGVmYXVsdExpc3QudG9kby5wdXNoKGl0ZW0pXG59XG5cbi8vY2FsbCBmdW5jdGlvbiBmcm9tIERPTSB0byBjcmVhdGUgbmV3IGRpdiB3aGVuIGZvcm0gaXMgc3VibWl0dGVkIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9