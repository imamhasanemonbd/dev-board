function updateDate() {
    let dateElement = document.querySelector('.dynamic-date');
    
    let now = new Date();

    let weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
    let month = now.toLocaleDateString('en-US', { month: 'short' });
    let day = now.getDate(); 
    let year = now.getFullYear();

    dateElement.innerHTML = `<p class="text-xl font-bold">${weekday}, <br> <span>${month} ${day}, ${year}</span></p>`;
}

updateDate();
