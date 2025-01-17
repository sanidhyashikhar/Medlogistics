import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function User() {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
    address: "123 Main Street, Suite 100, Springfield, USA",
    dateOfBirth: "January 1, 1990",
    joinedOn: "March 15, 2020",
    role: "Administrator",
  });

  const [formValues, setFormValues] = useState({ ...userDetails });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleUpdateDetails = () => {
    setUserDetails({ ...formValues });
    setIsEditing(false);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  };

  const contentStyle = {
    flex: 1,
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  };

  const profileSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  };

  const profilePicStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "20px",
  };

  const profileImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const detailSectionStyle = {
    marginBottom: "20px",
  };

  const detailLabelStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#555",
  };

  const detailValueStyle = {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "10px",
  };

  const buttonStyle = {
    display: "block",
    width: "200px",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={headerStyle}>User Profile</h1>

        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formValues.dateOfBirth}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <button
              style={buttonStyle}
              onClick={handleUpdateDetails}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Update Details
            </button>
          </>
        ) : (
          <>
            <div style={profileSectionStyle}>
              <div style={profilePicStyle}>
                <img
                  src="/images/profile pic.jpg"
                  alt="Profile"
                  style={profileImageStyle}
                />
              </div>
              <h2 style={{ marginBottom: "10px" }}>{userDetails.name}</h2>
              <p style={{ fontSize: "1rem", color: "#555" }}>
                {userDetails.role}
              </p>
            </div>
            {Object.keys(userDetails).map((key) => (
              <div style={detailSectionStyle} key={key}>
                <div style={detailLabelStyle}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </div>
                <div style={detailValueStyle}>{userDetails[key]}</div>
              </div>
            ))}
            <button
              style={buttonStyle}
              onClick={() => setIsEditing(true)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default User;
