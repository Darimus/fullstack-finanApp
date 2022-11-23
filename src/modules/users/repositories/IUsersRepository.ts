import { Users } from "../entities/Users";
import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";

interface IUserRepository {
  findByName(user: string): Promise<Users>
  findByEmail(email: string): Promise<Users>
  list(): Promise<Users[]>;
  create({ user, password, email }: ICreateUsersDTO): Promise<void>;
}

export { IUserRepository }