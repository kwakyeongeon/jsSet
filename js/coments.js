const comentsForm = document.querySelector("#comentsForm");
const comentsInput = document.querySelector("#comentsInput");
const comentsPassword = document.querySelector("#comentsPassword");
const comentsDisplay = document.querySelector("#comentsDisplay");


let coments = [];

function comentsHandler(event){
    event.preventDefault();
    const inputValue = comentsInput.value;
    const inputPassword = comentsPassword.value;
    const comentsObj = {
        text:inputValue, 
        password:inputPassword
    }
    coments.push(comentsObj);
    saveComents();
    paintComents(comentsObj);
    comentsInput.value = "";
    comentsPassword.value="";
}

function deleteBtn(event){
    const li = event.target.parentElement;
    const form = document.createElement("form");
    const password = document.createElement("input");
    password.type = "password";
    password.required="requried";
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "click";
    form.appendChild(password);
    form.appendChild(submit);
    li.appendChild(form);
    form.addEventListener("submit",deleteBtnHandler);
        
}

function deleteBtnHandler(event){
    event.preventDefault();
    const li = event.target.parentElement;
    const submitPassword = event.target.querySelector("input:nth-child(1)").value;
    coments=coments.filter((coment) => coment.password !== submitPassword);
    saveComents() //<= 위의 배열에서 선택된 인자의 li를 없애는 기능을 추가해야한다.
    
}

function saveComents(){
    const stringComents = JSON.stringify(coments);
    localStorage.setItem("coment",stringComents);
}

function paintComents(comentsObj){
    const li = document.createElement("li");
    const divText = document.createElement("div");
    const spanDate = document.createElement("span");
    const deleteButton = document.createElement("button");
    const text = comentsObj.text;
    const date = new Date();
    const YMD = `${date.getFullYear().toString()}.${date.getMonth().toString()}.${date.getDate().toString()}`;
    const HMS = `${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}:${date.getSeconds().toString().padStart(2,"0")}`;
    const dateTime = `${YMD}/${HMS}`;
    divText.innerText = `${text}`;
    spanDate.innerText = `${dateTime}`;
    deleteButton.innerText="Delete";
    deleteButton.addEventListener("click",deleteBtn,{once:true}); //<-once:true 를 addEventListener 3번째 인자에 부여시 함수 한번 실행!
    li.appendChild(divText);
    li.appendChild(spanDate);
    li.appendChild(deleteButton);
    comentsDisplay.appendChild(li);
    
    
}

comentsForm.addEventListener("submit",comentsHandler);

const savedComents = localStorage.getItem("coment");

if(savedComents){
    coments = JSON.parse(savedComents);
    coments.forEach(paintComents);
        
}

