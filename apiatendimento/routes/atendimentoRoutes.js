const express = require("express");
const router = express.Router();
const atendimentosController = require("../controllers/atendimentos");

router.get("/", atendimentosController.index);
router.get("/:id", atendimentosController.show);
router.patch("/:id", atendimentosController.update);
router.post("/", atendimentosController.store);
router.delete("/:id", atendimentosController.delete);

module.exports = router;
