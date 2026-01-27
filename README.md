# Simple Counter Web Application

This project presents a basic web application that features an interactive counter. Users can increment, decrement, and reset the counter, with the display color dynamically changing based on the counter's value.

## Table of Contents

*   [Features](#features)
*   [How It Works](#how-it-works)
    *   [HTML (Structure)](#html-structure)
    *   [CSS (Styling)](#css-styling)
    *   [JavaScript (Interactivity)](#javascript-interactivity)
*   [Setup and Usage](#setup-and-usage)

## Features

*   **Increment Counter:** Increase the counter value by one.
*   **Decrement Counter:** Decrease the counter value by one.
*   **Reset Counter:** Set the counter value back to zero.
*   **Dynamic Color Display:** The counter's displayed number changes color based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple for zero.
*   **Responsive Design:** Basic layout adjusts to different screen sizes. (Implicit due to flexbox for buttons, though not explicitly designed for a wide range of responsiveness beyond the main container's max-width).

## How It Works

This application utilizes a standard web development stack: HTML for structure, CSS for presentation, and JavaScript for interactive functionality.

### HTML (Structure)

The `index.html` file provides the semantic structure and content of the web page.

*   It defines the page title as "Simple Project".
*   It links to the `style.css` file to apply visual styling.
*   It includes a main paragraph with the text "This is a demo app for auto update document".
*   A `div` with the class `container` holds the primary content:
    *   A main heading "Welcome Demo app".
    *   A descriptive paragraph "This is a simple web app".
    *   A `div` with the class `counter-section` which contains:
        *   An `h2` element with the ID `counter`, initially displaying "0", which serves as the main display for the counter value.
        *   A `div` with the class `button-group` that arranges three interactive buttons:
            *   Decrement button (`-`) with ID `decrementBtn` and classes `btn btn-danger`.
            *   Reset button (`Reset`) with ID `resetBtn` and classes `btn btn-secondary`.
            *   Increment button (`+`) with ID `incrementBtn` and classes `btn btn-success`.
*   It links to the `script.js` file at the end of the `<body>`, ensuring the HTML content is loaded before the JavaScript attempts to interact with it.

### CSS (Styling)

The `style.css` file is responsible for the visual presentation and layout of the application.

*   **Global Reset:** Sets `margin`, `padding` to 0 and `box-sizing` to `border-box` for consistent styling across elements.
*   **Body Styling:** Applies a `Segoe UI` font family, a `linear-gradient` background, and uses flexbox to center the content vertically and horizontally on the page.
*   **Container Styling:** Styles the main content `div` (`.container`) with a white background, padding, rounded corners, and a `box-shadow` for a lifted effect. It also limits its `max-width`.
*   **Typography:** Defines styles for `h1` and `p` elements, including color, font size, and margins.
*   **Counter Display:** The `#counter` element is styled with a large font size, a default purple color (`#667eea`), strong font weight, and a bottom margin.
*   **Button Group Layout:** Uses flexbox (`display: flex`) with a `gap` to space out the buttons evenly within their container.
*   **Button Styling:** Defines base styles for all buttons (`.btn`), including padding, font size, border, border-radius, cursor, and a smooth `transition` for hover effects.
*   **Button Hover Effects:** Adds a slight `transform` and `box-shadow` on hover for all buttons.
*   **Specific Button Colors:** Applies distinct background and text colors for different button types:
    *   `.btn-success` (Green for increment).
    *   `.btn-danger` (Red for decrement).
    *   `.btn-secondary` (Gray for reset).
    *   Includes specific hover background colors for each button type.

### JavaScript (Interactivity)

The `script.js` file provides the dynamic behavior and interactivity for the counter application.

*   **Element Selection:** Retrieves references to the `counter` display element and all three buttons (`incrementBtn`, `decrementBtn`, `resetBtn`) using their respective IDs.
*   **Counter Initialization:** Declares a `counter` variable and initializes it to `0`.
*   **`updateDisplay()` Function:** This core function is responsible for:
    *   Updating the `textContent` of the `counterDisplay` to reflect the current value of the `counter` variable.
    *   Dynamically changing the `style.color` of the `counterDisplay` based on the `counter`'s value:
        *   If `counter > 0`, color is set to green (`#10b981`).
        *   If `counter < 0`, color is set to red (`#ef4444`).
        *   If `counter === 0`, color is set to purple (`#667eea`).
*   **Event Listeners:** Attaches `click` event listeners to each button:
    *   **Increment Button:** When clicked, it increments the `counter` by 1 (`counter++`) and then calls `updateDisplay()`.
    *   **Decrement Button:** When clicked, it decrements the `counter` by 1 (`counter--`) and then calls `updateDisplay()`.
    *   **Reset Button:** When clicked, it resets the `counter` to 0 (`counter = 0`) and then calls `updateDisplay()`.
*   **Initial Display Setup:** Calls `updateDisplay()` once at the end of the script to ensure the counter display and its color are correctly initialized when the page first loads.

## Setup and Usage

To run this project locally:

1.  **Save the files:**
    *   Create a folder named `simple-project`.
    *   Inside this folder, save the `index.html` content as `index.html`.
    *   Save the `style.css` content as `style.css` in the same `simple-project` folder.
    *   Save the `script.js` content as `script.js` in the same `simple-project` folder.
2.  **Open in Browser:** Navigate to the `simple-project` folder and double-click the `index.html` file. It will open in your default web browser.

You can then interact with the counter by clicking the `+`, `-`, and `Reset` buttons.