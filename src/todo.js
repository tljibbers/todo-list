export default class Todo {
    constructor(title, description, dueDate, priorityLevel)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
    }

    set title(newTitle){
        this.title = newTitle;
    }

    set description(newDescription){
        this.description = newDescription;
    }

    set dueDate(newDueDate){
        this.dueDate = newDueDate;
    }

    set priorityLevel(newPriorityLevel){
        this.priorityLevel = newPriorityLevel;
    }
}