function completeTask(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.innerText = 'Completed';

    let taskAssignedElement = document.querySelector('.task-assigned');
    let currentTaskAssigned = parseInt(taskAssignedElement.innerText);
    let newTaskAssignedCount = currentTaskAssigned - 1;
    taskAssignedElement.innerText = newTaskAssignedCount; 

    let navbarCounter = document.querySelector('.navbar-counter');
    let currentNavbarCount = parseInt(navbarCounter.innerText);
    navbarCounter.innerText = currentNavbarCount + 1; 

    if (newTaskAssignedCount === 0) {
        alert("Congratulations, your all tasks have been completed!");
    } else {
        alert("Task completed successfully!");
    }
}

document.querySelectorAll('.task-complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        completeTask(button); 
    });
});


