import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(authenticateRoutes)
router.use("/user", usersRoutes);

export { router }