import Todo from "./todo";
import { projectArray } from "./project";

const mainContainer = document.querySelector(".full-container")

export default function createTodo(){
    if(projectArray.length != 0)
    {
        createForm()
    }
    else{
        alert("Must Create A Project Before Creating A Task.")
    }
}

function createForm(){
    const form = document.createElement("form");

    const title = document.createElement("input");
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'titleName');
    title.setAttribute('placeholder', 'Enter Task Title');

    const description = document.createElement("input");
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'descriptionDesc');
    description.setAttribute('placeholder', 'Enter Description');

    const dueDate = document.createElement("input");
    dueDate.setAttribute('type', 'text');
    dueDate.setAttribute('name', 'dueDateText');
    dueDate.setAttribute('placeholder', 'Enter Date');

    const priorityLevel = document.createElement("select");
    priorityLevel.setAttribute("id", "priority-Level")

    const highOption = document.createElement("option");
    highOption.setAttribute("value", "high");
    const highText = document.createTextNode("High"); 
    highOption.appendChild(highText);

    const lowOption = document.createElement("option");
    lowOption.setAttribute("value", "low");
    const lowText = document.createTextNode("Low");
    lowOption.appendChild(lowText);

    const projectBelong = document.createElement("select");
    projectBelong.setAttribute("id", "project-Belong")

    const submitButton = document.createElement("input");
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');

    const closeButton = document.createElement("button")
    closeButton.innerHTML = "Close"

    priorityLevel.appendChild(highOption);
    priorityLevel.appendChild(lowOption);

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priorityLevel);
    form.appendChild(projectBelong);
    createFormAssist(projectBelong);
    form.appendChild(closeButton);
    form.appendChild(submitButton);

    mainContainer.appendChild(form);
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const todo = new Todo(title.value, description.value, dueDate.value, priorityLevel.value, projectBelong.value)
        console.log(todo.belongsTo)
        mainContainer.removeChild(form);
        getIdAndCreateBox(todo)
        
    })

    closeButton.addEventListener('click', function(){
        mainContainer.removeChild(form);
    })

    


}

function createFormAssist(projectBelong){
    for (let i in projectArray) {
        const projectOption = document.createElement("option");
        projectOption.setAttribute("value", projectArray[i].id)
        const name = document.createTextNode(String(projectArray[i].id))
        projectOption.appendChild(name)
        projectBelong.appendChild(projectOption)
    }
    
}

function getIdAndCreateBox(todo){
    const testDiv = document.createElement("div")
    const holder = todo.belongsTo + "-container"
    const lookForId = document.getElementById(holder);
    if(lookForId)
    {
        console.log("hooray")
        lookForId.append(testDiv)
    }
    else
    {
        console.log("doesn't exist")
    }
    
}