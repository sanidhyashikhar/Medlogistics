import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSnapchat,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { name: "Instagram", icon: faInstagram },
    { name: "Facebook", icon: faFacebook },
    { name: "SnapChat", icon: faSnapchat },
    { name: "YouTube", icon: faYoutube },
    { name: "X", icon: faTwitter },
    { name: "LinkedIn", icon: faLinkedin },
  ];

  return (
    <div className=" h-full bg-[#22333b] text-white flex flex-col p-6">
      <h2 className="text-2xl font-semibold mb-8">MedLogistics</h2>
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 ease-in-out ${
              activeSection === section.name
                ? "bg-green-600 hover:bg-green-700"
                : "bg-[#3a506b] hover:bg-[#2c3e50]"
            }`}
            onClick={() => setActiveSection(section.name)}
          >
            <FontAwesomeIcon icon={section.icon} className="text-xl" />
            {section.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
