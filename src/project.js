const mainContainer = document.querySelector(".full-container")
const projectList = document.querySelector(".projectList")
const listView = document.querySelector(".list-view")
export const projectArray = []
export const currentProjectNameHolder = []

export default function createProject(){
    createForm()
    
}

function createForm() {
    const form = document.createElement("form");
    console.log("being clicked")
    const title = document.createElement("div");
    title.innerHTML = "Create Project"

    const projectName = document.createElement("input");
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('name', 'emailName');
    projectName.setAttribute('placeholder', 'Enter Project Name');

    const submitButton = document.createElement("input");
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');

    const closeButton = document.createElement("button")
    closeButton.innerHTML = "Close"

    form.appendChild(title);
    form.appendChild(projectName);
    form.appendChild(closeButton);
    form.appendChild(submitButton);

    mainContainer.appendChild(form);

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const newProject = document.createElement("a");
        newProject.innerHTML = projectName.value;
        newProject.id = projectName.value;
        newProject.addEventListener('mouseenter', function(){
            newProject.style.backgroundColor = 'azure'
            newProject.style.transition = 'background-color 0.2s ease';
        })
        newProject.addEventListener('mouseleave', function(){
            newProject.style.backgroundColor = 'white'
            newProject.style.transition = 'background-color 0.2s ease';
        })

        const newProjectContainer = document.createElement("div");
        newProjectContainer.id = projectName.value + "-container"
        displayView(newProject, newProjectContainer, currentProjectNameHolder)

        projectList.appendChild(newProject);
        projectArray.push(newProject);
        mainContainer.removeChild(form);    
    })

    closeButton.addEventListener('click', function(){
        mainContainer.removeChild(form);
    })

}

function displayView(project, container, holder){
    
    project.addEventListener("click", function(){
        removeObjectsFromArray(holder)
        removeChild(listView);
        listView.appendChild(container)
        holder.push(project.id)
        console.log(holder)
        
    })

}

function removeChild(container){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function removeObjectsFromArray(holder){
    if(holder.length != 0){
        holder.pop()
    }
}