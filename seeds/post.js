const { Post } = require("../models");

const postData = [
  {
    title: "Top 10 Must-Have Gadgets for Tech Enthusiasts",
    content:
      "This post can feature a curated list of the latest and coolest gadgets that tech enthusiasts should consider adding to their collection.",
    user_id: 1,
  },
  {
    title: "Demystifying Artificial Intelligence: A Beginner's Guide",
    content:
      "This post can provide an introduction to artificial intelligence (AI) concepts, applications, and their impact on various industries.",
    user_id: 2,
  },
  {
    title: "5 Essential Cybersecurity Tips to Protect Your Digital Life",
    content:
      "This post can offer practical tips and best practices to help readers safeguard their online presence, including password management, two-factor authentication, and secure browsing.",
    user_id: 3,
  },
  {
    title: "The Future of Virtual Reality: Exploring New Frontiers",
    content:
      "This post can explore the latest advancements in virtual reality (VR) technology, including emerging trends, VR gaming, and potential applications beyond gaming.",
    user_id: 4,
  },
  {
    title: "The Rise of 5G: Revolutionizing Connectivity",
    content:
      "This post can discuss the transformative potential of 5G technology, its impact on industries such as healthcare and autonomous vehicles, and its future prospects.",
    user_id: 5,
  },
  {
    title: "A Guide to Blockchain Technology and Cryptocurrencies",
    content:
      "This post can provide an overview of blockchain technology, explain cryptocurrencies like Bitcoin and Ethereum, and discuss their potential implications for finance and beyond.",
    user_id: 6,
  },
  {
    title: "How to Optimize Your Website for Better Search Engine Rankings",
    content:
      "This post can offer tips and techniques to improve website visibility in search engine results, covering topics such as SEO (search engine optimization), keyword research, and content optimization.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
