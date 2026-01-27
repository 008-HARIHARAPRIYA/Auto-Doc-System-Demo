# Simple Counter App

This project demonstrates a basic web application featuring a dynamic counter with interactive buttons and visual feedback, built using standard web technologies: HTML for structure, CSS for styling, and JavaScript for functionality.

## Table of Contents

*   [Introduction](#introduction)
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [File Structure](#file-structure)
*   [How to Run](#how-to-run)

## Introduction

This is a simple web application that showcases a numerical counter. Users can increment, decrement, or reset the counter's value through dedicated buttons. The counter's display dynamically changes color based on its current value (positive, negative, or zero), providing immediate visual feedback.

## Features

Based on the provided code, this application offers the following features:

*   **Interactive Counter:** Displays a numerical value that can be manipulated.
*   **Increment Button:** Increases the counter's value by one.
*   **Decrement Button:** Decreases the counter's value by one.
*   **Reset Button:** Resets the counter's value to zero.
*   **Dynamic Color Feedback:**
    *   The counter display turns green when its value is positive.
    *   The counter display turns red when its value is negative.
    *   The counter display returns to a default blue/purple color when its value is zero.
*   **Styled Interface:** A clean, centrally aligned user interface with distinct button styles and hover effects.

## Technologies Used

This project is built using the fundamental languages of the web:

### HTML (HyperText Markup Language)

*   Provides the structural foundation of the web page.
*   Defines the main content areas, including a welcome message, the counter display, and the interactive buttons.
*   Links to the external stylesheet (`style.css`) for visual presentation and the external script file (`script.js`) for dynamic behavior.
*   Uses specific `id` attributes (`counter`, `incrementBtn`, `decrementBtn`, `resetBtn`) to allow JavaScript to easily access and manipulate elements.

### CSS (Cascading Style Sheets)

*   Controls the visual aesthetics and layout of the application.
*   Sets a background gradient for the entire page and centers the main content.
*   Styles the main container with a white background, padding, rounded corners, and a shadow for a card-like appearance.
*   Defines typography for headings and paragraphs.
*   Customizes the appearance of the counter display, including its size and initial color.
*   Styles the buttons with distinct colors (`btn-success` for green, `btn-danger` for red, `btn-secondary` for gray), padding, rounded borders, and hover effects for a responsive user experience.

### JavaScript

*   Adds interactivity and dynamic behavior to the web page.
*   Selects specific HTML elements (the counter display and all buttons) using their IDs.
*   Manages the state of the `counter` variable.
*   Implements an `updateDisplay()` function to:
    *   Render the current `counter` value on the page.
    *   Apply conditional styling to the counter display's text color based on whether the `counter` is positive, negative, or zero.
*   Attaches event listeners to each button, triggering the `counter` modification and `updateDisplay()` function when clicked.
*   Initializes the counter display when the page loads.

## File Structure

The project consists of three main files:

*   **`index.html`**: The main HTML file that defines the content and structure of the web page.
*   **`style.css`**: Contains all the CSS rules for styling the HTML elements.
*   **`script.js`**: Holds the JavaScript code responsible for the application's interactivity and logic.

## How to Run

To run this project locally:

1.  Save the provided HTML, CSS, and JavaScript code into three separate files named `index.html`, `style.css`, and `script.js` respectively, in the same directory.
2.  Open the `index.html` file in your web browser.