# Simple Counter Application

This project is a straightforward web application demonstrating a basic counter with interactive buttons and dynamic styling. It serves as a demo for how HTML, CSS, and JavaScript work together to create a functional and visually appealing user interface.

## Project Description

The application features a central display that shows a numeric count. Users can interact with three buttons:
*   **Increment (+):** Increases the counter value.
*   **Decrement (-):** Decreases the counter value.
*   **Reset:** Sets the counter value back to zero.

The counter's display color dynamically changes based on its value: green for positive, red for negative, and purple for zero.

## Technologies Used

This project utilizes the core web technologies:

### HTML (HyperText Markup Language)

**Role:** HTML provides the fundamental structure and content of the web page.

*   **Document Structure:** Defines the overall layout, including the page title (`<title>`) and the main body content.
*   **Content Elements:** Structures the text (`<p>`, `<h1>`, `<h2>`) and interactive elements (`<button>`).
*   **Counter Display:** Creates a dedicated `<h2>` element with the ID `counter` to display the current count.
*   **Buttons:** Defines three distinct `<button>` elements (`incrementBtn`, `decrementBtn`, `resetBtn`) that users interact with.
*   **CSS Link:** Links the `style.css` file to apply visual styles to the page.
*   **JavaScript Link:** Includes the `script.js` file at the end of the `<body>` to ensure the HTML elements are loaded before the JavaScript attempts to access them.

### CSS (Cascading Style Sheets)

**Role:** CSS is responsible for the visual presentation and styling of the HTML elements.

*   **Global Styling:** Applies universal styles such as resetting margins and padding, and defining the default font family and box-sizing.
*   **Body Styling:** Sets the background color with a gradient, centers the content vertically and horizontally, and ensures the page takes up the full viewport height.
*   **Container Styling:** Styles the main content `<div>` with a white background, padding, rounded corners, and a shadow for a modern card-like appearance.
*   **Typography:** Defines styles for headings (`<h1>`, `p`) including color, font size, and margins.
*   **Counter Display Styling:** Specifically styles the `#counter` element with a large font size, bold weight, and an initial color.
*   **Button Styling:** Provides a base style for all buttons (`.btn`), including padding, font size, border-radius, cursor, and transition effects for smooth interactions.
*   **Button Themes:** Defines specific color schemes for different button types (`.btn-success` for green, `.btn-danger` for red, `.btn-secondary` for gray) and their respective hover states.

### JavaScript

**Role:** JavaScript adds dynamic behavior and interactivity to the web page.

*   **Element Selection:** Retrieves references to specific HTML elements (the counter display and the three buttons) using their IDs.
*   **Counter Initialization:** Declares and initializes a `counter` variable to `0`.
*   **`updateDisplay()` Function:**
    *   Updates the `textContent` of the `#counter` element with the current `counter` value.
    *   Dynamically changes the `color` style of the `#counter` element based on the `counter`'s value:
        *   `#10b981` (green) if `counter` is greater than `0`.
        *   `#ef4444` (red) if `counter` is less than `0`.
        *   `#667eea` (purple) if `counter` is `0`.
*   **Event Listeners:**
    *   Attaches `click` event listeners to each button.
    *   **Increment Button:** When clicked, it increments the `counter` by `1` and calls `updateDisplay()`.
    *   **Decrement Button:** When clicked, it decrements the `counter` by `1` and calls `updateDisplay()`.
    *   **Reset Button:** When clicked, it sets the `counter` back to `0` and calls `updateDisplay()`.
*   **Initial Display:** Calls `updateDisplay()` once when the script loads to set the initial counter value and color.

## How to Run

1.  Save the provided HTML, CSS, and JavaScript code into three separate files named `index.html`, `style.css`, and `script.js` respectively, in the same directory.
2.  Open the `index.html` file in your web browser.