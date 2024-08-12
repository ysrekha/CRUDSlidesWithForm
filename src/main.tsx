// Import React library for building user interfaces
import React from 'react';

// Import the ReactDOM library to interact with the DOM and render React components
import ReactDOM from 'react-dom/client';

// Import the main App component which will be rendered as the root component
import App from './App.tsx';

// Import Bootstrap CSS for styling, providing a set of pre-designed UI components
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom CSS for additional styles specific to this project
import './index.css';

// Create a root for the React application by selecting the DOM element with id 'root'
// The exclamation mark (!) is a TypeScript non-null assertion operator, asserting that 'root' is not null
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Render the React application into the root element
// The <React.StrictMode> component is a wrapper that helps with identifying potential problems in the application
root.render(
  <React.StrictMode>
    {/* Render the App component inside the StrictMode wrapper */}
    <App />
  </React.StrictMode>,
);
