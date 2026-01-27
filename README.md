# Simple Project

This is a simple web application that demonstrates a basic interactive counter using HTML, CSS, and JavaScript. Users can increment, decrement, and reset a numerical counter displayed on the page.

## Features

*   **Counter Display:** Shows the current numerical value of the counter.
*   **Increment Button:** Increases the counter value by one.
*   **Decrement Button:** Decreases the counter value by one.
*   **Reset Button:** Sets the counter value back to zero.
*   **Dynamic Styling:** The counter display's text color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple for zero.

## How to Run

1.  **Save the files:** Save the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  **Open in browser:** Open the `index.html` file with your web browser.

## Technologies Used

This project is built using standard web technologies:

### HTML (index.html)

**Role:** HTML provides the fundamental structure and content of the web page.

**Details:**
*   Defines the basic page layout, including the title "Simple Project".
*   Contains a main `div` with the class `container` to group the application's elements.
*   Displays a main heading "Welcome" and a descriptive paragraph "This is a simple web app".
*   Houses the counter section, which includes an `h2` element with the ID `counter` to display the numerical value.
*   Creates three interactive buttons:
    *   An increment button (`+`) with the ID `incrementBtn` and classes `btn btn-success`.
    *   A decrement button (`-`) with the ID `decrementBtn` and classes `btn btn-danger`.
    *   A reset button (`Reset`) with the ID `resetBtn` and classes `btn btn-secondary`.
*   Links the `style.css` file for styling and the `script.js` file for interactivity.

### CSS (style.css)

**Role:** CSS is responsible for the visual presentation and styling of the HTML elements.

**Details:**
*   Resets default browser margins, padding, and box-sizing for consistent rendering.
*   Applies a `linear-gradient` background to the `body` and centers the content.
*   Styles the main `.container` with a white background, padding, rounded corners, and a `box-shadow` for a card-like appearance.
*   Defines styles for headings (`h1`) and paragraphs (`p`).
*   Sets the initial appearance of the `#counter` display, including a large font size, bold weight, and a default color.
*   Arranges buttons in a horizontal layout using `flexbox` for `.button-group`.
*   Applies general styles to all `.btn` elements, such as padding, font size, border-radius, and a `transition` for smooth hover effects.
*   Provides specific background and text colors for different button types:
    *   `.btn-success` (green)
    *   `.btn-danger` (red)
    *   `.btn-secondary` (gray)
*   Adds `hover` effects to buttons, causing them to lift slightly and cast a subtle shadow.

### JavaScript (script.js)

**Role:** JavaScript provides the dynamic functionality and interactivity for the web page.

**Details:**
*   **Element Selection:** Retrieves references to the counter display element and all three buttons using their respective IDs.
*   **Counter Initialization:** Declares a `counter` variable and initializes it to `0`.
*   **`updateDisplay()` Function:**
    *   Updates the `textContent` of the `#counter` element with the current `counter` value.
    *   Dynamically changes the `color` style of the `#counter` element based on the `counter`'s value:
        *   If `counter` is greater than `0`, the color becomes green (`#10b981`).
        *   If `counter` is less than `0`, the color becomes red (`#ef4444`).
        *   If `counter` is `0`, the color becomes purple (`#667eea`).
*   **Event Listeners:** Attaches `click` event listeners to each button:
    *   **Increment Button:** When clicked, increments the `counter` by `1` and then calls `updateDisplay()`.
    *   **Decrement Button:** When clicked, decrements the `counter` by `1` and then calls `updateDisplay()`.
    *   **Reset Button:** When clicked, sets the `counter` back to `0` and then calls `updateDisplay()`.
*   **Initial Display:** Calls `updateDisplay()` once when the script loads to ensure the counter display is initialized correctly on page load.