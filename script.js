// Function to update the timer
function updateTimer() {
    const now = new Date();
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Update the timer element
    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Update the date display if element exists
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        dateDisplay.textContent = dateString;
    }
}

// Update the timer immediately when the page loads
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);