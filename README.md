# ✨ Daily Inspiration - Quote Generator

## Description
This project is a simple web-based "Daily Inspiration" quote generator designed to provide users with motivational quotes. It features the ability to fetch new quotes at the click of a button and also allows users to download the displayed quote as a shareable image.

## Features
*   **Generate New Quotes**: Click a button to display a random inspirational quote along with its author.
*   **Prevent Consecutive Duplicates**: The system ensures that the same quote is not displayed twice in a row (when more than one quote is available).
*   **Download Quote as Image**: Capture the currently displayed quote and author within its stylized box as a PNG image file.
*   **Clean and Engaging Design**: A visually appealing and responsive layout to present quotes effectively.

## How It Works

### HTML (index.html)
The `index.html` file defines the fundamental structure and content of the web page.
*   It sets up the page metadata, including character set and viewport settings, and defines the page title as "Quote Generator".
*   The main content is organized within a `div` with the class `container`, which holds the main heading, the quote display area (`quote-box`), and the interactive buttons.
*   Placeholder `p` tags with `id="quote"` and `id="author"` are included to dynamically display the quote text and its author.
*   It links to `style.css` for styling purposes and `script.js` for all interactive functionalities.
*   A third-party JavaScript library, `html2canvas` (loaded via CDN), is included to enable the functionality of converting HTML elements into an image.

### CSS (style.css)
The `style.css` file is responsible for the visual presentation, layout, and responsiveness of the application.
*   It applies a full-page `linear-gradient` background and uses flexbox properties to center the main content (`.container`) both horizontally and vertically.
*   The `.container` itself is styled with a white background, padding, rounded corners, and a subtle `box-shadow` for depth.
*   Headings, the `.quote-box`, and specific text elements (`#quote`, `#author`) are styled with appropriate fonts, colors, and spacing for optimal readability and aesthetic appeal. Notably, `#quote` text is displayed in italics.
*   Buttons are designed with vibrant `linear-gradient` backgrounds, rounded shapes, and clear text.
*   Interactive `hover` and `active` states are defined for buttons, providing visual feedback to the user through `transform` and `box-shadow` effects.
*   The `.button-group` uses flexbox to arrange the buttons neatly, and the `.download-btn` is given a distinct gradient background to visually differentiate its function.

### JavaScript (script.js)
The `script.js` file provides all the dynamic and interactive behaviors of the quote generator.
*   It initializes an array named `quotes`, which stores a collection of inspirational quotes, each as an object containing `text` and `author` properties.
*   The `generateQuote()` function is triggered when the "New Quote" button is clicked:
    *   It randomly selects a quote from the `quotes` array.
    *   A `do...while` loop ensures that the newly selected quote is different from the one previously displayed, preventing immediate repetition.
    *   It then updates the `innerText` of the HTML elements identified by `id="quote"` and `id="author"` with the text and author of the chosen quote.
*   The `downloadQuote()` function is activated when the "Download Image" button is clicked:
    *   It first checks if a quote has actually been generated, displaying an `alert` if the initial placeholder text is still present.
    *   It targets the `.quote-box` element and utilizes the `html2canvas` library to render this specific HTML element into a canvas.
    *   Once the canvas is generated, it is converted into a PNG image `blob`.
    *   A temporary URL is created for this `blob`, a hidden `<a>` element is generated, and a simulated click on this link triggers the download of the "quote.png" file to the user's device.
    *   Finally, it cleans up by revoking the temporary URL.

## Usage
1.  **Open the Application**: Simply open the `index.html` file in your preferred web browser.
2.  **Generate a Quote**: Click the "New Quote" button to display a random inspirational quote.
3.  **Download Quote Image**: Click the "📥 Download Image" button to save the currently displayed quote within its design box as a `.png` file. If no quote has been generated yet, an alert will prompt you to generate one first.

## Technologies Used
*   **HTML5**: For structuring the web page content and linking resources.
*   **CSS3**: For styling the application, creating a responsive design, and applying visual effects.
*   **JavaScript (ES6+)**: For implementing dynamic functionalities like quote generation and image download logic.
*   **`html2canvas`**: A client-side JavaScript library used to programmatically "screenshot" parts of the web page directly in the browser, enabling the image download feature.

## Setup
To run this project locally, no special server setup is required:
1.  Ensure you have all three files (`index.html`, `style.css`, and `script.js`) saved in the same directory.
2.  Open the `index.html` file directly using any modern web browser (e.g., Chrome, Firefox, Safari, Edge).