const { Comment } = require("../models");

const commentData = [
  {
    comment: "nice post",
    user_id: 1,
    post_id: 2,
  },
  {
    comment: "very cool",
    user_id: 2,
    post_id: 3,
  },
  {
    comment: "congrats",
    user_id: 3,
    post_id: 4,
  },
  {
    comment: "wow",
    user_id: 4,
    post_id: 5,
  },
  {
    comment: "sick",
    user_id: 6,
    post_id: 7,
  },
];

const seedsComment = () => Comment.bulkCreate(commentData);

module.exports = seedsComment;
