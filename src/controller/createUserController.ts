import { Request, Response } from "express";
import { createUserService } from "../services/createUserService";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUserService({ name, email, password });

    return res.status(201).json({
      sucess: true,
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      sucess: false,
      data: error.message,
    });
  }
};
