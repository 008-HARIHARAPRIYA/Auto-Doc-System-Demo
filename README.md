# ✨ Daily Inspiration Quote Generator ✨

This project is a simple web-based quote generator designed to provide daily inspiration. Users can click a button to display a new random inspirational quote along with its author.

## Table of Contents

*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [File Structure](#file-structure)
*   [How to Run](#how-to-run)
*   [Understanding the Code](#understanding-the-code)
    *   [HTML (index.html)](#html-indexhtml)
    *   [CSS (style.css)](#css-stylecss)
    *   [JavaScript (script.js)](#javascript-scriptjs)

## Features

*   Displays a prominent inspirational quote and its author.
*   "New Quote" button to fetch and display a different quote.
*   Ensures that the same quote is not displayed twice in a row (if multiple quotes are available).
*   Clean and modern user interface.

## Technologies Used

*   **HTML5:** For structuring the web page content.
*   **CSS3:** For styling the user interface and layout.
*   **JavaScript (ES6+):** For adding interactivity and dynamic content generation.

## File Structure

The project consists of three main files:

```
.
├── index.html
├── style.css
└── script.js
```

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  Open `index.html` in your preferred web browser.

## Understanding the Code

This section details the role of each file and the technologies used.

### HTML (index.html)

The `index.html` file provides the foundational structure of the web page.

*   **Basic Page Setup**: It declares the document type, language, character set, and sets the viewport for responsiveness. The `<title>` tag defines "Quote Generator" for the browser tab.
*   **CSS Link**: It links to `style.css` in the `<head>` section, ensuring the visual styles are applied to the page.
*   **Main Content**:
    *   A `div` with the class `container` acts as the main wrapper for all visible content.
    *   An `<h1>` heading displays "✨ Daily Inspiration ✨".
    *   A `div` with the class `quote-box` holds the quote and author.
    *   Two `<p>` elements with `id="quote"` and `id="author"` are placeholders where the quote text and author name will be displayed, respectively.
    *   A `<button>` element with an `onclick` event handler set to `generateQuote()` is present. This button, when clicked, triggers the JavaScript function to update the quote.
*   **JavaScript Link**: It includes `script.js` at the end of the `<body>` tag, ensuring that the HTML elements are loaded before the JavaScript attempts to interact with them.

### CSS (style.css)

The `style.css` file is responsible for the visual presentation and layout of the Quote Generator.

*   **Global Reset**: It starts with a universal selector (`*`) to reset default margin, padding, and box-sizing for consistent styling across browsers.
*   **Body Styling**:
    *   Applies a modern font-family (`Segoe UI`).
    *   Sets a `linear-gradient` background from `#667eea` to `#764ba2`.
    *   Uses `flexbox` (`display: flex`, `justify-content: center`, `align-items: center`) to perfectly center the quote container on the screen.
*   **Container Styling**: Styles the `.container` to be a white, rounded box with a shadow, providing a clean card-like appearance for the content.
*   **Heading (`h1`)**: Styles the main title with a specific color and margin.
*   **Quote Box Styling**: The `.quote-box` defines the appearance of the area where the quote and author are displayed, including a light background, padding, border-radius, and minimum height.
*   **Quote and Author Text**:
    *   `#quote` is styled for font size, color, line height, and italic text.
    *   `#author` is styled for font size, color, and font weight.
*   **Button Styling**:
    *   The `button` is styled with a gradient background, white text, generous padding, and a large border-radius for a soft, pill-like shape.
    *   `transition` effects are added for `transform` and `box-shadow` to create smooth hover animations.
    *   `button:hover` and `button:active` pseudoclasses define subtle visual feedback when the user interacts with the button.
*   **Unused Style**: A `.quote-icon` class is defined in the CSS but is not currently used in the `index.html` file.

### JavaScript (script.js)

The `script.js` file adds the dynamic functionality to the Quote Generator.

*   **Quotes Data**:
    *   A `const` array named `quotes` holds a collection of quote objects. Each object has two properties: `text` (the quote itself) and `author` (the person who said it). This serves as the data source for the generator.
*   **Last Index Tracker**:
    *   A `let` variable `lastIndex` is initialized to `-1`. This variable is used to keep track of the index of the last displayed quote, helping to prevent immediate repetitions.
*   **`generateQuote()` Function**:
    *   This function is called when the "New Quote" button is clicked.
    *   **Random Index Generation**: It generates a `randomIndex` within the bounds of the `quotes` array length using `Math.random()` and `Math.floor()`.
    *   **Preventing Consecutive Repeats**: A `do...while` loop ensures that the newly generated `randomIndex` is different from `lastIndex`. This guarantees that you won't get the exact same quote twice in a row, provided there is more than one quote in the `quotes` array.
    *   **Updating `lastIndex`**: After a unique `randomIndex` is found, `lastIndex` is updated to this new index.
    *   **Displaying the Quote**:
        *   It selects the `selectedQuote` object from the `quotes` array using the `randomIndex`.
        *   `document.getElementById('quote').innerText` is used to update the text content of the HTML element with `id="quote"` to the `text` of the `selectedQuote`.
        *   `document.getElementById('author').innerText` is used to update the text content of the HTML element with `id="author"` to the `author` of the `selectedQuote`, prefixed with an em dash (`—`).