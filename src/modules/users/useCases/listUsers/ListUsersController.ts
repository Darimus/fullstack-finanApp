import { Request, Response } from "express"
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUsersUsecase: ListUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listUsersUsecase.execute();

    return response.json(all);
  }
}

export { ListUsersController }