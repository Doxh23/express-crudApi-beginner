let express = require("express");
let router = express.Router();
let {
  getAllTask,
  getTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controller/getAllTask");
router.route("/").post(createTask).get(getAllTask)
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
