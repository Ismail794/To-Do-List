const formEl = document.querySelector(".form");
const inputel = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task=>{
    toDoList(task);
})

formEl.addEventListener("submit", (event)=>
{
    event.preventDefault()
    toDoList()
}
);
function toDoList(task){
    let newTask = inputel.value;
    if(task){
        newTask = task.name
    }

    const liEl = document.createElement("li");
    if(task && task.checked){
        liEl.classList.add("checked");
    }
    liEl.innerText =newTask; 
    ulEl.appendChild(liEl);
    inputel.value="";
    const checkbEle = document.createElement("div");
    checkbEle.innerHTML = '<i class="fa-solid fa-square-check">'
    liEl.appendChild(checkbEle);

    const trashbEle = document.createElement("div");
    trashbEle.innerHTML = '<i class="fa-solid fa-trash"></i>'
    liEl.appendChild(trashbEle);
     
    checkbEle.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
        updateLocalStorage()
    });
    trashbEle.addEventListener("click",()=>{
        liEl.remove();
        updateLocalStorage()
    });
    updateLocalStorage()
    
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li")
     list = []
    liEls.forEach(liEl=>{
        list.push({
            name:liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list))
}
    
