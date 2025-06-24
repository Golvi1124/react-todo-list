# React To-Do List

A simple to-do list application built with **React** and **Vite**. It showcases React hooks, context, and client-side persistence via `localStorage`.

## Features

- Add, edit and delete tasks
- Mark tasks as completed
- Sort tasks by date or alphabetically
- Hide completed tasks
- Toggle between light and dark themes
- "Add to Cart" button that demonstrates shared state via React context
- Data persists across refreshes using `localStorage`

## Project Structure

- `src/App.jsx` – root component that manages application state
- `src/components/` – individual components (header, list, items, cart)
- `src/ThemeContext.jsx` – light/dark theme context provider
- `src/global.css` – global styles shared across components
- `index.html` – entry HTML file for Vite
