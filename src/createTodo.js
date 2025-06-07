import Todo from "./todo";
import { projectArray } from "./project";
import { currentProjectNameHolder } from "./project";

const mainContainer = document.querySelector(".full-container")

export default function createTodo(){
    if(projectArray.length != 0 && currentProjectNameHolder.length != 0)
    {
        createForm()
    }
    else{
        alert("Must Create Or Select A Project Before Creating A Task.")
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
    dueDate.setAttribute('placeholder', 'Enter Due Date');

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

    const closeSubmitContainer = document.createElement("div")

    const titleText = document.createElement("div")
    const dueDateLabel = document.createElement("div")
    const priorityLabel =  document.createElement("div")
    const descriptionLabel = document.createElement("div")

    titleText.innerHTML = "Name of Task:"
    dueDateLabel.innerHTML = "Due Date:"
    priorityLabel.innerHTML = "Priority Level:"
    descriptionLabel.innerHTML = "Description:"

    priorityLevel.appendChild(highOption);
    priorityLevel.appendChild(lowOption);

    form.appendChild(titleText);
    form.appendChild(title);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    form.appendChild(priorityLabel);
    form.appendChild(priorityLevel);
    closeSubmitContainer.appendChild(closeButton);
    closeSubmitContainer.appendChild(submitButton);
    form.appendChild(closeSubmitContainer)
    styleAddTaskForm(form, titleText, title, dueDateLabel, dueDate, priorityLabel, priorityLevel, descriptionLabel, description, closeSubmitContainer, closeButton, submitButton)

    mainContainer.appendChild(form);
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const todo = new Todo(title.value, description.value, dueDate.value, priorityLevel.value, currentProjectNameHolder[0])
        mainContainer.removeChild(form);
        console.log(currentProjectNameHolder)
        console.log(todo.belongsTo)
        getIdAndCreateBox(todo)
        
    })

    closeButton.addEventListener('click', function(){
        mainContainer.removeChild(form);
    })

    


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

function styleAddTaskForm(form, taskText, task, dateText, date, priorityLabel, priorityLevel, descriptionLabel, description, closeSubmitHolder, closeButton, submitButton){
    form.style.backgroundColor = "lavender"
    form.style.width = "700px"
    form.style.height = "500px"
    form.style.borderRadius = "10px"
    form.style.marginLeft = "35vh"
    form.style.marginTop = "20vh"
    form.style.boxShadow = '5px 5px 5px lightgray'
    form.style.display = "flex"
    form.style.flexDirection = "column"

    taskText.style.marginLeft = "22%"
    taskText.style.marginTop = "70px"
    taskText.style.fontSize = "larger"

    task.style.width = "400px"
    task.style.height = "30px"
    task.style.borderRadius = "5px"
    task.style.borderStyle = "solid"
    task.style.borderColor = "black"
    task.style.marginLeft = "22%"
    task.style.marginBottom = "10px"

    dateText.style.marginLeft = "22%"
    dateText.style.marginTop = "10px"
    dateText.style.fontSize = "larger"

    date.style.width = "400px"
    date.style.height = "30px"
    date.style.borderRadius = "5px"
    date.style.borderStyle = "solid"
    date.style.borderColor = "black"
    date.style.marginLeft = "22%"
    date.style.marginBottom = "10px"

    priorityLabel.style.marginLeft = "22%"
    priorityLabel.style.marginTop = "5px"
    priorityLabel.style.fontSize = "larger"

    priorityLevel.style.width = "400px"
    priorityLevel.style.height = "30px"
    priorityLevel.style.borderRadius = "5px"
    priorityLevel.style.borderStyle = "solid"
    priorityLevel.style.borderColor = "black"
    priorityLevel.style.marginLeft = "22%"
    priorityLevel.style.marginBottom = "15px"

    descriptionLabel.style.marginLeft = "22%"
    descriptionLabel.style.marginTop = "10px"
    descriptionLabel.style.fontSize = "larger"

    description.style.width = "400px"
    description.style.height = "30px"
    description.style.borderRadius = "5px"
    description.style.borderStyle = "solid"
    description.style.borderColor = "black"
    description.style.marginLeft = "22%"
    description.style.marginBottom = "20px"
    
    closeSubmitHolder.style.display = "flex"
    closeSubmitHolder.style.justifyContent = "space-around"
    closeButton.style.width = "110px"
    submitButton.style.width = "110px"
    closeButton.style.height = "60px"
    submitButton.style.height = "60px"
    closeButton.style.border = "none"
    submitButton.style.border = "none"
    closeButton.style.borderRadius = "5px"
    submitButton.style.borderRadius = "5px"
    closeButton.style.backgroundColor = "white"
    submitButton.style.backgroundColor = "white"

    closeButton.addEventListener("mouseover", function(){
        closeButton.style.cursor = "pointer";
        closeButton.style.backgroundColor = "#FF7F7F"
    })

    closeButton.addEventListener("mouseleave", function(){
        closeButton.style.backgroundColor = "white"
    })

    submitButton.addEventListener("mouseover", function(){
        submitButton.style.cursor = "pointer";
        submitButton.style.backgroundColor = "#80EF80"
    })

    submitButton.addEventListener("mouseleave", function(){
        submitButton.style.backgroundColor = "white"
    })
    
    

}