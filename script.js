// Get elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize counter
let counter = 0;

// Function to update display
function updateDisplay() {
    counterDisplay.textContent = counter;
    
    // Change color based on value
    if (counter > 0) {
        counterDisplay.style.color = '#10b981';
    } else if (counter < 0) {
        counterDisplay.style.color = '#ef4444';
    } else {
        counterDisplay.style.color = '#667eea';
    }
}

// Event listeners
incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();