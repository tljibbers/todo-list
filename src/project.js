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

    const layeredMask = document.createElement("div");

    const closeSubmitHolder = document.createElement("div");

    form.appendChild(title);
    form.appendChild(projectName);
    closeSubmitHolder.appendChild(closeButton);
    closeSubmitHolder.appendChild(submitButton);
    form.appendChild(closeSubmitHolder);
    mainContainer.appendChild(form);
    styleForm(form, projectName, mainContainer, title, closeSubmitHolder, closeButton, submitButton)


    mainContainer.appendChild(layeredMask);

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const newProject = document.createElement("a");
        newProject.innerHTML = projectName.value;
        newProject.id = projectName.value;
        newProject.addEventListener('mouseenter', function(){
            newProject.style.backgroundColor = 'lavenderblush'
            newProject.style.transition = 'background-color 0.2s ease';
        })
        newProject.addEventListener('mouseleave', function(){
            newProject.style.backgroundColor = 'honeydew'
            newProject.style.transition = 'background-color 0.2s ease';
        })

        const newProjectContainer = document.createElement("div");
        newProjectContainer.id = projectName.value + "-container"
        displayView(newProject, newProjectContainer, currentProjectNameHolder)

        projectList.appendChild(newProject);
        projectArray.push(newProject);
        mainContainer.removeChild(form);
        mainContainer.style.backgroundColor = "white" 
    })

    closeButton.addEventListener('click', function(){
        mainContainer.removeChild(form);
        mainContainer.style.backgroundColor = "white" 
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

function styleForm(form, input, mainContainer, title, closeSubmitHolder, closeButton, submitButton){
    form.style.backgroundColor = "lavender"
    form.style.width = "400px"
    form.style.height = "200px"
    form.style.borderRadius = "10px"
    form.style.marginLeft = "50vh"
    form.style.marginTop = "30vh"
    input.style.borderRadius = "5px"
    input.style.borderStyle = "solid"
    input.style.width = "70%"
    input.style.height = "15%"
    input.style.marginBottom = "5%"
    input.style.marginLeft = "15%"
    title.style.marginLeft = "15%"
    title.style.marginTop = "10%"
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
    mainContainer.style.backgroundColor = "#fcfcfc"
}