# Simple Project

This is a simple web application featuring an interactive counter. Users can increment, decrement, and reset the counter, with the display color dynamically changing based on the counter's value.

## Features

*   **Counter Display:** Shows the current value of the counter.
*   **Increment Functionality:** A button to increase the counter's value.
*   **Decrement Functionality:** A button to decrease the counter's value.
*   **Reset Functionality:** A button to set the counter's value back to zero.
*   **Dynamic Styling:** The counter's display color changes:
    *   Green for positive values.
    *   Red for negative values.
    *   A default color (purple/blue) for zero.

## Technologies Used

This project uses the fundamental web technologies: HTML for structure, CSS for styling, and JavaScript for interactivity.

### `index.html` (HTML)

The `index.html` file provides the core structure and content of the web page. It defines:

*   The main `Welcome` heading and a descriptive paragraph.
*   A dedicated section for the counter, including the display element (`<h2 id="counter">`) and a group of buttons.
*   Three buttons with distinct IDs (`decrementBtn`, `resetBtn`, `incrementBtn`) for controlling the counter.
*   Links to the `style.css` stylesheet to apply visual designs.
*   Includes the `script.js` file at the end of the `<body>` for dynamic behavior.

### `style.css` (CSS)

The `style.css` file is responsible for the visual presentation and layout of the application. It defines:

*   Global styles to reset default browser margins and paddings.
*   Styling for the `body`, including a gradient background, font family, and centering the content vertically and horizontally.
*   Styles for the main content `container` (background, padding, border-radius, shadow, and maximum width).
*   Specific styles for headings (`h1`), paragraphs (`p`), and the counter display (`#counter`).
*   Styles for the `button-group` using Flexbox to arrange buttons horizontally with spacing.
*   General button (`.btn`) styles, including padding, font size, borders, radius, cursor, and transition effects for hover states.
*   Unique background colors and hover effects for different button types: `.btn-success` (green), `.btn-danger` (red), and `.btn-secondary` (grey).

### `script.js` (JavaScript)

The `script.js` file adds interactivity to the web page. It implements:

*   **Element Selection:** Retrieves references to the counter display and all three buttons using their respective IDs.
*   **Counter Initialization:** Initializes a `counter` variable to `0`.
*   **`updateDisplay()` Function:**
    *   Updates the text content of the `#counter` element with the current `counter` value.
    *   Conditionally changes the text color of the `#counter` based on the `counter`'s value: green for positive, red for negative, and a default purple/blue for zero.
*   **Event Listeners:** Attaches `click` event listeners to each button:
    *   `incrementBtn`: Increases the `counter` by 1 and calls `updateDisplay()`.
    *   `decrementBtn`: Decreases the `counter` by 1 and calls `updateDisplay()`.
    *   `resetBtn`: Sets the `counter` back to 0 and calls `updateDisplay()`.
*   **Initial Display:** Calls `updateDisplay()` once at the script's start to ensure the counter display shows the initial value and correct color immediately upon page load.

## Setup and Usage

To run this project:

1.  Save the `index.html`, `style.css`, and `script.js` files into the same directory.
2.  Open the `index.html` file in your web browser.