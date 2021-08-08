const router = require("express").Router();
const membersController = require("../../controllers/membersController");

router.route("/").get(membersController.findAll).post(membersController.create);

router.route("/:id").get(membersController.findById).put(membersController.update).delete(membersController.remove);

module.exports = router;