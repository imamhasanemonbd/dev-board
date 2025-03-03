function addActivityLog(taskName) {
    let currentTime = new Date().toLocaleTimeString();

    let logMessage = `You have Completed The Task ${taskName} at ${currentTime}`;

    let activityLogContainer = document.querySelector('.activity-log');
    
    let logDiv = document.createElement('div');
    logDiv.classList.add('bg-[#f4f7ff]', 'rounded-lg', 'p-4', 'mb-4');
    logDiv.innerText = logMessage; 

    activityLogContainer.appendChild(logDiv);
}

document.querySelectorAll('.task-complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        let taskName = button.closest('.task-card').querySelector('.task-name').innerText;

        addActivityLog(taskName);
    });
});

function clearActivityLog() {
    let activityLogContainer = document.querySelector('.activity-log');
    activityLogContainer.innerHTML = '';
}

document.querySelector('.clear-history-btn').addEventListener('click', clearActivityLog);
