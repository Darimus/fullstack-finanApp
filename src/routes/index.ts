import { Router } from "express";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/user", usersRoutes);

export { router }
