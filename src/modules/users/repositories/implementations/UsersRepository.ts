import { Repository, getRepository } from "typeorm";
import { Users } from "../../entities/Users";
import { ICreateUsersDTO, IUserRepository } from "../IUsersRepository";

class UsersRepository implements IUserRepository {

  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  // public static getInstance(): UsersRepository {
  //   if (!UsersRepository.INSTANCE) {
  //     UsersRepository.INSTANCE = new UsersRepository();
  //   }
  //   return UsersRepository.INSTANCE;
  // }

  async create({ user, password }: ICreateUsersDTO): Promise<void> {
    const users = this.repository.create({
      user,
      password
    });

    await this.repository.save(users)
  }

  async list(): Promise<Users[]> {
    const users = await this.repository.find()
    return users
  }

  async findByName(user: string): Promise<Users> {
    const users = await this.repository.findOne({ user })
    return users;
  }
}

export { UsersRepository }