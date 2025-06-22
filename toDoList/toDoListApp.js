     
    //  Simple to do task app that stores in localstorage tasks with date
     

let list = [];
list =  JSON.parse(localStorage.getItem('list'));


listTasks();



function addTask() {

    let taskName = document.getElementById("inputTask").value;

    let taskDate = document.getElementById("inputDate").value;


    list.push({taskName, taskDate});

    document.getElementById("inputTask").value = '';

    listTasks();

    localStorage.setItem('list', JSON.stringify(list));

}

function listTasks() {

    let outputList = '';
        
    for (let i = 0;  i < list.length; i++) {

        const listObj = list[i];
        const {taskName, taskDate} = listObj;        
        let taskDelete = i;

        outputList += `<div class="task-item"><div>${taskName}</div>
            <div> ${taskDate}</div>
            <button onclick="deleteTask('${taskDelete}')">Delete</button></div>`;

    }
    document.getElementById("list").innerHTML = outputList || 'No tasks';

}


function deleteTask(taskDelete) {
    list.splice(taskDelete, 1);
    listTasks();
    localStorage.setItem('list', JSON.stringify(list));
}


