import { taskInfo } from "./model.js";

 export class TaskView{
    
    myUl
    
    accessHtmlData(){
        this.myUl = document.querySelector("#container")
        this.readTasks()
    }

    readTasks(){
        taskInfo.taskArray.map((i)=>{
            letmyLi = document.createElement("Li")
            myLi.textContent = i
            this.myUl.append(myLi)
        })
    }
}