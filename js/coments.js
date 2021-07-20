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

    paintComents(comentsObj);
    comentsInput.value = "";
    comentsPassword.value="";
}

function deleteBtn(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    
}
/*비밀번호를 id 값으로 하면 같은 id가 있을경우 애매모호해짐
일단 비밀번호 함수를 만들고 조건문을 사용해서 해보장
*/

function paintComents(comentsObj){
    const li = document.createElement("li");
    const divText = document.createElement("div");
    const spanDate = document.createElement("span");
    const deleteButton = document.createElement("button");
    const text = comentsObj.text;
    li.id = comentsObj.password;
    const date = new Date();
    const YMD = `${date.getFullYear().toString()}.${date.getMonth().toString()}.${date.getDate().toString()}`;
    const HMS = `${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}:${date.getSeconds().toString().padStart(2,"0")}`;
    const dateTime = `${YMD}/${HMS}`;
    divText.innerText = `${text}`;
    spanDate.innerText = `${dateTime}`;
    deleteButton.innerText="Delete";
    deleteButton.addEventListener("click",deleteBtn);
    li.appendChild(divText);
    li.appendChild(spanDate);
    li.appendChild(deleteButton);
    comentsDisplay.appendChild(li);
    
    
}



comentsForm.addEventListener("submit",comentsHandler);