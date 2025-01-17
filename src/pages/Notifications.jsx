import Header from "./Header";
import Footer from "./Footer";
import {
  latestInstagramPosts,
  latestFacebookPosts,
  latestSnapchatStories,
  latestYoutubeVideos,
  latestXTweets,
  latestLinkedinArticles,
} from "./latestPostData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSnapchat,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Notifications() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensures full viewport height
    backgroundColor: "#f9f9f9",
  };

  const contentStyle = {
    flex: 1, // Fills the available space between header and footer
    width: "70%", // Covers 70% of the page width
    margin: "2rem auto", // Centered with top/bottom margin
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

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#007bff",
  };

  const postContainerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const postImageStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "5px",
    objectFit: "cover",
    marginRight: "15px",
  };

  const postContentStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const postTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  };

  const postDescriptionStyle = {
    fontSize: "1rem",
    color: "#555",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#555",
  };

  const groupedPosts = [
    {
      title: "Instagram",
      icon: faInstagram,
      posts: latestInstagramPosts,
    },
    {
      title: "Facebook",
      icon: faFacebook,
      posts: latestFacebookPosts,
    },
    {
      title: "Snapchat",
      icon: faSnapchat,
      posts: latestSnapchatStories,
    },
    {
      title: "YouTube",
      icon: faYoutube,
      posts: latestYoutubeVideos,
    },
    {
      title: "X",
      icon: faTwitter,
      posts: latestXTweets,
    },
    {
      title: "LinkedIn",
      icon: faLinkedin,
      posts: latestLinkedinArticles,
    },
  ];

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={headerStyle}>Notifications</h1>
        {groupedPosts.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 style={sectionTitleStyle}>
              <FontAwesomeIcon icon={group.icon} style={iconStyle} />
              {group.title}
            </h2>
            {group.posts.map((post, postIndex) => (
              <div key={postIndex} style={postContainerStyle}>
                {post.image || post.thumbnail ? (
                  <img
                    src={post.image || post.thumbnail}
                    alt={`${group.title} Post`}
                    style={postImageStyle}
                  />
                ) : null}
                <div style={postContentStyle}>
                  {post.title && <div style={postTitleStyle}>{post.title}</div>}
                  {post.caption && (
                    <div style={postDescriptionStyle}>{post.caption}</div>
                  )}
                  {post.text && (
                    <div style={postDescriptionStyle}>{post.text}</div>
                  )}
                  {post.content && (
                    <div style={postDescriptionStyle}>{post.content}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Notifications;
