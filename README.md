# Simple Project

This is a basic web application demonstrating a dynamic counter with interactive controls. Users can increment, decrement, and reset the counter, and its display color changes based on its current value.

## Features

*   **Counter Display:** Shows the current value of the counter.
*   **Increment Button:** Increases the counter's value by one.
*   **Decrement Button:** Decreases the counter's value by one.
*   **Reset Button:** Sets the counter's value back to zero.
*   **Dynamic Styling:** The counter's displayed text color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple-blue for zero.

## Technologies Used and Their Roles

This project utilizes the fundamental web technologies: HTML, CSS, and JavaScript.

### HTML (index.html)

**Role:** Provides the core structure and content of the web page.
*   Defines the page title ("Simple Project").
*   Links to the `style.css` for visual presentation.
*   Includes the main heading ("Welcome") and a descriptive paragraph.
*   Structures the counter display (`<h2>` with ID `counter`) and the interactive buttons within dedicated sections.
*   Links to the `script.js` file, ensuring the JavaScript runs after the HTML content is loaded.

### CSS (style.css)

**Role:** Dictates the visual appearance and layout of the web page elements.
*   Resets default browser styles for consistent rendering.
*   Applies a gradient background and centers the main content on the page.
*   Styles the container, headings, and paragraphs with specific fonts, colors, padding, and shadows.
*   Defines the visual attributes for the counter display, including its size and initial color.
*   Designs the buttons, including their size, shape, background colors for different actions (success, danger, secondary), and hover effects for enhanced user experience.

### JavaScript (script.js)

**Role:** Adds interactivity and dynamic behavior to the web page.
*   **DOM Manipulation:** Selects specific HTML elements (counter display, increment, decrement, and reset buttons) using their IDs.
*   **State Management:** Initializes and manages the `counter` variable.
*   **User Interaction:** Attaches event listeners to the buttons to detect 'click' events.
*   **Logic:**
    *   Increments the `counter` when the '+' button is clicked.
    *   Decrements the `counter` when the '-' button is clicked.
    *   Resets the `counter` to `0` when the 'Reset' button is clicked.
*   **Dynamic Updates:**
    *   The `updateDisplay` function updates the `textContent` of the `counter` element to reflect the current `counter` value.
    *   Dynamically changes the `color` style of the `counter` element based on whether its value is positive, negative, or zero.

## How to Run

1.  **Save the Files:** Save the provided `index.html`, `style.css`, and `script.js` files in the same directory.
2.  **Open in Browser:** Open the `index.html` file directly in your web browser (e.g., by double-clicking it).

The application will load, displaying the counter interface, and you can interact with the buttons to change the counter's value.