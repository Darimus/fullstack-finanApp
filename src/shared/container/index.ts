import { container } from "tsyringe";
import "@shared/container/providers";

import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUserRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
)