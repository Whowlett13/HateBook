const { Post } = require("../models");

const postData = [
  {
    title: "my first post",
    content: "",
    user_id: 1,
  },
  {
    title: "my second post",
    content: "",
    user_id: 2,
  },
  {
    title: "my third post",
    content: "",
    user_id: 3,
  },
  {
    title: "my fourth post",
    content: "",
    user_id: 4,
  },
  {
    title: "my fifth post",
    content: "",
    user_id: 5,
  },
  {
    title: "my sixth post",
    content: "",
    user_id: 6,
  },
  {
    title: "my seventh post",
    content: "",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
