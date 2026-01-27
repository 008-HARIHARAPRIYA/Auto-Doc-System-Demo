# Simple Counter Web App

This project is a basic web application demonstrating a dynamic counter with increment, decrement, and reset functionalities. It showcases a foundational use of HTML for structure, CSS for styling, and JavaScript for interactive logic.

## Features

*   **Counter Display:** Displays a numerical value that can be manipulated.
*   **Increment Button:** Increases the counter's value by one.
*   **Decrement Button:** Decreases the counter's value by one.
*   **Reset Button:** Sets the counter's value back to zero.
*   **Dynamic Styling:** The counter's display color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   A default purple-ish color for zero.
*   **Responsive Layout:** Centered content with a gradient background.
*   **Interactive Buttons:** Buttons include hover effects for better user experience.

## Technologies Used

*   **HTML:** Structures the web page content.
*   **CSS:** Styles the appearance and layout of the application.
*   **JavaScript:** Implements the interactive logic for the counter.

## File Structure

*   `index.html`: The main HTML file that defines the content and links the stylesheet and script.
*   `style.css`: Contains all the CSS rules for styling the web page.
*   `script.js`: Contains the JavaScript code for the counter's functionality.

## How to Use

1.  Clone or download this repository.
2.  Open the `index.html` file in your web browser.

## Code Explanation

### `index.html` (HTML - HyperText Markup Language)

This file provides the **structure and content** of the web page.

*   It defines the document type, language, and basic head elements like the page title (`Simple Project`).
*   It links to `style.css` using the `<link>` tag in the `<head>`, ensuring the page is styled correctly.
*   The `<body>` contains all visible content:
    *   A main `div` with class `container` to hold the application's elements, providing a central, styled box.
    *   Headings (`<h1>`, `<h2>`) and a paragraph (`<p>`) introduce the application and display the counter value.
    *   The `<h2 id="counter">` element is crucial as it's where the counter's numerical value is displayed and dynamically updated by JavaScript.
    *   Three `<button>` elements (`decrementBtn`, `resetBtn`, `incrementBtn`) are defined with unique `id`s and classes for styling and JavaScript interaction.
*   The `<script src="script.js"></script>` tag at the end of the `<body>` links the JavaScript file. Placing it here ensures that the HTML elements are fully loaded before the script attempts to access them.

### `style.css` (CSS - Cascading Style Sheets)

This file dictates the **visual presentation and layout** of the web application.

*   It includes a universal reset (`*`) to normalize browser-specific styling, ensuring consistent appearance across different browsers.
*   The `body` is styled with a `linear-gradient` background and uses flexbox properties (`display: flex`, `justify-content: center`, `align-items: center`) to center the content vertically and horizontally on the page.
*   The `.container` class styles the main content box with a white background, padding, rounded corners, and a shadow, making it visually distinct.
*   Headings (`h1`, `p`) and the counter display (`#counter`) are styled with specific font sizes, colors, and margins. The `#counter` is given a large font size and bold weight to make it prominent.
*   Button groups (`.button-group`) use flexbox to arrange buttons with equal spacing.
*   General button styles (`.btn`) provide consistent padding, font size, border, and transition effects for hover states.
*   Specific button classes (`.btn-success`, `.btn-danger`, `.btn-secondary`) define distinct background and hover colors for the increment, decrement, and reset buttons, respectively.

### `script.js` (JavaScript)

This file provides the **interactivity and dynamic behavior** for the counter.

*   **Element Selection:** It first uses `document.getElementById()` to retrieve references to the HTML elements that need to be manipulated: the counter display, and the three buttons.
*   **Counter Initialization:** A `let` variable `counter` is initialized to `0` to store the current count.
*   **`updateDisplay()` Function:** This core function is responsible for:
    *   Updating the `textContent` of the `counterDisplay` element with the current `counter` value.
    *   Dynamically changing the `color` style of the `counterDisplay` based on the `counter`'s value: green for positive, red for negative, and purple for zero.
*   **Event Listeners:**
    *   `incrementBtn.addEventListener('click', ...)`: When the increment button is clicked, it increases the `counter` by one (`counter++`) and then calls `updateDisplay()` to reflect the change.
    *   `decrementBtn.addEventListener('click', ...)`: When the decrement button is clicked, it decreases the `counter` by one (`counter--`) and then calls `updateDisplay()`.
    *   `resetBtn.addEventListener('click', ...)`: When the reset button is clicked, it sets the `counter` back to `0` and then calls `updateDisplay()`.
*   **Initial Display Update:** `updateDisplay()` is called once at the end of the script to ensure the counter display is initialized correctly when the page loads, setting it to `0` and applying the corresponding default color.