const instagramMetrics = [
  {
    metric: "Total Followers",
    value: 154300,
  },
  {
    metric: "Engagement Rate",
    value: "8.2%",
  },
  {
    metric: "Total Posts",
    value: 120,
  },
  {
    metric: "Likes Per Post",
    value: 5200,
  },
  {
    metric: "Comments Per Post",
    value: 430,
  },
  {
    metric: "Top Hashtag Performance",
    breakdown: [
      { hashtag: "#healthyliving", mentions: 6500 },
      { hashtag: "#fitness", mentions: 5200 },
      { hashtag: "#nutrition", mentions: 3730 },
    ],
  },
];

const facebookMetrics = [
  {
    metric: "Page Likes",
    value: 450000,
  },
  {
    metric: "Average Engagement Per Post",
    value: "6.5%",
  },
  {
    metric: "Total Posts",
    value: 85,
  },
  {
    metric: "Shares Per Post",
    value: 780,
  },
  {
    metric: "Reactions Per Post",
    value: 3100,
  },
  {
    metric: "Top Video Performance",
    details: {
      views: 100000,
      likes: 12500,
      shares: 890,
    },
  },
];

const snapchatMetrics = [
  {
    metric: "Total Subscribers",
    value: 120000,
  },
  {
    metric: "Average Story Views",
    value: 85000,
  },
  {
    metric: "Engagement Rate",
    value: "4.3%",
  },
  {
    metric: "Total Stories Posted",
    value: 300,
  },
  {
    metric: "Swipe-Up Rate",
    value: "1.2%",
  },
  {
    metric: "Top Story Performance",
    details: {
      views: 200000,
      interactions: 1500,
    },
  },
];

const youtubeMetrics = [
  {
    metric: "Subscribers",
    value: 920000,
  },
  {
    metric: "Total Views",
    value: 12400000, // 12.4 million
  },
  {
    metric: "Average Watch Time (minutes)",
    value: 8.5,
  },
  {
    metric: "Engagement Rate",
    value: "3.8%",
  },
  {
    metric: "Top Video Performance",
    details: {
      title: "Healthy Habits for Life",
      views: 2500000,
      likes: 150000,
      comments: 5000,
    },
  },
];

const xMetrics = [
  {
    metric: "Followers",
    value: 540000,
  },
  {
    metric: "Total Tweets",
    value: 650,
  },
  {
    metric: "Average Retweets Per Post",
    value: 320,
  },
  {
    metric: "Likes Per Tweet",
    value: 2100,
  },
  {
    metric: "Hashtag Performance",
    breakdown: [
      { hashtag: "#wellness", mentions: 8500 },
      { hashtag: "#active", mentions: 5200 },
      { hashtag: "#mindfulness", mentions: 3700 },
    ],
  },
];

const linkedinMetrics = [
  {
    metric: "Total Followers",
    value: 340000,
  },
  {
    metric: "Engagement Rate Per Post",
    value: "5.2%",
  },
  {
    metric: "Total Articles Published",
    value: 150,
  },
  {
    metric: "Average Comments Per Article",
    value: 75,
  },
  {
    metric: "Top Article Performance",
    details: {
      title: "Workplace Wellness: A Guide",
      views: 50000,
      likes: 2000,
      shares: 300,
    },
  },
];

export {
  instagramMetrics,
  facebookMetrics,
  snapchatMetrics,
  youtubeMetrics,
  xMetrics,
  linkedinMetrics,
};
