const router = require("express").Router();
const NewsfeedRoutes = require("./newsFeed");
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
router.use("/newsFeed", newsFeedRoutes);
router.use("/api", apiRoutes);
router.use((req, res) => {
  res.status(404).end();
});
module.exports = router;
