# Simple Counter App

This project is a basic web application demonstrating a simple counter with increment, decrement, and reset functionalities. It showcases the fundamental interplay between HTML for structure, CSS for styling, and JavaScript for interactivity.

## Features

*   **Display Current Count:** Shows the current numerical value of the counter.
*   **Increment Counter:** A button to increase the counter's value by one.
*   **Decrement Counter:** A button to decrease the counter's value by one.
*   **Reset Counter:** A button to set the counter's value back to zero.
*   **Dynamic Color Change:** The counter display changes color based on its value:
    *   Green (`#10b981`) for positive values.
    *   Red (`#ef4444`) for negative values.
    *   Purple/Blue (`#667eea`) for zero.

## How to Run

1.  Save the three files (`index.html`, `style.css`, `script.js`) in the same directory.
2.  Open `index.html` in your web browser.

## Project Structure and Technologies

This project is built using standard web technologies: HTML, CSS, and JavaScript.

### `index.html` (HTML - HyperText Markup Language)

This file provides the **structure and content** of the web page.

*   It defines the page title "Simple Project".
*   It creates the main layout, including a "Welcome" heading, a descriptive paragraph, and the interactive counter section within a `div` with class `container`.
*   It contains an `<h2>` element with the ID `counter` to display the current count, initialized to `0`.
*   It includes three `<button>` elements with IDs `incrementBtn`, `decrementBtn`, and `resetBtn` for user interaction. These buttons are grouped in a `div` with class `button-group`.
*   It links to `style.css` in the `<head>` section to apply visual styles.
*   It loads `script.js` at the end of the `<body>` to add dynamic behavior after the HTML elements are available.

### `style.css` (CSS - Cascading Style Sheets)

This file dictates the **visual presentation and layout** of the application.

*   It applies a global reset for `margin`, `padding`, and `box-sizing`.
*   It sets a responsive and visually appealing background gradient for the entire `body`, along with font family and centers the content vertically and horizontally.
*   It styles the `.container` to give it a clean, card-like appearance with a white background, generous padding, rounded corners, and a subtle box shadow.
*   It defines typography for the main heading (`h1`) and the introductory paragraph (`p`).
*   It styles the `#counter` display with a large font size, bold weight, and an initial purple/blue color (`#667eea`).
*   It arranges the buttons in a horizontal `button-group` using flexbox with a `gap` for spacing.
*   It defines a base style for all buttons (`.btn`), including padding, font size, border-radius, a pointer cursor, and a smooth `transition` for hover effects.
*   It provides distinct background colors and hover effects for specific button types:
    *   `.btn-success` (green) for increment.
    *   `.btn-danger` (red) for decrement.
    *   `.btn-secondary` (gray) for reset.

### `script.js` (JavaScript)

This file provides the **interactivity and dynamic behavior** of the application.

*   It selects specific HTML elements by their IDs (`counter`, `incrementBtn`, `decrementBtn`, `resetBtn`) to interact with them.
*   It initializes a `counter` variable to `0`, which keeps track of the current count's state.
*   It defines an `updateDisplay()` function responsible for:
    *   Updating the `textContent` of the `#counter` element to reflect the current `counter` value.
    *   Dynamically changing the `style.color` of the `#counter` element based on whether the `counter` value is positive (green), negative (red), or zero (purple/blue).
*   It adds event listeners to each button (`incrementBtn`, `decrementBtn`, `resetBtn`) that trigger specific actions when clicked:
    *   The increment button increases `counter` by 1.
    *   The decrement button decreases `counter` by 1.
    *   The reset button sets `counter` to 0.
*   After each button click, the `updateDisplay()` function is called to refresh the UI and apply the correct color based on the new count.
*   The `updateDisplay()` function is also called once when the script loads to initialize the counter display to `0` and set its initial color.