# ⚡ Taskify / To-Do App

A sleek, lightweight, and modular **To-Do List application** built entirely with vanilla JavaScript. This project features a custom client-side router, dynamic component rendering, and isolated CSS loading for a fast, Single-Page Application (SPA) experience.

---

## 🚀 Features

*   **Single Page Application (SPA):** Seamless page transitions without full-reload, powered by a custom client-side JavaScript router.
*   **Modular Architecture:** Built using a clean component-based structure (Navbar, Pages, Utilities) for high maintainability.
*   **Dynamic Styling:** Utilizes a dedicated CSS loader utility to inject page-specific styles on demand.
*   **Local Data Mocking:** Prepared for local data persistence and state management via a central `data.json` file and custom API handler.

---

## 📂 Project Structure

```text
Js_ptoject_01_to-do-list/
├── .vscode/                 # Editor configuration (Live Server setup)
├── data/                    # App data storage
│   └── data.json            # Mock database for tasks
├── public/                  # Static assets (images, icons, logos)
├── src/
│   ├── components/          # Reusable UI elements
│   │   └── navbar.js        # Global navigation bar component
│   ├── css/
│   │   └── style.css        # Global and component styles
│   └── js/
│       ├── pages/           # View controllers
│       │   ├── Home.js      # Dashboard & To-Do task management
│       │   └── about.js     # About page view
│       ├── util/            # Helper modules
│       │   ├── api.js       # Data fetching & handling
│       │   └── cssLoader.js # Dynamic style sheet injector
│       ├── router.js        # Vanilla JS client-side router
│       └── app.js           # Application entry point
├── index.html               # Main HTML wrapper
└── setup.ps1                # Automated environment setup script
