import { Router } from "express";
import { createUserController } from "../controller/createUserController";

const router = Router();

router.post("/users", createUserController);

export default router;
