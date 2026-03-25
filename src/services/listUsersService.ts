import { listUsers } from "../repositories/userRepository";
import { User } from "../types/user";

export const listUsersService = async (): Promise<User[]> => {
  const users = await listUsers();
  return users;
};
