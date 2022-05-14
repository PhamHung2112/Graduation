const router = require("express").Router();
const VoucherService = require("../services/VoucherService");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/all", VoucherService.getAll);

router.get("/:id", VoucherService.get);

router.post("/create", VoucherService.create);

router.post("/update", VoucherService.update);

router.delete("/delete/:id", VoucherService.delete);

module.exports = router;

//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11YWRvbmd5ZXV0aHVzb25nM3hAZ21haWwiLCJpYXQiOjE2NTA4MTI1NzQsImV4cCI6MTY1MTQxNzM3NH0.XdIpLET4XGeggYtc9iQx9AjbfsZt2uhXPMCAqluX70M
