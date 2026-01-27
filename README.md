# Simple Counter Project

This project demonstrates a basic web application featuring a numerical counter with interactive controls. It showcases the fundamental roles of HTML for structure, CSS for styling, and JavaScript for dynamic behavior.

## Features

*   **Counter Display**: A prominent display shows the current numerical value of the counter.
*   **Increment Button**: A `+` button to increase the counter's value by one.
*   **Decrement Button**: A `-` button to decrease the counter's value by one.
*   **Reset Button**: A `Reset` button to set the counter's value back to zero.
*   **Dynamic Counter Color**: The counter display changes color based on its value:
    *   Green (`#10b981`) when the value is positive.
    *   Red (`#ef4444`) when the value is negative.
    *   Purple (`#667eea`) when the value is zero.
*   **Styled Interface**: A clean, centered user interface with distinct button styles and hover effects.

## Technologies Used

### HTML (`index.html`)

**Role**: Provides the foundational structure and content of the web page.

**In this project**:
*   It defines the main page layout, including the title "Simple Project".
*   It creates a main container (`<div class="container">`) to hold all the content.
*   It presents a welcome heading (`<h1>`) and a descriptive paragraph (`<p>`).
*   It includes the `<h2>` element with the `id="counter"` which serves as the primary display for the counter's value.
*   It structures the interactive buttons (`<button>`) for incrementing, decrementing, and resetting the counter, assigning them unique `id`s and styling `class`es.
*   It links the external `style.css` stylesheet for visual presentation and the `script.js` file for interactive functionality.

### CSS (`style.css`)

**Role**: Styles the HTML elements, controlling their visual presentation, layout, and appearance.

**In this project**:
*   It applies a global reset for margin and padding, and sets `box-sizing: border-box`.
*   It styles the `body` with a background gradient, centers the content using flexbox, and sets the default font.
*   It designs the main `.container` with a white background, padding, rounded corners, and a shadow.
*   It styles the headings (`h1`, `#counter`) and paragraphs (`p`) with specific colors, font sizes, and margins.
*   It defines the layout for the `.button-group` to display buttons side-by-side with a gap.
*   It provides base styling for all `.btn` classes, including padding, font size, border-radius, and transition effects for smooth interactions.
*   It defines specific background colors and text colors for `.btn-success` (green), `.btn-danger` (red), and `.btn-secondary` (gray).
*   It adds hover effects (`:hover`) to the buttons, making them slightly lift and cast a larger shadow, and darkens their background colors.
*   It sets the initial color for the `#counter` display to purple (`#667eea`).

### JavaScript (`script.js`)

**Role**: Adds dynamic behavior and interactivity to the web page.

**In this project**:
*   It retrieves references to specific HTML elements (the counter display and the three buttons) using their `id` attributes.
*   It initializes a `counter` variable to `0` to keep track of the current value.
*   It implements an `updateDisplay()` function responsible for:
    *   Updating the `textContent` of the `#counter` element with the current `counter` value.
    *   Dynamically changing the `style.color` of the `#counter` element based on whether the `counter` value is positive, negative, or zero.
*   It attaches `click` event listeners to each button:
    *   When the `incrementBtn` is clicked, it increases the `counter` by one and calls `updateDisplay()`.
    *   When the `decrementBtn` is clicked, it decreases the `counter` by one and calls `updateDisplay()`.
    *   When the `resetBtn` is clicked, it sets the `counter` back to `0` and calls `updateDisplay()`.
*   It calls `updateDisplay()` once at the end to ensure the counter display is initialized correctly when the page loads.

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files into the same directory on your local machine.
2.  Open the `index.html` file using any modern web browser (e.g., Chrome, Firefox, Edge, Safari).
3.  Interact with the `+`, `-`, and `Reset` buttons to observe the counter's behavior and its dynamic color changes.

## File Structure

```
.
├── index.html
├── style.css
└── script.js
```