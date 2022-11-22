import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const usersRepository = null;
const listUsersUsecase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUsecase);

export { listUsersController };