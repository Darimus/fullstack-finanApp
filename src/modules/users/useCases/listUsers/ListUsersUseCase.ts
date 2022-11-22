import { Users } from "../../entities/Users";
import { IUserRepository } from "../../repositories/IUsersRepository";


class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) { }

  execute(): Users[] {
    const users = this.userRepository.list()
    return users
  }
}

export { ListUsersUseCase }