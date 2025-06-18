import { removeSortByCategoriesChecker } from "./createTodo";

export default function createTask(task, holder){
    const taskPriorityColor = document.createElement("div");
    const taskContainer = document.createElement("div");

    taskPriorityColor.appendChild(taskContainer);

    if(task.priorityLevel == "high")
    {
        taskPriorityColor.style.backgroundColor = "#FF7F7F"
    }
    else
    {
        taskPriorityColor.style.backgroundColor = "#80EF80"
    }

    taskPriorityColor.style.borderRadius = "10px"
    taskPriorityColor.style.transition = "transform 0.5s ease"

    taskContainer.style.backgroundColor = "#FFE5B4"
    taskContainer.style.height = "200px"
    taskContainer.style.marginLeft = "10px"
    taskContainer.style.borderRadius = "5px"
    taskContainer.style.boxShadow = "5px 5px 2px lightgrey"
    taskStyle(taskContainer, taskPriorityColor, task)

    const removeButton = document.createElement("button")
    removeButton.innerHTML = "X"
    removeButton.addEventListener("click", function(){
        console.log("test")
        holder.removeChild(taskPriorityColor)
    })
    removeButton.addEventListener("mouseover", function(){
        removeButton.style.cursor = "pointer";
        removeButton.style.backgroundColor = "#FF7F7F"
    })
    removeButton.addEventListener("mouseleave", function(){
        removeButton.style.backgroundColor = "white"
    })

    const taskName = document.createElement("div")
    taskName.innerHTML = task.title

    const taskDueDate = document.createElement("div")
    taskDueDate.innerHTML = "Due:" + " " + task.dueDate

    const taskPriorityLevel = document.createElement("div")
    taskPriorityLevel.innerHTML = "Priority:" + " " + task.priorityLevel

    const holdDateAndLevel = document.createElement("div")

    taskContainer.appendChild(removeButton)
    taskContainer.appendChild(taskName)
    holdDateAndLevel.appendChild(taskDueDate)
    holdDateAndLevel.appendChild(taskPriorityLevel)
    taskContainer.appendChild(holdDateAndLevel)
    
    holder.appendChild(taskPriorityColor)

    removeButton.style.marginLeft = "90%"
    removeButton.style.borderRadius = "50%"
    removeButton.style.border = "none"
    removeButton.style.backgroundColor = "white"

    taskName.style.fontSize = "50px"
    taskName.style.marginLeft = "28%"
    taskName.style.marginTop = "15%"

    holdDateAndLevel.style.display = "flex"
    holdDateAndLevel.style.justifyContent = "space-around"
    holdDateAndLevel.style.marginTop = "15%"
    
}

function taskStyle(styleTask, styleTaskColor, task)
{
    styleTask.addEventListener("mouseover", function(){
        styleTaskColor.style.transform = "scale(1.1)"
        styleTaskColor.style.cursor = "pointer"
    })

    styleTask.addEventListener("mouseleave", function(){
        styleTaskColor.style.transform = "scale(1)"
    })

    styleTask.addEventListener("click", function(){
        console.log("working")
        taskOnClick(task)
    })
}

function taskOnClick(task)
{
    const mainContainer = document.querySelector(".full-container")
    const descriptionHolder = document.createElement("div")
    const textHolder = document.createElement("div")
    textHolder.innerHTML = task.description
    const button = document.createElement("button")
    button.innerHTML = "Close"

    descriptionHolder.appendChild(textHolder)
    descriptionHolder.appendChild(button)
    mainContainer.appendChild(descriptionHolder)
    styleDesc(descriptionHolder, textHolder, button)
    window.scrollTo(0,0)

    button.addEventListener("click", function(){
        mainContainer.removeChild(descriptionHolder)
        removeSortByCategoriesChecker(task)
    })

    button.addEventListener("mouseover", function(){
        button.style.backgroundColor = "#FF7F7F"
        button.style.cursor = "pointer"
    })

    button.addEventListener("mouseleave", function(){
        button.style.backgroundColor = "white"
    })
    

}

function styleDesc(descStyle, textHolder, button)
{
    descStyle.style.position = "absolute"
    descStyle.style.backgroundColor = "lavender"
    descStyle.style.top = "30%"
    descStyle.style.left = "40%"
    descStyle.style.width = "400px"
    descStyle.style.height = "200px"
    descStyle.style.borderRadius = "10px"
    descStyle.style.boxShadow = '5px 5px 5px lightgray'
    textHolder.style.marginLeft = "10px"
    textHolder.style.marginTop = "10px"
    textHolder.style.wordBreak = "break-all"
    textHolder.style.overflow = "auto"
    button.style.position = "absolute"
    button.style.left = "85%"
    button.style.top = "85%"
    button.style.border = "none"
    button.style.backgroundColor = "white"
    button.style.borderRadius = "10px"



}


