import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import TopPosts from "./TopPosts"; // Import TopPosts
import LatestPosts from "./LatestPosts"; // Import LatestPosts

const Home = () => {
  const [activeSection, setActiveSection] = useState("Instagram");

  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Sidebar: 20% Width */}
      <div className="w-[15%] h-screen bg-gray-800 text-white">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* Main Content: 80% Width */}
      <div className="w-[85%] flex flex-col overflow-auto">
        {/* Header */}
        <div className="w-full h-auto bg-white shadow-md">
          <Header />
        </div>

        {/* Dashboard and TopPosts Section */}
        <div className="flex gap-8 w-full p-6">
          {/* Left 60% for Dashboard */}
          <div className="w-3/5 p-6 bg-gray-50 rounded-lg shadow-lg">
            <Dashboard activeSection={activeSection} />
          </div>

          {/* Right 40% for Top Posts */}
          <div className="w-2/5 p-6 bg-white rounded-lg shadow-lg">
            <TopPosts activeSection={activeSection} />
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
          <LatestPosts activeSection={activeSection} />
        </div>

        {/* Footer Section (80% width) */}
        <div className="w-full bg-white shadow-md">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
