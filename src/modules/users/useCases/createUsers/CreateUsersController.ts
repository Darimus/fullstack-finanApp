import { Request, Response } from 'express'
import { CreateUsersUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe'

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user, password, email } = request.body;
    const createUsersUseCase = container.resolve(CreateUsersUseCase)

    await createUsersUseCase.execute({ user, password, email })

    return response.status(201).send();
  }
}

export { CreateUsersController }