import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import { Amplify } from "aws-amplify";
// import awsconfig from "./aws-exports"; // Make sure the path to aws-exports.js is correct

// import { UserProvider } from "./pages/UserContext";
// // Importing Tailwind CSS
// // Main Sass file for global styles
// Amplify.configure(awsconfig);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
    <App />
    {/* </UserProvider> */}
  </StrictMode>
);
