import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express"
import database from "./database"
import "./shared/container"

database()

import { router } from "./routes";
import swaggerFile from "./swagger.json"
import { createConnection } from "typeorm";

createConnection();
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(3333, () => console.log("Server is running"));