# Simple Project

This repository contains a simple web application that demonstrates a basic interactive counter. It allows users to increment, decrement, and reset a numerical value displayed on the screen, with visual feedback based on the counter's state.

## Features

*   **Welcome Display**: A welcoming title and introductory paragraph.
*   **Interactive Counter**: Displays a numerical value that can be changed by user interaction.
*   **Increment Button**: Increases the counter's value by one with each click.
*   **Decrement Button**: Decreases the counter's value by one with each click.
*   **Reset Button**: Resets the counter's value back to zero.
*   **Dynamic Styling**: The counter's text color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple for zero.

## Technologies Used

This project utilizes the fundamental web technologies: HTML for structure, CSS for styling, and JavaScript for interactivity.

### HTML (`index.html`)

The `index.html` file provides the foundational structure and content of the web page. It defines:
*   The page title ("Simple Project").
*   The main content area (`.container`) which holds the "Welcome" heading, a descriptive paragraph, and the counter section.
*   The counter display element (`#counter`).
*   The three interactive buttons: Increment (`+`), Decrement (`-`), and Reset.
*   Links to the external stylesheet (`style.css`) for visual presentation and the external JavaScript file (`script.js`) for dynamic behavior.

### CSS (`style.css`)

The `style.css` file is responsible for the visual presentation and layout of the web application. It includes:
*   Global styles for resetting default browser margins/paddings and setting a base font.
*   Styling for the `body` to center the content and apply a background gradient.
*   Styling for the main container (`.container`), including its background, padding, rounded corners, and shadow.
*   Styles for headings and paragraphs to define their colors and spacing.
*   Specific styling for the counter display (`#counter`), defining its large font size and initial color.
*   Styles for the button group layout and individual buttons (`.btn`), including their padding, font size, border, border-radius, and hover effects.
*   Distinct color themes for the 'success' (green), 'danger' (red), and 'secondary' (grey) buttons.

### JavaScript (`script.js`)

The `script.js` file adds interactivity and dynamic behavior to the web page. It handles:
*   **Element Selection**: Retrieves references to the counter display and all control buttons from the HTML document.
*   **State Management**: Initializes and manages the `counter` variable, which holds the current numerical value.
*   **Display Update Logic**: Contains a function (`updateDisplay`) that:
    *   Updates the text content of the counter display with the current `counter` value.
    *   Dynamically changes the counter's text color based on whether the `counter` is positive, negative, or zero.
*   **Event Handling**: Attaches event listeners to the buttons to respond to user clicks:
    *   The increment button increases the `counter`.
    *   The decrement button decreases the `counter`.
    *   The reset button sets the `counter` back to `0`.
*   **Initial Setup**: Calls `updateDisplay()` once when the script loads to ensure the counter display is correctly initialized with the starting value and color.

## How to Run

1.  **Clone the repository** (if applicable) or **download the files**.
2.  **Open `index.html`** in your web browser.