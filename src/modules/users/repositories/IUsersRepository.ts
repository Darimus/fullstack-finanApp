import { Users } from "../entities/Users";

interface ICreateUsersDTO {
  user: string;
  password: string;
}

interface IUserRepository {
  findByName(user: string): Promise<Users>
  list(): Promise<Users[]>;
  create({ user, password }: ICreateUsersDTO): Promise<void>;
}

export { IUserRepository, ICreateUsersDTO }