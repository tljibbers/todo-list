import "./styles.css"
import createProject from "./project"

const generateProject = document.querySelector("#createProject");

generateProject.addEventListener("click", createProject)