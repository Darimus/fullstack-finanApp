import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUsecase = container.resolve(ListUsersUseCase)
    const all = await listUsersUsecase.execute();

    return response.json(all);
  }
}

export { ListUsersController }