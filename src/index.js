import "./styles.css"
import createProject from "./project"
import createTodo from "./createTodo";
import { openAll, openHigh, openLow, openOngoing, openCompleted } from "./sortBy";

const generateProject = document.querySelector("#createProject");
const makeTask = document.querySelector(".add-Task")
const allTask = document.querySelector(".all-task")
const highTask = document.querySelector(".high-priority")
const lowTask = document.querySelector(".low-priority")
const ongoingTask = document.querySelector(".ongoing")
const completeTask = document.querySelector(".completed")

generateProject.addEventListener("click", createProject)
makeTask.addEventListener("click", createTodo)
allTask.addEventListener("click", openAll)
highTask.addEventListener("click", openHigh)
lowTask.addEventListener("click", openLow)
ongoingTask.addEventListener("click", openOngoing)
completeTask.addEventListener("click", openCompleted)