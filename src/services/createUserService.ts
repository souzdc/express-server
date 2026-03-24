import { v4 as uuidv4 } from 'uuid';
import { createUser } from '../repositories/userRepository';
import { User } from '../types/user';

interface CreateUserDTO {
  name: string,
  email: string,
  password: string
}

export const createUserService = async (data: CreateUserDTO): Promise<User> => {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new Error("Missing name, email or password");
  }

  const user: User = {
    id: uuidv4(),
    name,
    email,
    password
  }

  const createdUser = await createUser(user);

  return createdUser;
}