// Function to update the timer display
function updateTimer() {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return; // Exit if element doesn't exist
    
    const now = new Date();
    
    // Format the date as MM/DD/YYYY
    const date = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    // Format the time as HH:MM:SS AM/PM
    const time = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Update the timer element with formatted date and time
    timerElement.textContent = `${date}, ${time}`;
}

// Initialize timer when window loads
window.onload = function() {
    updateTimer();
    setInterval(updateTimer, 1000);
};