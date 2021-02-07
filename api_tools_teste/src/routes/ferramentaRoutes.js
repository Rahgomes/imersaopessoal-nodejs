import { Router } from "express";
import ferramentaController from "../controllers/FerramentaController";

const router = new Router();

router.get("/", ferramentaController.index);
router.get("/:id", ferramentaController.show);
router.post("/", ferramentaController.store);
router.put("/:id", ferramentaController.update);
router.delete("/:id", ferramentaController.delete);

export default router;
