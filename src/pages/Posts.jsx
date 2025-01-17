import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSnapchat,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Import your data for posts
import {
  topInstagramPosts,
  topFacebookPosts,
  topSnapchatStories,
  topYoutubeVideos,
  topXTweets,
  topLinkedinArticles,
} from "./topPostData";

import {
  latestInstagramPosts,
  latestFacebookPosts,
  latestSnapchatStories,
  latestYoutubeVideos,
  latestXTweets,
  latestLinkedinArticles,
} from "./latestPostData";

const Posts = ({ activeSection = "Instagram" }) => {
  const postsMap = {
    Instagram: {
      icon: faInstagram,
      topPosts: topInstagramPosts,
      latestPosts: latestInstagramPosts,
    },
    Facebook: {
      icon: faFacebook,
      topPosts: topFacebookPosts,
      latestPosts: latestFacebookPosts,
    },
    SnapChat: {
      icon: faSnapchat,
      topPosts: topSnapchatStories,
      latestPosts: latestSnapchatStories,
    },
    YouTube: {
      icon: faYoutube,
      topPosts: topYoutubeVideos,
      latestPosts: latestYoutubeVideos,
    },
    X: {
      icon: faTwitter,
      topPosts: topXTweets,
      latestPosts: latestXTweets,
    },
    LinkedIn: {
      icon: faLinkedin,
      topPosts: topLinkedinArticles,
      latestPosts: latestLinkedinArticles,
    },
  };

  const activePosts = postsMap[activeSection];

  if (!activePosts) {
    return <p>No posts available for {activeSection}</p>;
  }

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
          icon={activePosts.icon}
          size="lg"
          className="ml-auto text-gray-600"
        />
      </div>
      {activeSection === "Instagram" && (
        <>
          <img
            src={post.image}
            alt="Instagram Post"
            className="w-full h-[250px] object-cover rounded-lg mb-3"
          />
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
          <img
            src={post.image}
            alt="SnapChat Story"
            className="w-full h-[250px] object-cover rounded-lg mb-3"
          />
          <p className="text-sm text-gray-700">{post.text}</p>
          <p className="text-xs text-gray-600">Duration: {post.duration}</p>
        </>
      )}
      {activeSection === "YouTube" && (
        <>
          <img
            src={post.thumbnail}
            alt="YouTube Video"
            className="w-full h-[250px] object-cover rounded-lg mb-3"
          />
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
    <div className="px-6 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Top Posts of {activeSection}
      </h2>
      <div className="space-y-6">
        {activePosts.topPosts.map((post) => renderPost(post))}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-8">
        Latest Posts of {activeSection}
      </h2>
      <div className="space-y-6">
        {activePosts.latestPosts.map((post) => renderPost(post))}
      </div>
    </div>
  );
};

export default Posts;
