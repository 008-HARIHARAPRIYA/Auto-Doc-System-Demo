# Simple Project

This is a basic web application that demonstrates a simple interactive counter. Users can increment, decrement, or reset a numerical value displayed on the screen, with visual feedback based on the counter's state.

## Features

*   **Counter Display**: Shows a numerical value that can be changed.
*   **Increment Button**: Increases the counter's value by one.
*   **Decrement Button**: Decreases the counter's value by one.
*   **Reset Button**: Sets the counter's value back to zero.
*   **Dynamic Styling**: The counter's display color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Blue/Purple for zero.
*   **Responsive Button Styling**: Buttons have hover effects for better user experience.

## Technologies Used

This project utilizes the fundamental web technologies: HTML, CSS, and JavaScript.

*   ### HTML (index.html)
    Provides the **structure and content** of the web page. It defines the main layout, including the "Welcome" heading, a descriptive paragraph, the counter display (`<h2>` with `id="counter"`), and the three interactive buttons (`<button>` elements with distinct IDs and classes for styling). It also links to the external stylesheet and JavaScript file.

*   ### CSS (style.css)
    Handles the **visual presentation and styling** of the web application. It defines styles for the page's background (a gradient), the container layout, typography for headings and paragraphs, and the appearance of the counter display. Crucially, it styles the buttons, including their size, colors, hover effects, and arranges them in a flexible group.

*   ### JavaScript (script.js)
    Adds **interactivity and dynamic behavior** to the web page. It fetches references to the HTML elements (counter display and buttons). It manages the `counter` variable's state and defines functions to update the counter's value and refresh its display on the page. Event listeners are attached to the buttons to respond to user clicks, triggering the counter's increment, decrement, or reset actions, and dynamically changing the counter's text content and color based on its current value.

## How to Run

1.  **Save the files**: Save the provided `index.html`, `style.css`, and `script.js` files in the same directory on your computer.
2.  **Open in Browser**: Open the `index.html` file using your web browser (e.g., Chrome, Firefox, Edge). You can typically do this by double-clicking the `index.html` file.

The application will load, displaying the initial counter value and the interactive buttons.

## File Structure

```
.
├── index.html
├── style.css
└── script.js
```