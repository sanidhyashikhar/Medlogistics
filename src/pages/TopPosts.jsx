import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSnapchat,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Importing the Top Posts Data directly into this file
import {
  topInstagramPosts,
  topFacebookPosts,
  topSnapchatStories,
  topYoutubeVideos,
  topXTweets,
  topLinkedinArticles,
} from "./topPostData"; // Assuming topPostData is where this data is stored

const TopPosts = ({ activeSection }) => {
  // Defining the icons associated with each activeSection
  const icons = {
    Instagram: faInstagram,
    Facebook: faFacebook,
    SnapChat: faSnapchat,
    YouTube: faYoutube,
    X: faTwitter,
    LinkedIn: faLinkedin,
  };

  // Mapping the section to the respective topPosts data
  const postsMap = {
    Instagram: topInstagramPosts,
    Facebook: topFacebookPosts,
    SnapChat: topSnapchatStories,
    YouTube: topYoutubeVideos,
    X: topXTweets,
    LinkedIn: topLinkedinArticles,
  };

  // Getting the top posts for the active section
  const topPosts = postsMap[activeSection] || [];

  // Function to render each post
  const renderPost = (post) => (
    <div
      key={post.id}
      className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow relative"
    >
      <div className="flex items-center mb-4">
        <img
          src="/images/profile pic.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <FontAwesomeIcon
          icon={icons[activeSection]}
          size="lg"
          className="ml-auto text-gray-600"
        />
      </div>
      {activeSection === "Instagram" && (
        <>
          <div className="w-full h-[250px] overflow-auto mb-3">
            <img
              src={post.image}
              alt="Instagram Post"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-gray-700">{post.caption}</p>
          <p className="text-xs text-gray-600">
            ❤️ {post.likes} | 💬 {post.comments}
          </p>
        </>
      )}
      {activeSection === "Facebook" && (
        <>
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <p className="text-sm text-gray-700">{post.content}</p>
          <p className="text-xs text-gray-600">
            👍 {post.likes} | 🔄 {post.shares}
          </p>
        </>
      )}
      {activeSection === "SnapChat" && (
        <>
          <div className="w-full h-[250px] overflow-auto mb-3">
            <img
              src={post.image}
              alt="SnapChat Story"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-gray-700">{post.text}</p>
          <p className="text-xs text-gray-600">Duration: {post.duration}</p>
        </>
      )}
      {activeSection === "YouTube" && (
        <>
          <div className="w-full h-[250px] overflow-auto mb-3">
            <img
              src={post.thumbnail}
              alt="YouTube Video"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <p className="text-xs text-gray-600">
            {post.views} views | Duration: {post.duration}
          </p>
        </>
      )}
      {activeSection === "X" && (
        <>
          <p className="text-sm text-gray-700">{post.text}</p>
          <p className="text-xs text-gray-600">
            ❤️ {post.likes} | 🔄 {post.retweets}
          </p>
        </>
      )}
      {activeSection === "LinkedIn" && (
        <>
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <p className="text-sm text-gray-700">{post.content}</p>
          <p className="text-xs text-gray-600">
            👍 {post.likes} | 🔄 {post.shares}
          </p>
        </>
      )}
    </div>
  );

  return (
    <div className="space-y-6">{topPosts.map((post) => renderPost(post))}</div>
  );
};

export default TopPosts;
