
# React Movie App

A modern movie search and discovery web application built with React and Vite. This project demonstrates best practices in React development, including component-based architecture, custom hooks, and integration with external APIs.

## Features

- **Movie Search:** Search for movies using a responsive search bar with debounced input.
- **Movie Cards:** Display movie details including title, poster, rating, and more.
- **Loading Spinner:** Visual feedback during data fetching.
- **Error Handling:** Graceful handling of missing data and API errors.
- **Responsive Design:** Optimized for desktop and mobile devices.

## Technologies Used

- **React:** UI library for building interactive interfaces.
- **Vite:** Fast development server and build tool.
- **Appwrite:** Backend-as-a-Service for API integration (see `src/appwrite.js`).
- **Custom Hooks:** Includes a custom `useDebounce` hook for optimized search input.
- **CSS Modules:** Styling via `App.css` and `index.css`.
- **SVG & PNG Assets:** Used for icons and images in the UI.
- **ESLint:** Code linting for consistent style and error prevention.

## Project Structure

```
react_course_jsmastery/
├── public/           # Static assets (images, icons)
├── src/
│   ├── assets/       # Additional assets
│   ├── components/   # Reusable React components
│   ├── hooks/        # Custom React hooks
│   ├── App.jsx       # Main app component
│   ├── appwrite.js   # Appwrite API integration
│   ├── main.jsx      # Entry point
│   ├── App.css       # App styles
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Project metadata and dependencies
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint configuration
└── README.md         # Project documentation
```

## Getting Started

1. **Install dependencies:**
	```fish
	npm install
	```
2. **Start the development server:**
	```fish
	npm run dev
	```
3. **Open in browser:**
	Visit `http://localhost:5173` (default Vite port).

## Environment Variables

Create a `.env.local` file for API keys and sensitive configuration. See `src/appwrite.js` for required variables.

## Credits

This project is inspired by the JavaScript Mastery React course, and was done only for learning purposes.
