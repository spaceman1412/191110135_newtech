var express = require("express");
var router = express.Router();
const controller = require("../controllers/post");

router.get("/", controller.getIndexPage);

router.get("/post/:id", controller.getPostApi);

router.get("/post/:id/update", controller.getPostEditPage);

router.post("/post/:id/update", controller.getPostUpdateApi);

router.post("/post/:id/comment", controller.postUpdateCommentApi);

router.post("/post/:id/delete", controller.deletePostApi);

router.post("/post", controller.addPostApi);

router.get("/new-post", controller.addPostPage);

module.exports = router;
