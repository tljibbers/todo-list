const mainView = document.querySelector(".list-view")
const allContainer = document.createElement("div")
const highContainer = document.createElement("div")
const lowContainer = document.createElement("div")
const ongoingContainer = document.createElement("div")
const completedContainer = document.createElement("div")

import { allArray, highPriorityArray, lowPriorityArray, ongoingArray, completedArray } from "./createTodo"
import { gridStyle } from "./project"
import createTask from "./task"

export function openAll()
{
    removeChild(mainView)
    removeChild(allContainer)
    mainView.appendChild(allContainer)
    gridStyle(allContainer)

    for(let i in allArray)
    {
        createTask(allArray[i], allContainer)
    }
}

export function openHigh()
{
    removeChild(mainView)
    removeChild(highContainer)
    mainView.appendChild(highContainer)
    gridStyle(highContainer)

    for(let i in highPriorityArray)
    {
        createTask(highPriorityArray[i], highContainer)
    }
}

export function openLow()
{
    removeChild(mainView)
    removeChild(lowContainer)
    mainView.appendChild(lowContainer)
    gridStyle(lowContainer)

    for(let i in lowPriorityArray)
    {
        createTask(lowPriorityArray[i], lowContainer)
    }
}

export function openOngoing()
{
    removeChild(mainView)
    removeChild(ongoingContainer)
    mainView.appendChild(ongoingContainer)
    gridStyle(ongoingContainer)

    for(let i in ongoingArray)
    {
        createTask(ongoingArray[i], ongoingContainer)
    }
}

export function openCompleted()
{
    removeChild(mainView)
    removeChild(completedContainer)
    mainView.appendChild(completedContainer)
    gridStyle(completedContainer)

    for(let i in completedArray)
    {
        createTask(completedArray[i], completedContainer)
    }
}

function removeChild(container){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}