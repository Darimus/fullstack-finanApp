import { inject, injectable } from "tsyringe";
import { Users } from "../../infra/entities/Users";
import { IUserRepository } from "../../infra/repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {

  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<Users[]> {
    const users = await this.userRepository.list()
    return users
  }
}

export { ListUsersUseCase }