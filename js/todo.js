const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.querySelector(".todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    typingEffect(burnreact,newreact, beginning);
}

function paintToDo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "🔥";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDolist.appendChild(li);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    typingEffect(newreact, beginning, burnreact);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

const newreact = document.querySelector(".newreact");
const beginning = document.querySelector(".beginning");
const burnreact = document.querySelector(".burnreact");

function typingEffect(element1, element2, element3) {
    let text=element1.innerText;
    element1.innerText="";
    element1.classList.remove(HIDDEN_CLASSNAME);
    element2.classList.add(HIDDEN_CLASSNAME);
    element3.classList.add(HIDDEN_CLASSNAME);
    let i = 0;
    let timer=setInterval(function(){
        if(i<text.length){
            element1.append(text.charAt(i))
            i++;
        } else {
            clearInterval(timer);
        }
    }, 60)
}
