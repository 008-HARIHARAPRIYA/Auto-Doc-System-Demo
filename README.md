# Simple Counter App

This project is a basic web-based counter application that allows users to increment, decrement, and reset a numerical value. The counter's display dynamically changes color based on whether the value is positive, negative, or zero, providing immediate visual feedback.

## Features

*   **Increment Counter:** Click the `+` button to increase the counter's value.
*   **Decrement Counter:** Click the `-` button to decrease the counter's value.
*   **Reset Counter:** Click the `Reset` button to set the counter back to zero.
*   **Dynamic Color Feedback:**
    *   The counter's text turns **green** when its value is positive.
    *   The counter's text turns **red** when its value is negative.
    *   The counter's text turns **purple/blue** when its value is zero.
*   **Modern UI:** A clean, centered interface with styled buttons and a subtle background gradient.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript

## How to Run

To run this project locally, follow these simple steps:

1.  **Save the files:** Ensure `index.html`, `style.css`, and `script.js` are all saved in the same directory.
2.  **Open in browser:** Navigate to the directory where you saved the files and open `index.html` with your preferred web browser.

The application will load, and you can start interacting with the counter immediately.

## Understanding the Codebase

This project demonstrates the fundamental roles of HTML, CSS, and JavaScript in building interactive web applications.

### HTML (`index.html`) - The Structure

The `index.html` file provides the semantic structure and content of the web page.

*   It defines the main layout with a `div` element acting as a `container`.
*   Static text elements like `<h1>` and `<p>` display the project title and a brief description.
*   An `<h2>` element with the `id="counter"` serves as the display for the numerical value, which JavaScript will update.
*   Three `<button>` elements are created, each with a unique `id` (`incrementBtn`, `decrementBtn`, `resetBtn`) to allow JavaScript to target them for interaction, and specific `class`es (`btn`, `btn-success`, `btn-danger`, `btn-secondary`) for styling purposes.
*   It links `style.css` in the `<head>` section to apply visual styles and includes `script.js` at the end of the `<body>` to ensure the HTML content is loaded before the JavaScript attempts to interact with it.

### CSS (`style.css`) - The Presentation

The `style.css` file is responsible for the visual appearance and layout of the application.

*   It includes a universal reset (`*`) to ensure consistent styling across browsers.
*   The `body` is styled with a background gradient, a clean font, and uses Flexbox to perfectly center the main content on the page.
*   The `.container` class defines the look of the main application box, including its white background, rounded corners, padding, and a subtle shadow.
*   Specific styles are applied to headings (`h1`), paragraphs (`p`), and the counter display (`#counter`), dictating their font sizes, colors, and weight.
*   The `.button-group` uses Flexbox to arrange the buttons horizontally with a gap.
*   A base `.btn` class provides common styling for all buttons, such as padding, font size, border-radius, and a smooth transition effect on hover.
*   Distinct classes like `.btn-success`, `.btn-danger`, and `.btn-secondary` are used to apply specific background colors (green, red, and gray, respectively) and their corresponding darker hover states, enhancing the user experience and visual hierarchy.

### JavaScript (`script.js`) - The Interactivity

The `script.js` file brings the application to life by handling all the dynamic behavior and user interaction.

*   It starts by selecting the necessary HTML elements (`#counter`, `#incrementBtn`, `#decrementBtn`, `#resetBtn`) using their unique IDs, allowing JavaScript to manipulate them.
*   A `counter` variable is initialized to `0` to keep track of the numerical value.
*   The `updateDisplay()` function is central to the application's logic. It performs two key tasks:
    1.  Updates the `textContent` of the `#counter` element to reflect the current `counter` variable's value.
    2.  Dynamically changes the `style.color` of the `#counter` element based on the `counter`'s value: green for positive, red for negative, and purple/blue for zero.
*   Event listeners are attached to each button:
    *   Clicking `incrementBtn` increases `counter` by 1.
    *   Clicking `decrementBtn` decreases `counter` by 1.
    *   Clicking `resetBtn` sets `counter` back to 0.
    *   After each button click, `updateDisplay()` is called to reflect the new counter value and its corresponding color on the screen.
*   Finally, `updateDisplay()` is called once when the script first loads to initialize the counter's display and color to its starting value of zero.