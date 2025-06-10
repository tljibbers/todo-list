
export default function createTask(task, holder){
    const taskPriorityColor = document.createElement("div");
    const taskContainer = document.createElement("div");

    taskPriorityColor.appendChild(taskContainer);

    if(task.priorityLevel == "high")
    {
        taskPriorityColor.style.backgroundColor = "red"
    }
    else
    {
        taskPriorityColor.style.backgroundColor = "green"
    }

    taskContainer.style.backgroundColor = "lightgrey"

    const taskName = document.createElement("div")
    taskName.innerHTML = task.title

    const taskDueDate = document.createElement("div")
    taskDueDate.innerHTML = "Due:" + " " + task.dueDate

    const taskPriorityLevel = document.createElement("div")
    taskPriorityLevel.innerHTML = "Priority:" + " " + task.priorityLevel

    taskContainer.appendChild(taskName)
    taskContainer.appendChild(taskDueDate)
    taskContainer.appendChild(taskPriorityLevel)
    
    holder.appendChild(taskPriorityColor)
}