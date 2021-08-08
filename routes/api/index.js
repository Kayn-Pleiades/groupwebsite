const router = require("express").Router();
const memberRoutes = require("./members");

router.use("/members", memberRoutes);

module.exports = router;
