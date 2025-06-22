     
//  Simple to do task app that stores in localstorage tasks with date


const list =  JSON.parse(localStorage.getItem('list'));


listTasks();



function addTask() {

    let inputTask = document.getElementById("inputTask").value;

    let inputDate = document.getElementById("inputDate").value;


    list[inputTask] = inputDate;


    inputTask = '';

    listTasks();

    localStorage.setItem('list', JSON.stringify(list));


}

function listTasks() {

    let outputList = '';
        
    for (const task in list) {
        let taskDelete = task;
        outputList += `<p>${task} - ${list[task]}    <button onclick="deleteTask('${taskDelete}')">Delete</button></p>`;

    }
    document.getElementById("list").innerHTML = outputList || 'No tasks';

}


function deleteTask(taskDelete) {

    delete list[taskDelete];
    listTasks();
    localStorage.setItem('list', JSON.stringify(list));
}


