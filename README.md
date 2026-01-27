# Simple Counter App

This is a straightforward web application that demonstrates a functional counter with basic arithmetic operations and dynamic visual feedback. Users can increment, decrement, or reset the counter, and its display color will change based on its current value.

## Features

*   **Increment Counter**: Increase the counter's value by one.
*   **Decrement Counter**: Decrease the counter's value by one.
*   **Reset Counter**: Set the counter's value back to zero.
*   **Dynamic Color Feedback**:
    *   The counter display turns green when its value is positive.
    *   The counter display turns red when its value is negative.
    *   The counter display turns blue/purple when its value is zero.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)

## How to Run

To get this project up and running on your local machine:

1.  **Clone the repository** (or simply copy the `index.html`, `style.css`, and `script.js` files into a single folder).
2.  **Open `index.html`** in your preferred web browser.

The application should load immediately, displaying the counter and its controls.

## File Structure

```
.
├── index.html
├── style.css
└── script.js
```

---

## Roles of HTML, CSS, and JavaScript

This project perfectly illustrates the distinct yet complementary roles of HTML, CSS, and JavaScript in building a modern web application:

### HTML (HyperText Markup Language)

**Role: Structure and Content**

HTML is the foundation of the web page, providing its inherent structure and all the content visible to the user.

*   **Defines the Page Structure**: Sets up the basic `html`, `head`, and `body` elements.
*   **Content Placement**: Houses the "Welcome" heading, a descriptive paragraph, and the core counter elements.
*   **Interactive Elements**: Creates the three `<button>` elements that users interact with (increment, decrement, reset).
*   **Display Area**: Provides the `<h2>` element with `id="counter"` where the current count is displayed.
*   **Resource Linking**: Links the `style.css` file to apply visual styling and the `script.js` file to enable interactivity.

### CSS (Cascading Style Sheets)

**Role: Presentation and Styling**

CSS is responsible for how the HTML elements look and are laid out on the page. It transforms plain content into a visually appealing interface.

*   **Layout and Positioning**: Centers the entire application on the page using Flexbox on the `body`.
*   **Visual Design**: Styles the main `.container` with a white background, padding, rounded corners, and a shadow for a modern look.
*   **Typography**: Sets font families, sizes, and colors for headings (`h1`, `p`) and specifically for the `#counter` display.
*   **Button Styling**: Customizes the appearance of the buttons (`.btn`), including their background colors (`.btn-success`, `.btn-danger`, `.btn-secondary`), text color, padding, border-radius, and provides subtle hover effects.
*   **Background**: Applies a visually engaging gradient background to the entire page.

### JavaScript

**Role: Interactivity and Dynamic Behavior**

JavaScript brings the web page to life, handling user interactions, managing data, and dynamically updating the content and styles.

*   **Element Selection**: Selects specific HTML elements (`#counter`, `#incrementBtn`, `#decrementBtn`, `#resetBtn`) by their IDs to interact with them.
*   **State Management**: Initializes and manages the `counter` variable, which stores the current numerical value.
*   **Event Handling**: Attaches `event listeners` to the buttons, waiting for user clicks.
    *   When the "increment" button is clicked, it increases `counter`.
    *   When the "decrement" button is clicked, it decreases `counter`.
    *   When the "reset" button is clicked, it sets `counter` back to `0`.
*   **Dynamic Updates**: Implements an `updateDisplay()` function that:
    *   Changes the `textContent` of the `#counter` element to reflect the current `counter` value.
    *   Dynamically modifies the `style.color` property of the `#counter` element based on whether the `counter` is positive, negative, or zero, providing real-time visual feedback.
*   **Initialization**: Calls `updateDisplay()` once when the page loads to ensure the initial counter value and color are correctly displayed.