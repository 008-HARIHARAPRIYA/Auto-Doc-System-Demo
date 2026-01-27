# Simple Project

This is a basic web application demonstrating an interactive counter with dynamic visual feedback. Users can increment, decrement, and reset a numerical counter, and the display color will change based on the counter's value.

## Features

*   **Interactive Counter**: Increment the counter with the '+' button, decrement with the '-' button, and reset to zero with the 'Reset' button.
*   **Dynamic Color Feedback**: The counter's display color changes automatically:
    *   Green when the value is positive.
    *   Red when the value is negative.
    *   Blue when the value is zero.
*   **Clear User Interface**: Buttons are clearly labeled with intuitive symbols and text.

## Technologies Used

This project leverages the fundamental building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity.

### HTML (`index.html`)

The `index.html` file provides the foundational structure and content for the web page. It defines:

*   The basic page layout, including the document type, head, and body.
*   The title of the page ("Simple Project").
*   A link to the `style.css` file to apply visual styling.
*   A main `div` container (`.container`) to hold the application's content.
*   A welcome heading (`<h1>`) and a descriptive paragraph (`<p>`).
*   The counter display element (`<h2>` with `id="counter"`), which initially shows "0".
*   A group of three interactive buttons (`<button>` elements with `id`s for increment, decrement, and reset) for controlling the counter.
*   A link to the `script.js` file at the end of the `<body>` to enable dynamic behavior after the page content has loaded.

### CSS (`style.css`)

The `style.css` file is responsible for the visual presentation and aesthetics of the web application. It includes:

*   A global reset (`*`) to ensure consistent margin, padding, and box-sizing across different browsers.
*   Styling for the `body` to set a modern font, apply a linear gradient background, and center the content both vertically and horizontally.
*   Design for the main `container` element, giving it a white background, rounded corners, padding, and a subtle shadow for a polished look.
*   Custom styles for headings (`h1`, `p`) and the specific counter display (`#counter`) to control font size, color, and weight.
*   Layout for the button group (`.button-group`) using Flexbox to arrange buttons with consistent spacing.
*   Generic styling for all buttons (`.btn`) including padding, font size, border-radius, cursor style, and a smooth transition effect on hover.
*   Specific color schemes for different button types:
    *   `.btn-success` for the increment button (green).
    *   `.btn-danger` for the decrement button (red).
    *   `.btn-secondary` for the reset button (grey).
*   Hover effects for buttons, causing them to slightly lift and cast a larger shadow, along with darkening their background colors.

### JavaScript (`script.js`)

The `script.js` file provides the interactivity and dynamic behavior to the web application. It handles:

*   **Element Selection**: Retrieves references to the counter display and all three buttons from the HTML using their respective `id`s.
*   **Counter Initialization**: Declares and initializes a `counter` variable to `0`.
*   **`updateDisplay()` Function**:
    *   Updates the `textContent` of the `#counter` element with the current `counter` value.
    *   **Conditional Styling**: Dynamically sets the `color` style of the `#counter` element:
        *   To green (`#10b981`) if `counter` is greater than 0.
        *   To red (`#ef4444`) if `counter` is less than 0.
        *   To blue (`#667eea`) if `counter` is equal to 0.
*   **Event Listeners**: Attaches click event listeners to each button:
    *   When the increment button (`incrementBtn`) is clicked, it increases `counter` by 1 and calls `updateDisplay()`.
    *   When the decrement button (`decrementBtn`) is clicked, it decreases `counter` by 1 and calls `updateDisplay()`.
    *   When the reset button (`resetBtn`) is clicked, it sets `counter` back to `0` and calls `updateDisplay()`.
*   **Initial Display**: Calls `updateDisplay()` once when the script loads to ensure the counter display shows the initial value of `0` with the correct color.

## How to Run

To get this project up and running on your local machine:

1.  Save the `index.html`, `style.css`, and `script.js` files into the same directory.
2.  Open the `index.html` file using your preferred web browser.

The application will load, and you can immediately interact with the counter buttons.