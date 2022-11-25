import { Users } from "../entities/Users";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";

interface IUserRepository {
  create({ user, password, email }: ICreateUsersDTO): Promise<void>;
  list(): Promise<Users[]>;
  findById(id: string): Promise<Users>
  findByName(user: string): Promise<Users>
  findByEmail(email: string): Promise<Users>
}

export { IUserRepository }