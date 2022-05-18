const router = require("express").Router();
const CommentService = require("../services/CommentService");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/all", CommentService.getAll);

router.get("/:id", authMiddleware, CommentService.get);

router.post("/create", authMiddleware, CommentService.create);

router.post("/update", authMiddleware, CommentService.update);

router.delete("/delete/:id", authMiddleware, CommentService.delete);

module.exports = router;
