import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function LoginSignUp() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // For redirecting to /home

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Sign Up Data:", {
        username,
        email,
        password,
        confirmPassword,
      });
    } else {
      console.log("Login Data:", { email, password });
    }

    // Redirect to /home after form submission
    navigate("/home");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: "linear-gradient(to right, #5f7f9c, #f4e9cd, #a7c957)", // Custom gradient
      }}
    >
      <div
        className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg"
        style={{
          borderRadius: "5rem", // Custom border radius for main container
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/medlogistics-high-resolution-logo-transparent.png"
            alt="Logo"
            className="h-40"
          />
        </div>

        <h2 className="text-4xl font-extrabold text-center text-gray-700">
          {isSignup ? "Create an Account" : "Login to Your Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignup && (
            <div className="relative flex items-center">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 text-[#4a7c59]" // Icon color: #4a7c59
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-10 py-2 text-gray-700 border border-[#4a7c59] rounded-[8.5rem] focus:ring-indigo-500 focus:border-black"
                placeholder="Enter your username"
                required
              />
            </div>
          )}

          <div className="relative flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 text-[#4a7c59]" // Icon color: #4a7c59
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-2 text-gray-700 border border-[#4a7c59] rounded-[8.5rem] focus:ring-indigo-500 focus:border-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative flex items-center">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 text-[#4a7c59]" // Icon color: #4a7c59
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-2 text-gray-700 border border-[#4a7c59] rounded-[8.5rem] focus:ring-indigo-500 focus:border-black"
              placeholder="Enter your password"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 cursor-pointer text-[#4a7c59]" // Icon color: #4a7c59
            />
          </div>

          {isSignup && (
            <div className="relative flex items-center">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 text-[#4a7c59]" // Icon color: #4a7c59
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-10 py-2 text-gray-700 border border-[#4a7c59] rounded-[8.5rem] focus:ring-indigo-500 focus:border-black"
                placeholder="Confirm your password"
                required
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 cursor-pointer text-[#4a7c59]" // Icon color: #4a7c59
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-[#4a7c59] rounded-[5rem] hover:bg-white hover:text-[#4a7c59] hover:border-[#4a7c59] border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-indigo-500 font-medium hover:text-indigo-700 transition duration-300 ease-in-out"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
