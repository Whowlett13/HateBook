const seedUsers = require("./user");
const seedPosts = require("./post");
const seedsComments = require("./comment");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedsComments();
  process.exit(0);
};

seedAll();
