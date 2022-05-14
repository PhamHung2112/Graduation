const router = require("express").Router();
const TypeService = require("../services/TypeService");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/get-brand/:id", TypeService.getBrand);

router.get("/all", TypeService.getAll);

router.get("/:id", TypeService.get);

router.post("/create", TypeService.create);

router.post("/update", TypeService.update);

router.delete("/delete/:id", TypeService.delete);

module.exports = router;
