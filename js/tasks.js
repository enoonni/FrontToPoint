import TaskMaker from './taskMaker.js'
import Task from './task.js';

function main(){
    const mainDiv = document.getElementById('targets');

    const tasksDiv = document.createElement('div');
    const taskMaker = new TaskMaker(mainDiv, tasksDiv);
    
    mainDiv.appendChild(tasksDiv);    
}

document.addEventListener('DOMContentLoaded', main);