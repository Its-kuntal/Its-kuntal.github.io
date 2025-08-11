# Static To-Do List Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://its-kuntal.github.io/)
## Project Overview

This project was developed to meet the objective of deploying a simple static website using **GitHub Pages**. It serves as a practical demonstration of the entire development-to-deployment workflow:

1.  Building a functional front-end application with HTML, CSS, and JavaScript.
2.  Using **Git** for version control.
3.  Pushing the code to a GitHub repository.
4.  Hosting the final product on a live, public URL.

The result is this fully functional, styled To-Do List application.

## Live Demo

You can view and interact with the live project here:
**[https://its-kuntal.github.io/](https://its-kuntal.github.io/)**

## Screenshot

<img width="1919" height="877" alt="Screenshot 2025-08-05 135953" src="https://github.com/user-attachments/assets/3067e9fc-2192-4873-91d7-5908f25a1a18" />

## Features

This application includes the following functionalities, built with vanilla JavaScript:

-   **Add Tasks:** Enter a task in the input field and add it to the list by clicking the "Add" button or pressing the `Enter` key.
-   **Mark as Complete:** Click on any task in the list to toggle its completion status, which is indicated by a line-through text style.
-   **Remove Tasks:** Click the "Remove" button next to a task to permanently delete it from the list.

*Note: This application does not use a database or local storage, so tasks will be reset if the page is refreshed.*

## Technologies & Concepts

This project demonstrates a solid understanding of core web technologies and modern development practices.

-   **Languages:**
    -   HTML5
    -   CSS3
    -   JavaScript (Vanilla, ES6+)

-   **Key JavaScript Concepts:**
    -   **DOM Manipulation:** Dynamically creating, appending, and removing list items based on user input.
    -   **Event Handling:** Listening for user events like clicks and keypresses to trigger application logic.
    -   **Event Delegation:** Using a single event listener on the parent task list to efficiently manage events for all child items.

-   **Deployment Workflow:**
    -   **Version Control:** Source code managed with **Git**.
    -   **Hosting:** Deployed as a static site on **GitHub Pages**.

## How to Run Locally

To get a local copy up and running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/its-kuntal/its-kuntal.github.io.git](https://github.com/its-kuntal/its-kuntal.github.io.git)
    ```
    2.  **Navigate to the project directory:**
    ```bash
    cd its-kuntal.github.io
    ```

3.  **Open the `index.html` file in your web browser.**
    For the best experience, use a tool like the **Live Server** extension in Visual Studio Code.
