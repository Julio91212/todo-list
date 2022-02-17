/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/

const layout = (() => {
    function div(name) {
    let x = document.createElement("div");
    x.classList.add(name);
    return x
    }
    let content = div("content");   
    let sidebar = div("sidebar");
    let header = div("header");
    let main = div("main");
    let footer = div("footer");
    content.appendChild(sidebar)
    content.appendChild(header)
    content.appendChild(main)
    content.appendChild(footer)
    document.body.appendChild(content)
})();

//create new div and 2 buttons when item form is submitted 
let item = document.createElement("div")
item.classList.add("item")
    //first button is complete item
let btn1 = document.createElement("button")
btn1.classList.add("btn")
    //second button is to change due date
let btn2 = document.createElement("button")
btn2.classList.add("btn")


//create new div when project form is submitted
let item2 = document.createElement("div")
item.classList.add("item2")
    //button to add tasks
let btn = document.createElement("button")
btn.classList.add("btn")



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgbGF5b3V0ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXYobmFtZSkge1xuICAgIGxldCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB4LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHhcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSBkaXYoXCJjb250ZW50XCIpOyAgIFxuICAgIGxldCBzaWRlYmFyID0gZGl2KFwic2lkZWJhclwiKTtcbiAgICBsZXQgaGVhZGVyID0gZGl2KFwiaGVhZGVyXCIpO1xuICAgIGxldCBtYWluID0gZGl2KFwibWFpblwiKTtcbiAgICBsZXQgZm9vdGVyID0gZGl2KFwiZm9vdGVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxufSkoKTtcblxuLy9jcmVhdGUgbmV3IGRpdiBhbmQgMiBidXR0b25zIHdoZW4gaXRlbSBmb3JtIGlzIHN1Ym1pdHRlZCBcbmxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuaXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKVxuICAgIC8vZmlyc3QgYnV0dG9uIGlzIGNvbXBsZXRlIGl0ZW1cbmxldCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuYnRuMS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpXG4gICAgLy9zZWNvbmQgYnV0dG9uIGlzIHRvIGNoYW5nZSBkdWUgZGF0ZVxubGV0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5idG4yLmNsYXNzTGlzdC5hZGQoXCJidG5cIilcblxuXG4vL2NyZWF0ZSBuZXcgZGl2IHdoZW4gcHJvamVjdCBmb3JtIGlzIHN1Ym1pdHRlZFxubGV0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuaXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbTJcIilcbiAgICAvL2J1dHRvbiB0byBhZGQgdGFza3NcbmxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5idG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==