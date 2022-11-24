import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { AppError } from "@errors/AppError";

interface IRequest {
  user: string;
  password: string;
  email: string;
}

@injectable()
class CreateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository) {
  }

  async execute({ user, password, email }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByName(user);
    const userEmailAlreadyExists = await this.userRepository.findByEmail(email);

    const passwordHash = await hash(password, 8);

    if (userAlreadyExists || userEmailAlreadyExists) {
      throw new AppError("Usuario ou email já existente.");
    }

    this.userRepository.create({ user, password: passwordHash, email });
  }
}

export { CreateUsersUseCase }