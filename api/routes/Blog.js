const router = require("express").Router();
const BlogService = require("../services/BlogService");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/all", BlogService.getAll);

router.get("/:id", BlogService.get);

router.post("/create", BlogService.create);

router.post("/update", BlogService.update);

router.delete("/delete/:id", BlogService.delete);
module.exports = router;
