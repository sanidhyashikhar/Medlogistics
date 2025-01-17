import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Settings() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    password: "password123",
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentDetails((prevDetails) => ({
      ...prevDetails,
      username: formData.username || prevDetails.username,
      email: formData.email || prevDetails.email,
      password: formData.password || prevDetails.password,
    }));
    setFormData({ username: "", email: "", password: "" });
    alert("Details Updated!");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  };

  const contentStyle = {
    flex: 1,
    width: "70%", // Cover 70% of the page width
    margin: "2rem auto", // Top and bottom margin as 2rem, center align horizontally
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column", // Ensure content flows in a column
  };

  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  };

  const sectionStyle = {
    marginBottom: "30px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
    fontWeight: "500",
    color: "#555",
  };

  const inputStyle = {
    width: "99%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    marginBottom: "10px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  };

  const passwordContainerStyle = {
    position: "relative",
  };

  const eyeIconStyle = {
    position: "absolute",
    right: "10px",
    top: "10px",
    cursor: "pointer",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={headerStyle}>Settings</h1>

        {/* Current Details */}
        <div>
          <h2 style={{ marginBottom: "20px" }}>Current Details</h2>
          <div style={sectionStyle}>
            <strong>Username:</strong> {currentDetails.username}
          </div>
          <div style={sectionStyle}>
            <strong>Email:</strong> {currentDetails.email}
          </div>
          <div style={sectionStyle}>
            <strong>Password:</strong>
            <div style={passwordContainerStyle}>
              <input
                type={currentPasswordVisible ? "text" : "password"}
                value={currentDetails.password}
                readOnly
                style={{ ...inputStyle, marginBottom: 0 }}
              />
              <FontAwesomeIcon
                icon={currentPasswordVisible ? faEyeSlash : faEye}
                style={eyeIconStyle}
                onClick={toggleCurrentPasswordVisibility}
              />
            </div>
          </div>
        </div>

        {/* Update Form */}
        <form onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: "20px" }}>Update Your Details</h2>
          <div style={sectionStyle}>
            <label style={labelStyle} htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter new username"
              style={inputStyle}
            />
          </div>
          <div style={sectionStyle}>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter new email"
              style={inputStyle}
            />
          </div>
          <div style={sectionStyle}>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>
            <div style={passwordContainerStyle}>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
                style={{ ...inputStyle, marginBottom: 0 }}
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                style={eyeIconStyle}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
