const { Comment } = require("../models");

const commentData = [
  {
    comment: "hello",
    user_id: 1,
    post_id: 2,
  },
  {
    comment: "hello",
    user_id: 2,
    post_id: 3,
  },
  {
    comment: "hello",
    user_id: 3,
    post_id: 4,
  },
  {
    comment: "hello",
    user_id: 4,
    post_id: 5,
  },
  {
    comment: "hello",
    user_id: 6,
    post_id: 7,
  },
];

const seedsComment = () => Comment.bulkCreate(commentData);

module.exports = seedsComment;
