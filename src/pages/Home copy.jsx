import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import TopPosts from "./TopPosts"; // Import TopPosts
import LatestPosts from "./LatestPosts"; // Import LatestPosts
import Posts from "./Posts";

const Home = () => {
  const [activeSection, setActiveSection] = useState("Instagram");

  const containerStyle = {
    display: "flex",
    height: "100vh", // Full viewport height
    width: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#f4f4f9", // Light background for the entire layout
  };

  const contentWrapperStyle = {
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
  };

  const mainContentStyle = {
    display: "flex",
    flex: 1,
    padding: "20px",
    gap: "20px",
    overflowY: "auto",
  };

  const leftContentStyle = {
    flex: 1.5, // Left side takes more space
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Adjust height to data
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    height: "min-content", // Adjust to data height
  };

  const rightContentStyle = {
    flex: 1, // Right side takes less space
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Adjust height to data
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    height: "min-content", // Adjust to data height
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <div style={contentWrapperStyle}>
        {/* Header */}
        <Header />

        {/* Charts and Posts */}
        <div style={mainContentStyle}>
          {/* Left Content: Charts */}
          <div style={leftContentStyle}>
            <Dashboard activeSection={activeSection} />
          </div>

          {/* Right Content: Posts */}
          <div style={rightContentStyle}>
            <Posts activeSection={activeSection} />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
