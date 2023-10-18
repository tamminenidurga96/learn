import {addTask} from "./model.js"
import { TaskView, TaskView } from "./view.js"

const TaskButton = document.querySelector("#taskbutton")

const TaskHtml = document.querySelector("#task")

TaskButton.addEventListener("click", function(){

    let typedTask =TaskHtml.value
    addTask(typedTask)

    const TaskView = new TaskView()
    TaskView.accessHtmlData()
})
