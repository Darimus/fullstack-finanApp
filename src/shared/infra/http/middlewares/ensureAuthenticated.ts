import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "d5159d38f31add923c0455e9bb90b18c") as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("Usuario não existe", 401)
    }

    next();
  } catch {
    throw new AppError("Token Invalido!", 401);
  }
}