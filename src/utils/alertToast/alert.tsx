import React from 'react';
import { createRoot } from 'react-dom/client';
import Toast from './toast';

// Declare a variable to hold the root instance for the toast container
let toastRoot: any;

// Function to display an alert using the Toast component
export const showAlert = (type: number, message: string = "Something went wrong!") => {
  // Check if a toast root already exists; if not, create one
  if (!toastRoot) {
    const toastContainer = document.createElement('div'); // Create a new div element for the toast container
    document.body.appendChild(toastContainer); // Append the container to the document body
    toastRoot = createRoot(toastContainer); // Initialize a root for rendering React components
  }

  // Render the Toast component with the given type and message
  toastRoot.render(<Toast type={type} message={message} />);

  // Automatically unmount and remove the toast after 3 seconds
  setTimeout(() => {
    toastRoot?.unmount(); // Unmount the React component
    toastRoot = null; // Reset the root instance for future alerts
  }, 3000); // 3-second duration for the alert
};

