# Simple Project

This is a basic web application that demonstrates a functional counter with interactive buttons and dynamic styling.

## Features

*   **Interactive Counter:** Displays a numerical value that can be increased, decreased, or reset.
*   **Counter Controls:** Includes buttons to increment (`+`), decrement (`-`), and reset the counter value to zero.
*   **Dynamic Color Feedback:** The counter's displayed text color changes based on its value:
    *   Green when the value is positive.
    *   Red when the value is negative.
    *   Blue-purple when the value is zero.
*   **User Interface:** A centered, card-like container houses the counter and its controls, with styled buttons that include hover effects.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)

## How to Run

1.  Save the provided code snippets into three separate files in the same directory:
    *   `index.html`
    *   `style.css`
    *   `script.js`
2.  Open the `index.html` file in your web browser.

## Roles of Technologies

### HTML (index.html)

HTML is used to define the **structure and content** of the web page. In this project, `index.html`:

*   Establishes the basic document structure, including the page title ("Simple Project").
*   Links the external stylesheet (`style.css`) to apply visual presentation.
*   Provides the semantic structure for the application, including a main `div` container for all content.
*   Displays a welcome message (`h1`) and a short introductory paragraph (`p`).
*   Defines the `h2` element with the `id="counter"`, which serves as the display for the counter's current value.
*   Creates three interactive `button` elements (`incrementBtn`, `decrementBtn`, `resetBtn`) with specific IDs and classes, enabling both styling and JavaScript interaction.
*   Includes the external JavaScript file (`script.js`) at the end of the `<body>` to add interactivity and dynamic behavior.

### CSS (style.css)

CSS is responsible for the **visual styling and layout** of the web page. In this project, `style.css`:

*   Applies a global reset for default browser margins, paddings, and box-sizing.
*   Sets a `linear-gradient` background across the entire page (`body`).
*   Centers the main content container (`.container`) horizontally and vertically using Flexbox properties.
*   Styles the `.container` with a white background, padding, rounded corners, and a shadow for a card-like appearance.
*   Defines typography, colors, and spacing for headings (`h1`), paragraphs (`p`), and the counter display (`#counter`).
*   Arranges the counter control buttons horizontally with a consistent gap using Flexbox (`.button-group`).
*   Provides base styling for all buttons (`.btn`), including padding, font size, border, rounded corners, cursor, and transition effects for smooth interactions.
*   Defines specific background colors and hover effects for each button type: green for `.btn-success`, red for `.btn-danger`, and gray for `.btn-secondary`.

### JavaScript (script.js)

JavaScript provides the **interactivity and dynamic behavior** to the web page. In this project, `script.js`:

*   Selects specific HTML elements by their IDs (`#counter`, `incrementBtn`, `decrementBtn`, `resetBtn`) to enable manipulation and event handling.
*   Initializes a `counter` variable to `0`, which stores the current numerical value.
*   Implements an `updateDisplay()` function responsible for:
    *   Updating the `textContent` of the `#counter` element to reflect the current `counter` value.
    *   Dynamically changing the `style.color` of the `#counter` element based on the `counter`'s value: green if positive, red if negative, and blue-purple if zero.
*   Attaches event listeners to the Increment, Decrement, and Reset buttons.
*   When the Increment button is clicked, it increases the `counter` by one and calls `updateDisplay()`.
*   When the Decrement button is clicked, it decreases the `counter` by one and calls `updateDisplay()`.
*   When the Reset button is clicked, it sets the `counter` back to `0` and calls `updateDisplay()`.
*   Calls `updateDisplay()` once at the end of the script to ensure the initial counter value and color are correctly displayed when the page loads.