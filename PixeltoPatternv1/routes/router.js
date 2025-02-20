import { Router } from "express";
import controller from "../controllers/controller.js";

const router = Router();

router.get('/home', controller.getHome);
router.get('/canvasSubmit', controller.getCanvas);

export default router;