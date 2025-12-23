# GitHub Developer Explorer

A React application that lets users search for GitHub developers and explore their profiles and repositories using the GitHub REST API.

This project is built as a learning exercise focused on **React fundamentals**, especially:
- Hooks
- Props & data flow
- API consumption
- Smart (container) vs Dumb (presentational) component architecture

---

## Features

- Search GitHub users by username
- Display user profile information
- List public repositories
- Sort repositories by stars
- Loading and error handling

---

## Architecture

The project follows the **Container / Presentational (Smart / Dumb)** component pattern:

- **Containers**  
  Handle state, side effects, and business logic (API calls).

- **Presentational Components**  
  Pure UI components that receive data via props and render JSX.

---

## Project Structure

src/
├── containers/ # Smart components (state & logic)
├── components/ # Dumb UI components
├── App.jsx
└── main.jsx


---

## GitHub API

This app uses the public GitHub REST API:

- `GET /users/:username`
- `GET /users/:username/repos`

> Note: GitHub API rate limits apply. You can add a personal access token later if needed.

---

## Tech Stack

- React
- JavaScript (ES6+)
- GitHub REST API
- Vite (or CRA)

---

## Getting Started

```bash
git clone https://github.com/your-username/github-developer-explorer.git
cd github-developer-explorer
npm install
npm run dev
