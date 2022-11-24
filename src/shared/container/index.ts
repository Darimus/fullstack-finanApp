import { container } from "tsyringe";

import { UsersRepository } from "../../modules/users/infra/repositories/UsersRepository";
import { IUserRepository } from "../../modules/users/infra/repositories/IUsersRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
)