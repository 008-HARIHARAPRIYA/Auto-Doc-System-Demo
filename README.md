# Simple Project

This is a basic web application demonstrating a dynamic counter with interactive buttons and styling. Users can increment, decrement, and reset a numerical counter displayed on the page, with the counter's color changing based on its value.

## Features

*   **Counter Display:** Shows a numerical value that updates in real-time.
*   **Increment Button:** Increases the counter value by one.
*   **Decrement Button:** Decreases the counter value by one.
*   **Reset Button:** Sets the counter value back to zero.
*   **Dynamic Styling:** The counter's text color changes based on its value:
    *   Green for positive values.
    *   Red for negative values.
    *   Purple/blue for zero.
*   **Responsive Layout:** Basic centering and layout for the counter interface.
*   **Interactive Buttons:** Buttons include hover effects for better user experience.

## Technologies Used

*   **HTML:** For the structure and content of the web page.
*   **CSS:** For styling the visual appearance of the application.
*   **JavaScript:** For handling user interactions and dynamic updates.

## How to Run

1.  **Save the files:**
    *   Save the `index.html` content into a file named `index.html`.
    *   Save the `style.css` content into a file named `style.css` in the same directory.
    *   Save the `script.js` content into a file named `script.js` in the same directory.
2.  **Open in browser:** Open the `index.html` file in your web browser.

## Project Structure and Roles

This project is composed of three files, each playing a distinct role in building the web application:

*   **`index.html` (HTML): The Structure**
    *   This file defines the content and layout of the web page. It contains the main heading, a descriptive paragraph, and the core counter interface, including the counter display (`<h2>`) and the three interactive buttons.
    *   It links to `style.css` to apply styling and includes `script.js` to add interactivity.

*   **`style.css` (CSS): The Presentation**
    *   This file dictates the visual appearance of the application. It styles everything from the overall body background and font to the specific layout of the container, the size and color of the counter text, and the design and hover effects of the buttons.
    *   It ensures a consistent and appealing look for the user interface.

*   **`script.js` (JavaScript): The Interactivity**
    *   This file brings the application to life by handling all dynamic behaviors. It listens for button clicks (increment, decrement, reset), updates the counter's numerical value, and dynamically changes the counter's displayed text and color based on its current value.
    *   It's responsible for the core logic that makes the counter functional.

---