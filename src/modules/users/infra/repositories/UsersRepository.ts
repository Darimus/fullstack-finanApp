import { ICreateUsersDTO } from "@modules/users/dtos/ICreateUsersDTO";
import { Repository, getRepository } from "typeorm";
import { Users } from "../entities/Users";
import { IUserRepository } from "./IUsersRepository";

class UsersRepository implements IUserRepository {


  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }


  async create({ user, password, email }: ICreateUsersDTO): Promise<void> {
    const users = this.repository.create({
      user,
      password,
      email
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

  async findByEmail(email: string): Promise<Users> {
    const users = await this.repository.findOne({ email })
    return users;
  }

  async findById(id: string): Promise<Users> {
    const users = await this.repository.findOne(id)
    return users;
  }
}

export { UsersRepository }