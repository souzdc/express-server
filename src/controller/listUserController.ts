import { Request, Response } from "express";
import { listUsersService } from "../services/listUsersService";

export const listUserController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();
    return res.status(200).json({
      sucess: true,
      data: users
    });
  }
  catch (error: any) {
    return res.status(400).json({
      sucess: true,
      message: error.message
    });
  }
}