import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider, useUser } from "./pages/UserContext";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import User from "./pages/User";
import LoginSignUp from "./pages/LoginSignUp";
//import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    // <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
    // </UserProvider>
  );
}

export default App;
