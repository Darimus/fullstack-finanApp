import { Router } from 'express';
import { ListUsersController } from '@modules/users/useCases/listUsers/ListUsersController';
import { CreateUsersController } from '../modules/users/useCases/createUsers/CreateUsersController';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();

usersRoutes.use(ensureAuthenticated)
usersRoutes.post("/", createUsersController.handle);
usersRoutes.get("/", listUsersController.handle)

export { usersRoutes };