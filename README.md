# Simple Counter Application

This project is a basic web-based counter application that allows users to interactively increment, decrement, and reset a numerical value displayed on the screen. The application provides instant visual feedback by dynamically changing the counter's color based on its current state (positive, negative, or zero).

## Features

*   **Counter Display:** Shows the current numerical value of the counter.
*   **Increment Functionality:** A dedicated button to increase the counter's value by one.
*   **Decrement Functionality:** A dedicated button to decrease the counter's value by one.
*   **Reset Functionality:** A button to set the counter's value back to zero.
*   **Dynamic Styling:** The counter's display color changes automatically:
    *   Green when the counter value is positive.
    *   Red when the counter value is negative.
    *   Purple/Blue when the counter value is zero.

## Technologies Used

This project is built using the foundational web technologies:

*   **HTML (HyperText Markup Language):** Provides the fundamental structure and content of the web page. It defines the main layout (`.container`), the heading and descriptive text, the element for displaying the counter (`#counter`), and the interactive buttons (`#incrementBtn`, `#decrementBtn`, `#resetBtn`).
*   **CSS (Cascading Style Sheets):** Responsible for the visual presentation and styling of the application. It dictates the page's background gradient, the appearance of the main container (padding, rounded corners, shadow), font styles, button designs (including their colors and hover effects), and the overall arrangement of elements to create a user-friendly interface.
*   **JavaScript:** Adds interactivity and dynamic behavior to the application. It handles the core logic for updating the counter's numerical value, listens for user clicks on the buttons, and programmatically modifies the counter's text content and its display color based on the current count.

## How to Run

To get this project running locally:

1.  **Save the files:** Ensure that `index.html`, `style.css`, and `script.js` are all saved in the same directory on your computer.
2.  **Open in browser:** Navigate to the directory where you saved the files and open `index.html` using your preferred web browser. The application should load, and you can start interacting with the counter.