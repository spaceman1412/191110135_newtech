var express = require("express");
var router = express.Router();
var controller = require("../controllers/student");

router.get("/", controller.GetAllStudent);

router.get("/:id", controller.GetStudentById);

router.post("/", controller.CreateNewStudent);

router.get("/message/:id", controller.GeStudentMessage);

module.exports = router;
