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
    styleForm(form, projectName, title, closeSubmitHolder, closeButton, submitButton)


    mainContainer.appendChild(layeredMask);

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const newProject = document.createElement("a");
        newProject.innerHTML = projectName.value;
        newProject.id = projectName.value;
        newProject.addEventListener('mouseenter', function(){
            newProject.style.backgroundColor = 'lavenderblush'
            newProject.style.transition = 'background-color 0.2s ease';
            newProject.style.fontSize = 'larger'
            newProject.style.transition = 'font-size 0.5s ease'
        })
        newProject.addEventListener('mouseleave', function(){
            newProject.style.backgroundColor = 'honeydew'
            newProject.style.transition = 'background-color 0.2s ease';
            newProject.style.fontSize = '18px'
            newProject.style.transition = 'font-size 0.5s ease'

        })


        const newProjectContainer = document.createElement("div");
        newProjectContainer.id = projectName.value + "-container"
        displayView(newProject, newProjectContainer, currentProjectNameHolder)
        gridStyle(newProjectContainer)

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
        checkForTextChange()
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

function styleForm(form, input, title, closeSubmitHolder, closeButton, submitButton){
    form.style.backgroundColor = "lavender"
    form.style.width = "400px"
    form.style.height = "200px"
    form.style.borderRadius = "10px"
    form.style.marginLeft = "85vh"
    form.style.marginTop = "30vh"
    form.style.boxShadow = '5px 5px 5px lightgray'
    form.style.zIndex = 999
    form.style.position = "absolute"
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

function checkForTextChange(){
    const getElements = projectList.querySelectorAll('*');

    getElements.forEach(element => {
        if(element.id == currentProjectNameHolder[0])
        {
            element.style.color = "green"
        }
        else{
            element.style.color = "black"
        }
    })
}

export function gridStyle(gridContainer){
    
    gridContainer.style.display = "grid"
    gridContainer.style.gridAutoColumns = "300px"
    gridContainer.style.gridAutoFlow = "column"
    gridContainer.style.gridTemplateColumns = "300px 300px 300px"
    gridContainer.style.gridTemplateRows = "200px 200px 200px"
    gridContainer.style.gap = "10px"
    gridContainer.style.rowGap = "15px"
    gridContainer.style.marginLeft = "30px"
    gridContainer.style.marginTop = "80px"
}