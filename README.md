# Simple Counter Application

This project is a straightforward web-based counter application, demonstrating fundamental front-end development principles using HTML for structure, CSS for styling, and JavaScript for interactive functionality.

## Features

*   **Counter Display:** Shows the current numerical value of the counter.
*   **Increment Functionality:** A button to increase the counter's value by one.
*   **Decrement Functionality:** A button to decrease the counter's value by one.
*   **Reset Functionality:** A button to set the counter's value back to zero.
*   **Dynamic Color Indication:** The counter's display color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple (initial color) for zero.

## Technologies Used

*   **HTML5:** For structuring the web page content.
*   **CSS3:** For styling the application's visual presentation and layout.
*   **JavaScript (ES6+):** For implementing interactive logic and dynamic updates.

## File Structure

The project consists of three main files:

*   `index.html`: The core HTML file that defines the content and structure of the counter application.
*   `style.css`: Contains all the CSS rules that dictate the visual appearance, layout, and responsiveness of the application.
*   `script.js`: Implements the interactive logic for the counter, handling user clicks, updating the counter value, and dynamically changing its display.

## How to Run

To run this project locally:

1.  Ensure all three files (`index.html`, `style.css`, and `script.js`) are located in the same directory.
2.  Open the `index.html` file in your preferred modern web browser.

## Understanding the Code

### The Role of HTML (`index.html`)

HTML (HyperText Markup Language) is the standard markup language for creating web pages. In this project, `index.html` serves as the structural foundation:

*   It defines the overall document structure, including the page title (`<title>Simple Project</title>`).
*   It links to the external `style.css` file (`<link rel="stylesheet" href="style.css">`) to apply styling to the page.
*   It contains all the visible content of the application, such as the main heading (`<h1>Welcome</h1>`), a descriptive paragraph (`<p>This is a simple app</p>`), and the interactive elements.
*   A `div` with the class `container` wraps the entire application content, providing a clear layout boundary.
*   The current counter value is displayed within an `<h2>` element that has the `id="counter"`.
*   Three `<button>` elements (`id="decrementBtn"`, `id="resetBtn"`, `id="incrementBtn"`) are provided for user interaction, grouped within a `div` with the class `button-group`.
*   Finally, it includes the `script.js` file (`<script src="script.js"></script>`) at the end of the `<body>` to ensure the HTML elements are loaded before the JavaScript attempts to interact with them.

### The Role of CSS (`style.css`)

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of an HTML document. In this project, `style.css` is responsible for all visual aspects:

*   **Global Reset:** The `*` selector applies `margin: 0; padding: 0; box-sizing: border-box;` to all elements, ensuring a consistent starting point for styling.
*   **Body Styling:** Sets the font family, applies a gradient background, and uses Flexbox to center the main `container` both horizontally and vertically on the page.
*   **Container Styling:** Styles the central `div.container` with a white background, padding, rounded corners, and a shadow to give it a card-like appearance.
*   **Typography:** Defines colors, margins, and font sizes for the `h1` heading and `p` paragraph.
*   **Counter Display Styling:** Styles the `#counter` element with a large font size, bold weight, and an initial purple color.
*   **Button Group Layout:** Uses Flexbox for `.button-group` to arrange the buttons in a row with spacing between them.
*   **Button Base Styles:** The `.btn` class provides common styles for all buttons, including padding, font size, border-radius, cursor, and a transition for hover effects.
*   **Specific Button Styles:** Classes like `.btn-success`, `.btn-danger`, and `.btn-secondary` apply distinct background and hover colors to differentiate the increment, decrement, and reset buttons, respectively.

### The Role of JavaScript (`script.js`)

JavaScript is a programming language that enables dynamic and interactive features on web pages. In this project, `script.js` provides the core functionality and interactivity:

*   **DOM Element Selection:** It retrieves references to specific HTML elements (the counter display and the three buttons) using `document.getElementById()`, making them accessible for manipulation.
*   **State Management:** An initialized `let counter = 0;` variable holds the current numerical value of the counter.
*   **Display Update Function:** The `updateDisplay()` function is crucial for:
    *   Setting the `textContent` of the `#counter` element to the current `counter` value.
    *   Dynamically changing the `style.color` of the `#counter` element based on whether the `counter` is positive, negative, or zero.
*   **Event Listeners:** It attaches `click` event listeners to each button:
    *   When `incrementBtn` is clicked, `counter` is increased by 1, and `updateDisplay()` is called.
    *   When `decrementBtn` is clicked, `counter` is decreased by 1, and `updateDisplay()` is called.
    *   When `resetBtn` is clicked, `counter` is set back to 0, and `updateDisplay()` is called.
*   **Initial State:** `updateDisplay()` is called once when the script first loads to ensure the counter display shows `0` and has the correct initial color.