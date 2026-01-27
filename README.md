# Simple Project

This is a minimalist web application featuring a counter that can be incremented, decremented, and reset. The counter dynamically changes its display color based on its current value.

## Features

*   **Counter Display:** Shows the current numerical value of the counter.
*   **Increment Button:** Increases the counter's value by one with each click.
*   **Decrement Button:** Decreases the counter's value by one with each click.
*   **Reset Button:** Resets the counter's value to zero.
*   **Dynamic Color Change:** The counter's displayed number changes color:
    *   Green when the counter value is positive.
    *   Red when the counter value is negative.
    *   Blue when the counter value is zero.

## How to Run

1.  Ensure you have the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  Open the `index.html` file in your preferred web browser.

## Technology Stack

This project is built using the fundamental web technologies: HTML for structuring content, CSS for styling, and JavaScript for adding interactivity.

### HTML (index.html)

The `index.html` file provides the foundational structure and content for the web page. It defines:

*   The page title: "Simple Project".
*   A main `div` container with the class `container` to hold the application's content.
*   A primary heading (`<h1>`) "Welcome" and a descriptive paragraph (`<p>`) "This is a simple app".
*   A dedicated section (`.counter-section`) containing the core counter elements.
*   An `<h2>` element with the ID `counter`, which serves as the display for the current count (initialized to "0").
*   A `div` with the class `button-group` that organizes three interactive `button` elements:
    *   A decrement button (`-`) with the ID `decrementBtn` and class `btn btn-danger`.
    *   A reset button (`Reset`) with the ID `resetBtn` and class `btn btn-secondary`.
    *   An increment button (`+`) with the ID `incrementBtn` and class `btn btn-success`.
*   A link to `style.css` in the `<head>` section to apply visual styles.
*   A reference to `script.js` at the end of the `<body>` to add interactive functionality.

### CSS (style.css)

The `style.css` file is responsible for the visual presentation and layout of the application. It includes:

*   A universal reset (`*`) to ensure consistent `margin`, `padding`, and `box-sizing` across elements.
*   Styling for the `body` to center content vertically and horizontally using Flexbox, apply a linear gradient background, and set a default font.
*   Styles for the `.container` to give it a white background, generous padding, rounded corners, and a subtle `box-shadow` for visual depth.
*   Custom styling for headings (`h1`, `p`) and the specific counter display element (`#counter`), including a large font size, bold weight, and an initial blue color.
*   Layout for the `.button-group` using Flexbox to arrange buttons horizontally with a defined `gap`.
*   General styling for all buttons (`.btn`), including padding, font size, border-radius, and a smooth `transition` for hover effects.
*   Hover effects for buttons, causing them to `transform` slightly upwards and gain a `box-shadow`.
*   Specific color schemes for different button types:
    *   `.btn-success`: Green background for the increment button.
    *   `.btn-danger`: Red background for the decrement button.
    *   `.btn-secondary`: Grey background for the reset button.
*   Hover states for each button type that darken their respective background colors.

### JavaScript (script.js)

The `script.js` file provides the interactivity and dynamic behavior for the counter application. Its key functionalities are:

*   **DOM Element Selection:** Retrieves references to the HTML elements that need to be manipulated or listened to: the counter display (`#counter`), and the increment (`#incrementBtn`), decrement (`#decrementBtn`), and reset (`#resetBtn`) buttons.
*   **Counter Initialization:** A `let` variable `counter` is declared and initialized to `0` to keep track of the current count.
*   **`updateDisplay()` Function:** This function is responsible for:
    *   Updating the `textContent` of the `counterDisplay` element to reflect the current value of the `counter` variable.
    *   Dynamically changing the `style.color` of the `counterDisplay` based on the `counter`'s value: green (`#10b981`) if positive, red (`#ef4444`) if negative, and blue (`#667eea`) if zero.
*   **Event Listeners:** `click` event listeners are attached to each button:
    *   When the increment button is clicked, `counter` is increased by one, and `updateDisplay()` is called.
    *   When the decrement button is clicked, `counter` is decreased by one, and `updateDisplay()` is called.
    *   When the reset button is clicked, `counter` is set back to `0`, and `updateDisplay()` is called.
*   **Initial Display:** The `updateDisplay()` function is called once at the end of the script to ensure the counter's initial value (0) and corresponding blue color are correctly displayed when the page first loads.