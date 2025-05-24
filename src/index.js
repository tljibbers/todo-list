import "./styles.css"
import createProject from "./project"
import createTodo from "./createTodo";

const generateProject = document.querySelector("#createProject");
const makeTask = document.querySelector(".add-Task")

generateProject.addEventListener("click", createProject)
makeTask.addEventListener("click", createTodo)