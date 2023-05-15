const router = require("express").Router();
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comments-routes");
router.use("/Users", userRoutes);
router.use("/Posts", postRoutes);
router.use("/Comments", commentRoutes);

module.exports = router;
