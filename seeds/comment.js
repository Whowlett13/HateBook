const { Comment } = require("../models");

const commentData = [
  {
    comment:
      "I've been eyeing that gadget you mentioned in the post. It looks amazing! Can't wait to get my hands on it.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment:
      "Great beginner's guide to AI! It's such a fascinating field, and this post explains the concepts in a simple yet comprehensive way.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment:
      "Thanks for sharing those cybersecurity tips. It's crucial for everyone to stay vigilant and protect their digital lives. I'll be implementing these tips right away!",
    user_id: 3,
    post_id: 4,
  },
  {
    comment:
      "Virtual reality is the future! I'm excited to see how it evolves and impacts various industries. Any recommendations for must-try VR games?",
    user_id: 4,
    post_id: 5,
  },
  {
    comment:
      "Blockchain and cryptocurrencies have immense potential. It's interesting to see how they're disrupting traditional finance. Can you delve deeper into decentralized finance in a future post?",
    user_id: 6,
    post_id: 7,
  },
];

const seedsComment = () => Comment.bulkCreate(commentData);

module.exports = seedsComment;
