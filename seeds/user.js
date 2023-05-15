const { User } = require("../models");

const userData = [
  {
    username: "TheZuck",
    email: "TheZuck69@gmail.com",
    password: "IRunFb69",
  },
  {
    username: "user2",
    email: "user2@gmail.com",
    password: "IRunFb69",
  },
  {
    username: "user3",
    email: "user3@gmail.com",
    password: "IRunFb69",
  },
  {
    username: "user4",
    email: "user4@gmail.com",
    password: "IRunFb69",
  },
  {
    username: "user5",
    email: "user5@gmail.com",
    password: "IRunFb",
  },
  {
    username: "user6",
    email: "user6@gmail.com",
    password: "IRunFb",
  },
  {
    username: "user7",
    email: "user7@gmail.com",
    password: "IRunFb",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
