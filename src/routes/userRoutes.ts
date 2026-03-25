import { Router } from "express";
import { createUserController } from "../controller/createUserController";
import { listUserController } from "../controller/listUserController";

const router = Router();

router.post("/users", createUserController);
router.get("/users", listUserController)

export default router;
