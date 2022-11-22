import { Router } from 'express';
import { listUsersController } from '../modules/users/useCases/listUsers';
import { CreateUsersController } from '../modules/users/useCases/createUsers/CreateUsersController';

const usersRoutes = Router();

const createUsersController = new CreateUsersController();

usersRoutes.post("/", createUsersController.handle);

usersRoutes.get("/", (request, response) => {
  console.log("teste")
  return listUsersController.handle(request, response);
})

export { usersRoutes };