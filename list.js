const listForm = document.querySelector("#listForm");
const listInput = listForm.querySelector("input");
const lists = document.querySelector("#lists");
console.log(listForm);
console.log(listInput);
console.dir(listForm);
console.dir(listInput);

function listHandler(event){
    event.preventDefault();
    const content = listInput.value;
    listInput.value ="";
    paintList(content);

}

function paintList(content){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=content;
    const button = document.createElement("button");
    button.innerText="Delete";
    button.addEventListener("click",deleteList);
    li.appendChild(span);
    li.appendChild(button);
    lists.appendChild(li);
    
}

function deleteList(event){
    console.dir(event);
}


listForm.addEventListener("submit",listHandler);


