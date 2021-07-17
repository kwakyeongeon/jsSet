const listForm = document.querySelector("#listForm");
const listInput = listForm.querySelector("input");
const lists = document.querySelector("#lists");
const SAVE_LIST = "Lists";
const RESET = "";
let Lists = [];

function listHandler(event){
    event.preventDefault();
    const content = listInput.value;
    const ListObj = {text : content, id : Date.now()};
    listInput.value =RESET;
    paintList(ListObj);
    Lists.push(ListObj);
    saveList();

}

function paintList(ListObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=ListObj.text;
    li.id=ListObj.id;
    const button = document.createElement("button");
    button.innerText="Delete";
    button.addEventListener("click",deleteList);
    li.appendChild(span);
    li.appendChild(button);
    lists.appendChild(li);
    
}

function deleteList(event){
    const li =event.target.parentElement;
    li.remove();
    Lists=Lists.filter((list) => list.id !== parseInt(li.id));
    saveList();

}

function saveList(){
    const stringLists = JSON.stringify(Lists);
    localStorage.setItem(SAVE_LIST,stringLists);
}


listForm.addEventListener("submit",listHandler);

const savedLists = localStorage.getItem(SAVE_LIST);

if(savedLists){
    Lists=JSON.parse(savedLists);
    Lists.forEach(paintList);
        
    
}



