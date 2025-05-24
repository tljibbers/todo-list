export default class Todo {
    constructor(title, description, dueDate, priorityLevel, belongsTo)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.belongsTo = belongsTo;
    }

    set newTitle(title){
        this.title = title;
    }

    set desc(newDescription){
        this.description = newDescription;
    }

    set dueD(newDueDate){
        this.dueDate = newDueDate;
    }

    set priorityL(newPriorityLevel){
        this.priorityLevel = newPriorityLevel;
    }
}