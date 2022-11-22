import { inject, injectable } from "tsyringe/dist/typings/decorators";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user: string;
  password: string;
}

@injectable()
class CreateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository) {
  }

  async execute({ user, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByName(user);

    if (userAlreadyExists) {
      throw new Error("Usuario já existente.");
    }

    this.userRepository.create({ user, password });
  }
}

export { CreateUsersUseCase }