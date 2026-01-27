# Simple Project

This is a simple web application that demonstrates a basic interactive counter using HTML, CSS, and JavaScript. Users can increment, decrement, and reset a numerical counter displayed on the screen, with visual feedback for positive, negative, and zero values.

## Features

*   **Counter Display**: Shows the current numerical value of the counter.
*   **Increment Button**: Increases the counter value by one.
*   **Decrement Button**: Decreases the counter value by one.
*   **Reset Button**: Resets the counter value to zero.
*   **Dynamic Styling**: The counter's text color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple-blue for zero.
*   **Responsive Layout**: Basic layout that adapts to different screen sizes. (Implicit from flexbox and max-width in CSS, but not explicitly stated as "responsive" in a complex way, just standard web practice)
*   **Interactive Buttons**: Hover effects and click feedback for all control buttons.

## Technologies Used

This project utilizes the fundamental web technologies to create a dynamic user experience:

### HTML (HyperText Markup Language)

*   **Role**: Provides the core structure and content of the web page.
*   **In this project**: `index.html` defines the main container, headings (`Welcome`, `This is a simple app`), the counter display element (`<h2 id="counter">`), and the interactive buttons (`+`, `-`, `Reset`). It also links to the CSS stylesheet and the JavaScript file.

### CSS (Cascading Style Sheets)

*   **Role**: Styles the HTML elements, controlling their visual presentation, layout, and appearance.
*   **In this project**: `style.css` is responsible for the visual design, including:
    *   Setting the overall `body` background with a gradient and centering the content.
    *   Styling the `.container` with a white background, padding, rounded corners, and a shadow.
    *   Defining the appearance of headings (`h1`, `p`) and the `#counter` display (font size, weight, default color).
    *   Arranging the `.button-group` using flexbox.
    *   Creating general `.btn` styles and specific color themes for `.btn-success`, `.btn-danger`, and `.btn-secondary` buttons, including hover effects.

### JavaScript

*   **Role**: Adds interactivity and dynamic behavior to the web page.
*   **In this project**: `script.js` handles all the logic for the counter:
    *   It selects the necessary HTML elements (counter display, increment, decrement, and reset buttons).
    *   It initializes the `counter` variable to `0`.
    *   It defines an `updateDisplay()` function to reflect the current `counter` value on the screen and dynamically change its text color based on whether the value is positive, negative, or zero.
    *   It attaches "click" event listeners to each button to modify the `counter` value (increment, decrement, or reset) and then call `updateDisplay()` to refresh the UI.
    *   It calls `updateDisplay()` once on page load to set the initial state.

## Getting Started

To view and interact with this project:

1.  **Clone the repository** (if applicable) or download the project files.
2.  **Open `index.html`** in your web browser.

No complex build steps or server setup are required as this is a client-side only application.