# Simple Counter Application

This project is a basic web-based counter application demonstrating the fundamental interaction between HTML, CSS, and JavaScript. Users can increment, decrement, and reset a numerical counter, with the display color dynamically changing based on the counter's value.

## Features

*   **Increment Counter**: Increase the counter's value by one.
*   **Decrement Counter**: Decrease the counter's value by one.
*   **Reset Counter**: Set the counter's value back to zero.
*   **Dynamic Color Change**: The counter's display text changes color based on its value:
    *   Green when positive.
    *   Red when negative.
    *   Blue (default) when zero.

## Technologies Used

*   HTML
*   CSS
*   JavaScript

## How to Run

1.  **Clone or Download**: Get the project files.
2.  **Open `index.html`**: Simply open the `index.html` file in your web browser. All necessary styles and scripts are linked locally.

## File Structure

```
.
├── index.html
├── style.css
└── script.js
```

## Roles of HTML, CSS, and JavaScript

This project clearly illustrates the distinct roles of the three core web technologies:

### HTML (HyperText Markup Language) - Structure

`index.html` provides the foundational structure and content of the web page. It defines:

*   The main container for the application.
*   Headings (`<h1>`, `<h2>`) and paragraphs (`<p>`).
*   The specific element (`<h2 id="counter">`) where the counter value is displayed.
*   The three interactive buttons (`<button id="incrementBtn">`, `<button id="decrementBtn">`, `<button id="resetBtn">`) that users click to manipulate the counter.
*   Links to the external `style.css` for visual presentation and `script.js` for dynamic behavior.

### CSS (Cascading Style Sheets) - Styling and Presentation

`style.css` is responsible for the visual appearance and layout of the application. It dictates:

*   The overall page layout, centering the application container.
*   The background gradient of the page.
*   The styling of the main container (background color, padding, border-radius, shadows).
*   Font families, sizes, and colors for text elements.
*   The layout of the button group using Flexbox.
*   The visual design of the buttons, including their size, padding, border, and specific background colors for different button types (success, danger, secondary).
*   Hover effects for buttons, providing visual feedback on user interaction.
*   The initial default color and size of the counter display (`#counter`).

### JavaScript - Interactivity and Dynamic Behavior

`script.js` brings the application to life by handling user interactions and dynamic updates. It performs the following functions:

*   **Element Selection**: Identifies and retrieves specific HTML elements (the counter display and all three buttons) using their IDs.
*   **State Management**: Manages the `counter` variable, which stores the current numerical value.
*   **Display Updates**: The `updateDisplay()` function is responsible for:
    *   Setting the `textContent` of the counter display element to reflect the current `counter` value.
    *   Dynamically changing the `color` style of the counter display based on whether the `counter` is positive, negative, or zero, providing immediate visual feedback.
*   **Event Handling**: Attaches "click" event listeners to each button:
    *   When the "Increment" button is clicked, it increases the `counter` and calls `updateDisplay()`.
    *   When the "Decrement" button is clicked, it decreases the `counter` and calls `updateDisplay()`.
    *   When the "Reset" button is clicked, it sets the `counter` back to `0` and calls `updateDisplay()`.
*   **Initialization**: Calls `updateDisplay()` once when the script loads to set the initial counter value and its corresponding color.